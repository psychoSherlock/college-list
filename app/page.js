"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let overview =
    "Muthoot Institute of Technology and Science (MITS) is promoted by Muthoot M. George Institute of Technology, which is a Section 25 company under the Companies Act, 1956. The Institute is approved by the All India Council for Technical Education (AICTE) and affiliated to Mahatma Gandhi University, Kottayam, Kerala. The Institute is located in the industrial belt of Kochi, the commercial capital of Kerala and the seat of Cochin University of Science and Technology (CUSAT). The Institute is well connected by road, rail and air. The nearest railway station is Aluva, which is about 15 km from the Institute. The nearest airport is Cochin International Airport, which is about 25 km from the Institute. The Institute is located in a sprawling campus of 16 acres at Varikoli, 6 km from Thiruvankulam junction on the Thiruvankulam-Muvattupuzha road. The campus is about 20 km from Ernakulam and 6 km from Muvattupuzha.";
  return (
    <main className="min-h-screen bg-[#003366] flex flex-col items-center p-20">
      <h1 className="mono text-7xl text-[whitesmoke] font-black uppercase">
        List of colleges
      </h1>
      <div className="w-full flex flex-wrap pt-20 mono">
        <div
          onClick={() => router.push("/college/1")}
          className="bg-[whitesmoke] rounded-lg p-5 w-[500px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center gap-5">
            <img
              src="https://www.shutterstock.com/image-vector/college-logo-design-template-vector-600nw-2312781315.jpg"
              className="w-32 h-32 rounded-full border-2 border-black"
            />
            <div>
              <h1 className="text-black text-xl font-bold">
                Muthoot Institute of Technology and Science
              </h1>
              <h2 className="text-sm text-black mt-2 ">
                Varikoli, Thirpunithura-Muvattupuzha Highway, Ernakulam, Kerala
                683516
              </h2>
            </div>
          </div>
          <p className="text-sm text-black mt-2">
            {overview.length > 200
              ? overview.substring(0, 200) + "... Read more ->"
              : overview}
          </p>
        </div>
      </div>
    </main>
  );
}
