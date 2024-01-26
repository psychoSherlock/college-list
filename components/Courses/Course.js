const Course = ({ courseData }) => {
  return (
    <div
      className="bg-[#003366] text-[whitesmoke] w-[400px] min-h-[400px] p-5 rounded-lg hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
      // onClick={() => (window.location.href = courseData.courseUrl)}
    >
      <div className="border-2 borde-white rounded-lg p-5 h-full flex flex-col gap-2 justify-between">
        <h1 className="font-black text-2xl uppercase">
          {courseData.courseName}
        </h1>

        <h2 className="font-bold text-xl">{courseData.program}</h2>

        <h2 className="font-bold">
          {courseData.courseType} - {courseData.duration}
        </h2>
        <h2 className="font-bold">Start Date - {courseData.startDate}</h2>
        <h2 className="font-bold"></h2>

        <h2 className="text-xl font-bold ">
          Fees:{" "}
          {courseData.perYearFeeAUD
            ? `${courseData.perYearFeeAUD} AUD
          per year`
            : "Unavaiable"}
        </h2>
      </div>
    </div>
  );
};

export default Course;
