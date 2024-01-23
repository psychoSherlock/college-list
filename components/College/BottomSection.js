import React from "react";
import Course from "../Courses/Course";
import Scholarship from "../Scholarships/Scholarship";

const BottomSection = () => {
  return (
    <div className="px-20  pt-10 mono">
      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mb-2 w-1/2">
        Eligibility
      </h1>
      <h1 className="font-bold text-xl uppercase">
        Pass in Higher Secondary Examination, Kerala or 12th Standard V.H.S.E.,
        C.B.S.E., I.S.C. or equivalent examination with Physics, Chemistry and
        Mathematics as optional subjects or any other examination accepted as
        equivalent thereto, securing at least 50% marks in Mathematics and 50%
        marks in Mathematics, Physics and Chemistry put together.
      </h1>

      <h1 className="text-4xl font-bold uppercase  border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Finances
      </h1>
      <h1 className="font-bold text-xl uppercase">Rs. 1,00,000/- per annum</h1>

      <h1 className="text-4xl font-bold uppercase border-b-4 border-black pb-2 mt-6 mb-2 w-1/2">
        Department And Faculty
      </h1>
      <h1 className="font-bold text-xl uppercase">
        Computer Science and Engineering, Electronics and Communication
        Engineering, Electrical and Electronics Engineering, Mechanical
        Engineering, Civil Engineering, Humanities and Science
      </h1>

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
