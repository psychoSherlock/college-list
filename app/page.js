"use client";
import CollegeCard from "@/components/College/CollegeCard";
import Filters from "@/components/Filters/Filters";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useEffect, useState } from "react";
export default function Home() {
  const { current, dispatch } = useFilterContext();
  const [collegesOverview, setCollegesOverview] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noOfPages, setNoOfPages] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [filterNow, setFilterNow] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.api}/colleges`);
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const { uniqueFilterOptions } = await response.json();
        setFilterOptions(uniqueFilterOptions[0]);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    fetchData();
  }, []);

  function handlePageChange(type) {
    if (type === "next") {
      setSelectedPage((prev) => prev + 1);
    } else if (type === "prev") {
      setSelectedPage((prev) => prev - 1);
    }
    setFilterNow(!filterNow);
  }
  function search() {
    setLoading(true);
    const url = new URL(`${process.env.api}/colleges/filters`);
    url.searchParams.append("page", selectedPage);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(current),
    }).then(async (res) => {
      const { data, noOfColleges } = await res.json();
      if (
        current.program === "" &&
        current.type === "" &&
        current.courseName === "" &&
        current.collegeName === ""
      ) {
        setNoOfPages(Math.ceil(noOfColleges / 20));
      } else {
        setNoOfPages(Math.ceil(noOfColleges / 50));
      }
      setCollegesOverview(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (filterNow !== null) {
      search();
    }
  }, [filterNow]);

  return (
    <main className="min-h-screen bg-[#003366] flex flex-col items-center py-10 px-5 md:p-20">
      <Filters search={search} filterOptions={filterOptions} />
      {
        <div className="w-full flex flex-wrap pt-20 justify-center mono gap-5">
          {loading ? (
            <div className="w-full flex flex-wrap justify-center mono gap-5">
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
              <div className="bg-[whitesmoke] animate-pulse w-[500px] h-[200px] rounded-lg"></div>
            </div>
          ) : (
            collegesOverview != [] &&
            collegesOverview.map((i, index) => (
              <CollegeCard key={index} data={i} />
            ))
          )}
        </div>
      }
      {noOfPages && (
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <button
            onClick={() => handlePageChange("prev")}
            className="px-4 py-2 w-44 text-center bg-white text-xl mono rounded-sm"
          >
            Previous
          </button>
          <div>
            <label
              htmlFor="pageSelect"
              className="mono mr-5 text-white text-2xl"
            >
              Select Page :
            </label>
            <select
              id="pageSelect"
              value={selectedPage}
              className="text-2xl p-2 "
              onChange={(e) => {
                setSelectedPage(Number(e.target.value));
                setFilterNow(!filterNow);
              }}
            >
              {[...Array(noOfPages)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => handlePageChange("next")}
            className="px-4 w-44 text-center py-2 bg-white text-xl mono rounded-sm"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
