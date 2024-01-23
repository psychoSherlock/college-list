"use client";

import BottomSection from "@/components/College/BottomSection";
import TopSection from "@/components/College/TopSection";
import { useParams } from "next/navigation";

export default function SomeClientComponent() {
  const { collegeId } = useParams();

  return (
    <div className="text-black min-h-screen bg-[whitesmoke] pb-20">
      <TopSection />
      <BottomSection />
    </div>
  );
}
