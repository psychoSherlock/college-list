"use client";
import CollegeCard from "@/components/College/CollegeCard";
import Filters from "@/components/Filters/Filters";
export default function Home() {
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
    <main className="min-h-screen bg-[#003366] flex flex-col items-center p-20">
      <div className="w-full flex justify-between items-center">
        <h1 className="mono text-7xl text-[whitesmoke] font-black uppercase">
          List of colleges
        </h1>
        <Filters />
      </div>
      <div className="w-full flex flex-wrap pt-20 mono">
        <CollegeCard />
      </div>
    </main>
  );
}
