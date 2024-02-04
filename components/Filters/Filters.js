"use client";
import { useFilterContext } from "@/hooks/useFilterContext";

const Filters = ({ search, filterOptions }) => {
  const { current, dispatch } = useFilterContext();
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <div className="w-2/3 bg-[whitesmoke] rounded-lg p-10 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex items-center lg:w-1/2 justify-between mono">
          <input
            name="courseName"
            type="text"
            placeholder="Course Name"
            className="p-3 md:p-4 md:text-base text-sm text-black placeholder:text-black w-full border-2 border-[#003366] rounded-md outline-none"
            value={current.courseName !== "" ? current.courseName : ""}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, courseName: e.target.value },
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row items-center lg:w-1/2 justify-between">
          <label
            htmlFor="countries"
            className="text-xl mono font-bold text-center md:text-left"
          >
            Country:
          </label>
          <select
            id="countries"
            name="countries"
            className="pl-4 py-2 lg:ml-5 w-32 lg:w-44 bg-[#003366] text-white rounded-sm"
            value={current.country !== "" ? current.country : "australia"}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, country: e.target.value },
              });
            }}
          >
            {filterOptions &&
              filterOptions.uniqueCountries.map((i, index) => (
                <option value={i} key={index}>
                  {toTitleCase(i)}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col md:flex-row gap-2 items-center lg:w-1/2 justify-between">
          <label
            htmlFor="types"
            className="text-xl mono font-bold text-center md:text-left"
          >
            Type:
          </label>
          <select
            id="types"
            name="types"
            className="pl-4 py-2 md:ml-5 w-32 lg:w-44 bg-[#003366] text-white rounded-sm"
            value={current.type !== "" ? current.type : "Choose"}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, type: e.target.value },
              });
            }}
          >
            <option value="">Choose</option>
            {filterOptions &&
              filterOptions.uniqueCourseTypes.map((i, index) => (
                <option value={i} key={index}>
                  {i}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 md:flex-row items-center lg:w-1/2 justify-between">
          <label
            htmlFor="level"
            className="text-xl mono font-bold text-center lg:text-left"
          >
            Level:
          </label>
          <select
            id="level"
            name="level"
            className="pl-4 py-2 lg:ml-5 w-32 lg:w-44 bg-[#003366] text-white rounded-sm"
            value={current.program !== "" ? current.program : "Choose"}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, program: e.target.value },
              });
            }}
          >
            <option value="">Choose</option>
            {filterOptions &&
              filterOptions.uniquePrograms.map((i, index) => (
                <option value={i} key={index}>
                  {i}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mono gap-5">
        <input
          name="collegeName"
          type="text"
          placeholder="College Name"
          className="p-3 md:p-4 w-full text-sm md:text-base text-black placeholder:text-black md:w-1/2 border-2 border-[#003366] rounded-md outline-none"
          value={current.collegeName !== "" ? current.collegeName : ""}
          onChange={(e) => {
            dispatch({
              type: "CHANGE_FILTER",
              payload: { ...current, collegeName: e.target.value },
            });
          }}
        />
        <button
          onClick={search}
          className="p-3 md:p-4 w-full bg-[whitesmoke] border-2 border-[#003366] md:w-1/2 p-4 rounded-md text-black hover:bg-[#003366] hover:text-[whitesmoke] transition-all ease-in-out duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
