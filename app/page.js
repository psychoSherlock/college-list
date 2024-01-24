"use client";
import CollegeCard from "@/components/College/CollegeCard";
import Filters from "@/components/Filters/Filters";
import { useEffect, useState } from "react";
export default function Home() {
  const [collegesOverview, setCollegesOverview] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://list.glitchy.systems/collegesOverview"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }
        const data = await response.json();
        setCollegesOverview(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    fetchData();
  }, []);
  return (
    <main className="min-h-screen bg-[#003366] flex flex-col items-center p-20">
      <div className="w-full flex flex-col justify-between items-center gap-10">
        <Filters />
      </div>
      {collegesOverview != [] && (
        <div className="w-full flex flex-wrap pt-20 justify-between mono gap-5">
          {collegesOverview.map((i, index) => (
            <CollegeCard key={index} data={i} />
          ))}
        </div>
      )}
    </main>
  );
}
