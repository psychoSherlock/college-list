import { useRouter } from "next/navigation";

const CollegeCard = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/college/${data._id}`)}
      className="bg-[whitesmoke] rounded-lg p-5 w-[500px] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="flex items-center gap-5">
        <img
          src="https://www.shutterstock.com/image-vector/college-logo-design-template-vector-600nw-2312781315.jpg"
          className="w-32 h-32 rounded-full border-2 border-black"
        />
        <div>
          <h1 className="text-black text-xl font-bold">
            {data.courseName ? data.courseName.trim() : ""}
          </h1>
          <h2 className="text-sm text-black mt-2 ">
            {data.name ? data.name.trim() : ""}
            {data.logo && data.logo}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
