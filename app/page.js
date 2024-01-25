"use client";
import CollegeCard from "@/components/College/CollegeCard";
import Filters from "@/components/Filters/Filters";
import { useEffect, useState } from "react";
export default function Home() {
  const [collegesOverview, setCollegesOverview] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.api}/colleges`);
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const { data, uniqueFilterOptions } = await response.json();
        setCollegesOverview(data);
        setLoading(false);
        setFilterOptions(uniqueFilterOptions[0]);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    fetchData();
  }, []);
  function changeLoading(value) {
    setLoading(value);
  }
  function setFilteredData(data) {
    setCollegesOverview(data);
  }
  return (
    <main className="min-h-screen bg-[#003366] flex flex-col items-center p-20">
      <div className="w-full flex flex-col justify-between items-center gap-10">
        <Filters
          setFilteredData={setFilteredData}
          filterOptions={filterOptions}
          changeLoading={changeLoading}
        />
      </div>
      {
        <div className="w-full flex flex-wrap pt-20 justify-between mono gap-5">
          {loading ? (
            <div className="w-full flex flex-wrap justify-between mono gap-5">
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
    </main>
  );
}
