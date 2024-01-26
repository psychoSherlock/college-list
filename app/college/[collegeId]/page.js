"use client";
import BottomSection from "@/components/College/BottomSection";
import TopSection from "@/components/College/TopSection";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollegePage() {
  const { current, dispatch } = useFilterContext();
  const { collegeId } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.api}/colleges/${collegeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const data = await response.json();
        setCollegeData(data);
        data.courseDetails = data.courseDetails.filter((courseDetail) => {
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
        <div className="text-black bg-[lightgray] min-h-screen pb-20">
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
              courses: collegeData.courseDetails,
              scholarships: collegeData.scholarshipDetails,
            }}
          />
        </div>
      )}
    </>
  );
}
