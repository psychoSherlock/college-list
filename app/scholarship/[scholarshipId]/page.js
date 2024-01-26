"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ScholarshipPage = () => {
  const { scholarshipId } = useParams();
  const [scholarshipData, setScholarshipData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.api}/scholarships/${scholarshipId}`
        );
        if (!response.ok) {
          if (response.statusText == "Not Found") {
            setScholarshipData({ html: "No Data Found" });
          }
          return null;
        }
        const data = await response.json();
        setScholarshipData(data);
      } catch (error) {
        return null;
      }
    }
    if (scholarshipId) {
      fetchData();
    }
  }, [scholarshipId]);
  return (
    <div>
      {scholarshipData && (
        <div className="relative">
          <div className="w-full h-full absolute z-10"></div>
          <div
            className={` mono ${
              scholarshipData.html == "No Data Found"
                ? " flex text-7xl justify-center items-center font-bold text-center"
                : ""
            } min-h-screen p-20`}
            dangerouslySetInnerHTML={{
              __html: scholarshipData.html
                ? scholarshipData.html
                : "No Data Found",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipPage;
