"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.api}/courses/${courseId}`);
        if (!response.ok) {
          if (response.statusText == "Not Found") {
            setCourseData({ html: "No Data Found" });
          }
          return null;
        }
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        return null;
      }
    }
    if (courseId) {
      fetchData();
    }
  }, [courseId]);
  return (
    <div>
      {courseData && (
        <div className="relative">
          <div className="w-full h-full absolute z-10"></div>
          <div
            className={` mono ${
              courseData.html == "No Data Found"
                ? " flex text-7xl justify-center items-center font-bold text-center"
                : ""
            } min-h-screen p-20`}
            dangerouslySetInnerHTML={{
              __html: courseData.html ? courseData.html : "No Data Found",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
