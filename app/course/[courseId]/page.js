"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setCourseData(data);
      } catch (error) {
        setLoading(false);
        return null;
      }
    }
    if (courseId) {
      fetchData();
    }
  }, [courseId]);
  return (
    <div>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center mono text-4xl font-bold">
          Loading...
        </div>
      ) : courseData ? (
        <div className="relative">
          <div className="w-full h-full absolute z-10"></div>
          <div
            className={`mono ${
              courseData.html == "No Data Found"
                ? " flex text-7xl justify-center items-center font-bold text-center"
                : ""
            } min-h-screen p-5 py-20 md:p-20`}
            dangerouslySetInnerHTML={{
              __html: courseData.html ? courseData.html : "No Data Found",
            }}
          ></div>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default CoursePage;
