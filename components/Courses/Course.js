const Course = ({ courseData }) => {
  return (
    <div
      className="bg-[#003366] text-[whitesmoke] w-[300px] uppercase p-5 rounded-lg hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
      onClick={() => (window.location.href = courseData.courseUrl)}
    >
      <div className="border-2 borde-white rounded-lg p-5 h-full flex flex-col gap-2 justify-evenly">
        <h1 className="font-bold text-2xl">{courseData.courseName}</h1>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold">{courseData.program}</h2>

          <h2 className="font-bold">{courseData.duration}</h2>
          <h2 className="font-bold">{courseData.startDate}</h2>
          <h2 className="font-bold">{courseData.courseType}</h2>
        </div>

        <h2 className="text-2xl font-bold ">
          Fees: {courseData.perYearFeeAUD} per year
        </h2>
      </div>
    </div>
  );
};

export default Course;
