import React from "react";
import Course from "../Courses/Course";
import Scholarship from "../Scholarships/Scholarship";

const BottomSection = ({ data }) => {
  return (
    <div className="px-20  pt-10 mono">
      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mb-2 w-1/2">
        Eligibility
      </h1>
      <h1
        className="font-bold text-xl uppercase"
        dangerouslySetInnerHTML={{
          __html: data.eligibility ? data.eligibility : "Unavailable",
        }}
      ></h1>
      <h1 className="text-4xl font-bold uppercase  border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Finances
      </h1>
      <div className="relative">
        <div className="w-full h-full absolute z-10"></div>
        <h1
          className="font-bold text-xl uppercase"
          dangerouslySetInnerHTML={{
            __html: data.finance ? data.finance : "Unavailable",
          }}
        ></h1>
      </div>

      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Department And Faculty
      </h1>
      <h1
        className="font-bold text-xl uppercase"
        dangerouslySetInnerHTML={{
          __html: data.department ? data.department : "Unavailable",
        }}
      ></h1>

      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Courses
      </h1>
      <div className="flex flex-wrap gap-10 mt-6">
        <Course />
        <Course />
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
      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Scholarships
      </h1>
      <div className="flex flex-wrap gap-10 mt-6">
        <Scholarship />
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
    </div>
  );
};

export default BottomSection;
