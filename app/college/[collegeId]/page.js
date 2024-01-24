"use client";
import BottomSection from "@/components/College/BottomSection";
import TopSection from "@/components/College/TopSection";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SomeClientComponent() {
  const { collegeId } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://list.glitchy.systems/colleges/${collegeId}`
        );
        ``;
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const data = await response.json();
        setCollegeData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    if (collegeId) {
      fetchData();
    }
  }, [collegeId]);

  return (
    <>
      {collegeData && (
        <div className="text-black min-h-screen bg-[whitesmoke] pb-20">
          <TopSection
            data={{
              name: collegeData.name,
              collegeUrl: collegeData.collegeUrl,
              address: collegeData.address,
              campus: collegeData.campus.coordinate[0],
              about: collegeData.landing.overview.about,
              overviewHtml: collegeData.landing.overview.html,
              // overviewRanking: collegeData.landing.overview.ranking,
            }}
          />
          <BottomSection
            data={{
              eligibility: collegeData.landing.eligibility.html,
              finance: collegeData.landing.finance.html,
              department: collegeData.landing.department.html,
            }}
          />
        </div>
      )}
    </>
  );
}
