"use client";
import BottomSection from "@/components/College/BottomSection";
import TopSection from "@/components/College/TopSection";
import { getCurrencyCode } from "@/data/currencyMap";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollegePage() {
  const { current, dispatch } = useFilterContext();
  const [loading, setLoading] = useState(true);
  const { collegeId } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  const [converionRate, setConversionRate] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.api}/colleges/${collegeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const { college, currencyConversion } = await response.json();
        college.courseDetails = college.courseDetails.filter((courseDetail) => {
          if (
            current.program !== "" &&
            current.program !== courseDetail.program
          ) {
            return false;
          }
          if (current.type !== "" && current.type !== courseDetail.courseType) {
            return false;
          }
          if (
            current.courseName !== "" &&
            !new RegExp(current.courseName, "i").test(courseDetail.courseName)
          ) {
            return false;
          }
          return true;
        });
        setConversionRate(currencyConversion[getCurrencyCode(college.country)]);
        setCollegeData(college);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return null;
      }
    }
    if (collegeId) {
      fetchData();
    }
  }, [collegeId]);
  return (
    <>
      {loading ? (
        <div className="w-screen min-h-screen flex justify-center items-center mono text-4xl font-bold">
          Loading...
        </div>
      ) : collegeData ? (
        <div className="text-black bg-[lightgray] min-h-screen pb-20">
          <TopSection
            data={{
              name: collegeData.name,
              collegeUrl: collegeData.collegeUrl,
              address: collegeData.address,
              logo: collegeData.logo,
              // campus: collegeData.campus.coordinate[0],
              // about: collegeData.landing.overview.about,
              // overviewHtml: collegeData.landing.overview.html,
              // overviewRanking: collegeData.landing.overview.ranking,
            }}
          />
          <BottomSection
            converionRate={converionRate}
            data={{
              // eligibility: collegeData.landing.eligibility.html,
              // finance: collegeData.landing.finance.html,
              // department: collegeData.landing.department.html,
              courses: collegeData.courseDetails,
              scholarships: collegeData.scholarshipDetails,
            }}
          />
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
}
