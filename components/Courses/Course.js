const Course = () => {
  return (
    <div className="bg-[#003366] text-[whitesmoke] uppercase p-5 rounded-lg flex flex-col gap-2">
      <h1 className="font-bold text-2xl">
        B.Tech in Computer Science and Engineering
      </h1>
      <div className="flex justify-between">
        <h2 className="font-bold">B.Tech</h2>
        <div className="flex gap-10">
          <h2 className="font-bold">4 years</h2>
          <h2 className="font-bold">August 2018</h2>
          <h2 className="font-bold">Full Time</h2>
        </div>
      </div>
      <h2 className="text-2xl font-bold border-b-2 border-white pb-2">
        Rs. 1,00,000/- per annum
      </h2>
      <p className="normal-case">
        Muthoot Institute of Technology and Science (MITS) is promoted by
        Muthoot M. George Institute of Technology, which is a Section 25 company
        under the Companies Act, 1956. The Institute is approved by the All
        India Council for Technical Education (AICTE) and affiliated to Mahatma
        Gandhi University, Kottayam, Kerala. The Institute is located in the
        industrial belt of Kochi, the commercial capital of Kerala and the seat
        of Cochin University of Science and Technology (CUSAT). The Institute is
        well connected by road, rail and air. The nearest railway station is
        Aluva, which is about 15 km from the Institute. The nearest airport is
        Cochin International Airport, which is about 25 km from the Institute.
        The Institute is located in a sprawling campus of 16 acres at Varikoli,
        6 km from Thiruvankulam junction on the Thiruvankulam-Muvattupuzha road.
        The campus is about 20 km from Ernakulam and 6 km from Muvattupuzha.
      </p>
      <div className="flex gap-10">
        <h2 className="text-2xl font-bold">Computer Science and Engineering</h2>
        <h2 className="text-2xl font-bold">123456</h2>
      </div>
      <h2 className=" text-2xl font-bold border-y-2 border-white py-2 w-1/2">
        Eligibility
      </h2>
      <p className="normal-case">
        Pass in Higher Secondary Examination, Kerala or 12th Standard V.H.S.E.,
        C.B.S.E., I.S.C. or equivalent examination with Physics, Chemistry and
        Mathematics as optional subjects or any other examination accepted as
        equivalent thereto, securing at least 50% marks in Mathematics and 50%
        marks in Mathematics, Physics and Chemistry put together.
      </p>
    </div>
  );
};

export default Course;
