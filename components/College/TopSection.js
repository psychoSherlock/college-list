const TopSection = () => {
  return (
    <div className="bg-[#003366] mono text-[whitesmoke] w-full min-h-[500px] p-20">
      <div className="flex justify-between items-center gap-5">
        <div>
          <h1 className="uppercase text-6xl font-bold w-1/2">
            Muthoot Institute of Technology and Science
          </h1>
          <h6 className="text-md w-max my-2 cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-300 ml-1">
            Visit the website -&gt;
          </h6>
          <h6 className="text-md mt-2 ml-1">
            Varikoli, Thirpunithura-Muvattupuzha Highway, Ernakulam, Kerala
            683516
          </h6>
          <h6 className="text-md my-1 ml-1">10.0489° N, 76.4036° E</h6>
          <div className="my-5 w-full h-1 bg-[whitesmoke]"></div>
          <p className="font-semibold text-lg ">
            Muthoot Institute of Technology and Science (MITS) is promoted by
            Muthoot M. George Institute of Technology, which is a Section 25
            company under the Companies Act, 1956. The Institute is approved by
            the All India Council for Technical Education (AICTE) and affiliated
            to Mahatma Gandhi University, Kottayam, Kerala. The Institute is
            located in the industrial belt of Kochi, the commercial capital of
            Kerala and the seat of Cochin University of Science and Technology
            (CUSAT). The Institute is well connected by road, rail and air. The
            nearest railway station is Aluva, which is about 15 km from the
            Institute. The nearest airport is Cochin International Airport,
            which is about 25 km from the Institute. The Institute is located in
            a sprawling campus of 16 acres at Varikoli, 6 km from Thiruvankulam
            junction on the Thiruvankulam-Muvattupuzha road. The campus is about
            20 km from Ernakulam and 6 km from Muvattupuzha.
          </p>
        </div>
        <img
          src="https://www.shutterstock.com/image-vector/college-logo-design-template-vector-600nw-2312781315.jpg"
          className="w-96 h-96 rounded-full"
        />
      </div>
    </div>
  );
};

export default TopSection;
