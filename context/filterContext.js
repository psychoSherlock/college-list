"use client";
import { createContext, useReducer } from "react";

export const FilterContext = createContext(null);

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        current: action.payload,
      };
    default:
      return state;
  }
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, {
    current: {
      country: "",
      program: "",
      type: "",
      courseName: "",
      collegeName: "",
    },
  });

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
