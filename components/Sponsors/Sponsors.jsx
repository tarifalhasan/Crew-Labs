import data from "./data";

import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="px-6 md:px-24 pt-2 md:pt-0">
      <p className="title">
        Thousands of projects worldwide are using Crew Labs
      </p>
      <div className="grid pb-4 my-5 md:grid-cols-4 grid-cols-2 w-full md:w-[60%] mx-auto">
        {data.map((img) => (
          <span className="mx-auto">
            <Image src={img.icon} alt="team logo" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
