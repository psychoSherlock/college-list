"use client";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useEffect, useState } from "react";

const Filters = ({ setFilteredData, filterOptions, changeLoading }) => {
  const { current, dispatch } = useFilterContext();
  function search() {
    changeLoading(true);
    const url = `${process.env.api}/colleges/filters`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(current),
    }).then(async (res) => {
      const data = await res.json();
      setFilteredData(data);
      changeLoading(false);
      console.log(data);
    });
  }
  useEffect(() => {
    if (filterOptions) {
      dispatch({
        type: "CHANGE_FILTER",
        payload: {
          ...current,
          program: filterOptions.uniquePrograms[0],
          type: filterOptions.uniqueCourseTypes[0],
          country: filterOptions.uniqueCountries[0],
        },
      });
    }
  }, [filterOptions]);
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
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
        <div className="flex items-center w-1/2 justify-between">
          <label htmlFor="level" className="text-xl mono font-bold">
            Choose a level:
          </label>
          <select
            id="level"
            name="level"
            className="pl-4 py-2 ml-5 min-w-56 bg-[#003366] text-white rounded-sm"
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, program: e.target.value },
              });
            }}
          >
            {filterOptions &&
              filterOptions.uniquePrograms.map((i, index) => (
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
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, type: e.target.value },
              });
            }}
          >
            {filterOptions &&
              filterOptions.uniqueCourseTypes.map((i, index) => (
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
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: { ...current, courseName: e.target.value },
              });
            }}
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-between mono gap-5">
        <input
          name="collegeName"
          type="text"
          placeholder="Enter the college name"
          className="p-4 text-black placeholder:text-black w-1/2 border-2 border-[#003366] rounded-md outline-none"
          onChange={(e) => {
            dispatch({
              type: "CHANGE_FILTER",
              payload: { ...current, collegeName: e.target.value },
            });
          }}
        />
        <button
          onClick={search}
          className="bg-[whitesmoke] border-2 border-[#003366] w-1/2 p-4 rounded-md text-black hover:bg-[#003366] hover:text-[whitesmoke] transition-all ease-in-out duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
