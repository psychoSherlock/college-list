const TopSection = ({ data }) => {
  return (
    <div className="bg-[#003366] mono text-[whitesmoke] w-full min-h-[500px] p-20">
      <div className="flex justify-between items-center gap-10">
        <div>
          <h1 className="uppercase text-6xl font-bold w-1/2 mb-5">
            {data.name ? data.name : ""}
          </h1>
          {/* <a
            href={data.collegeUrl ? data.collegeUrl : ""}
            className="text-md w-max my-2 cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-300 ml-1"
          >
            Visit the website -&gt;
          </a> */}
          <h6 className="text-md mt-2 ml-1">
            {data.address ? data.address : ""}
          </h6>
          <h6 className="text-md my-1 ml-1">
            {data?.campus?.name ? data?.campus?.name : ""}
          </h6>
          <h6 className="text-md my-1 ml-1">
            {data?.campus?.lat ? data?.campus?.lat + " , " : ""}{" "}
            {data?.campus?.long ? data?.campus?.long : ""}
          </h6>
          <div className="my-5 w-full h-1 bg-[whitesmoke]"></div>
          <p
            className="font-medium text-xl"
            dangerouslySetInnerHTML={{
              __html: data.about ? data.about : data.overviewHtml,
            }}
          ></p>
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
