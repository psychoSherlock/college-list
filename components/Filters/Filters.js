const Filters = () => {
  const countOpt = [
    "Australia",
    "Canada",
    "China",
    "Germany",
    "India",
    "Ireland",
    "Malaysia",
    "Nepal",
    "New Zealand",
    "Philippines",
    "Russia",
    "Singapore",
    "South Africa",
    "Sweden",
    "Ukraine",
    "United Kingdom",
    "United States",
  ];
  const levelOpt = [
    "Diploma",
    "Bachelor",
    "Master",
    "Doctorate",
    "Certificate",
  ];
  const courseOpt = [
    "Nursing",
    "Engineering",
    "Business",
    "Computer Science",
    "Medicine",
    "Psychology",
  ];
  return (
    <div className="w-2/3  bg-[whitesmoke] rounded-lg p-10 flex flex-col gap-5">
      <div className="flex justify-between gap-5">
        <div className="flex items-center w-1/2 justify-between">
          <label htmlFor="countries" className="text-xl mono font-bold">
            Choose a country:
          </label>
          <select
            id="countries"
            name="countries"
            className="pl-4 py-2 ml-5 w-56 bg-[#003366] text-white rounded-sm"
          >
            {countOpt.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center w-1/2 justify-between">
          <label htmlFor="level" className="text-xl mono font-bold">
            Choose a level:
          </label>
          <select
            id="level"
            name="level"
            className="pl-4 py-2 ml-5 w-56 bg-[#003366] text-white rounded-sm"
          >
            {levelOpt.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex items-center w-1/2 justify-between">
          <label htmlFor="types" className="text-xl mono font-bold">
            Choose a course type:
          </label>
          <select
            id="types"
            name="types"
            className="pl-4 py-2 ml-5 w-56 bg-[#003366] text-white rounded-sm"
          >
            {courseOpt.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center w-1/2 justify-between mono">
          <input
            name="courseName"
            type="text"
            placeholder="Enter the course name"
            className="p-4 text-black placeholder:text-black w-full border-2 border-[#003366] rounded-md outline-none"
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-between mono">
        <input
          name="collegeName"
          type="text"
          placeholder="Enter the college name"
          className="p-4 text-black placeholder:text-black w-full border-2 border-[#003366] rounded-md outline-none"
        />
      </div>
    </div>
  );
};

export default Filters;
