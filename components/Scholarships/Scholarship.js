const Scholarship = ({ scholarshipData }) => {
  return (
    <div className="bg-[#003366] text-[whitesmoke] w-[300px] uppercase p-5 rounded-lg hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
      <div className="flex flex-col gap-3 border border-[whitesmoke] p-5 rounded-lg h-full justify-around">
        <h2 className="font-bold text-2xl">
          {scholarshipData.scholarshipName}
        </h2>
        <div className="flex flex-col gap-5 text-xl justify-between">
          <h2 className="font-bold">
            Level: <br />
            {scholarshipData.studyLevel}
          </h2>
          <h2 className="font-bold">
            Deadline: <br />
            {scholarshipData.deadline}
          </h2>
          <h2 className="font-bold">
            Funding Type: <br />
            {scholarshipData.fundType}
          </h2>
        </div>
        <h2 className="text-2xl font-bold">
          Funding Amount: <br />
          {scholarshipData.fundValue}
        </h2>
      </div>
    </div>
  );
};

export default Scholarship;
