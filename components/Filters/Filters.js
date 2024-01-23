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
  return (
    <div className="w-1/2 h-44 bg-[whitesmoke] rounded-lg p-10 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex items-center ">
          <label htmlFor="countries" className="text-xl mono font-bold">
            Choose a country:
          </label>
          <select
            id="countries"
            name="countries"
            className="px-4 py-2 ml-5 bg-[#003366] text-white rounded-sm"
          >
            {countOpt.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center ">
          <label htmlFor="level" className="text-xl mono font-bold">
            Choose a level:
          </label>
          <select
            id="level"
            name="level"
            className="px-4 py-2 ml-5 bg-[#003366] text-white rounded-sm"
          >
            {levelOpt.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
