import React, { useState } from "react";
import Course from "../Courses/Course";
import Scholarship from "../Scholarships/Scholarship";

const BottomSection = ({ data }) => {
  const [selectedPage, setSelectedPage] = useState(4);
  function changeSelected(value) {
    setSelectedPage(value);
  }
  return (
    <div className="px-20  pt-10 mono">
      <div className="flex text-center">
        <h1
          onClick={() => changeSelected(4)}
          className={`${
            selectedPage === 4
              ? "bg-[#003366] border-[#003366] text-white"
              : "border-black text-black"
          } select-none cursor-pointer text-xl flex justify-center items-center font-bold uppercase border-y-4 border-x-2 border-l-4  p-2 mb-2 w-1/5`}
        >
          Courses
        </h1>
        <h1
          onClick={() => changeSelected(5)}
          className={`${
            selectedPage === 5
              ? "bg-[#003366] border-[#003366] text-white"
              : "border-black text-black"
          } select-none cursor-pointer text-xl flex justify-center items-center font-bold uppercase border-y-4 border-x-2  p-2 mb-2 w-1/5`}
        >
          Scholarships
        </h1>
        <h1
          onClick={() => changeSelected(1)}
          className={`${
            selectedPage === 1
              ? "bg-[#003366] border-[#003366] text-white"
              : "border-black text-black"
          } select-none cursor-pointer text-xl flex justify-center items-center font-bold uppercase border-y-4 border-x-2  p-2 mb-2 w-1/5`}
        >
          Eligibility
        </h1>
        <h1
          onClick={() => changeSelected(2)}
          className={`${
            selectedPage === 2
              ? "bg-[#003366] border-[#003366] text-white"
              : "border-black text-black"
          } select-none cursor-pointer text-xl flex justify-center items-center font-bold uppercase border-y-4 border-x-2  p-2 mb-2 w-1/5`}
        >
          Finances
        </h1>
        <h1
          onClick={() => changeSelected(3)}
          className={`${
            selectedPage === 3
              ? "bg-[#003366] border-[#003366] text-white"
              : "border-black text-black"
          } select-none cursor-pointer text-xl flex justify-center items-center font-bold uppercase border-y-4 border-x-2  border-r-4  p-2 mb-2 w-1/5`}
        >
          Department And Faculty
        </h1>
      </div>
      {selectedPage === 1 && (
        <h1
          className="font-bold text-xl"
          dangerouslySetInnerHTML={{
            __html: data.eligibility ? data.eligibility : "Unavailable",
          }}
        ></h1>
      )}
      {selectedPage === 2 && (
        <div className="relative">
          <div className="w-full h-full absolute z-10"></div>
          <h1
            className="font-bold text-xl"
            dangerouslySetInnerHTML={{
              __html: data.finance ? data.finance : "Unavailable",
            }}
          ></h1>
        </div>
      )}
      {selectedPage === 3 && (
        <h1
          className="font-bold text-xl"
          dangerouslySetInnerHTML={{
            __html: data.department ? data.department : "Unavailable",
          }}
        ></h1>
      )}
      {selectedPage === 4 && (
        <div className="flex flex-wrap gap-10 mt-6 justify-around">
          {data.courses.map((value, index) => (
            <Course courseData={value} key={index} />
          ))}
          <div className="w-full flex gap-5 justify-center text-white items-end">
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              1
            </div>
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              2
            </div>
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              3
            </div>
          </div>
        </div>
      )}
      {selectedPage === 5 && (
        <div className="flex flex-wrap gap-10 mt-6 justify-around">
          {data.scholarships.map((value, index) => (
            <Scholarship scholarshipData={value} key={index} />
          ))}
          <div className="w-full flex gap-5 justify-center text-white items-end">
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              1
            </div>
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              2
            </div>
            <div className="bg-[#003366] p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105">
              3
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomSection;
