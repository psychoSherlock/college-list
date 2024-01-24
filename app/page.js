"use client";
import CollegeCard from "@/components/College/CollegeCard";
import Filters from "@/components/Filters/Filters";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#003366] flex flex-col items-center p-20">
      <div className="w-full flex flex-col justify-between items-center gap-10">
        <Filters />
      </div>
      <div className="w-full flex flex-wrap pt-20 mono">
        <CollegeCard />
      </div>
    </main>
  );
}
