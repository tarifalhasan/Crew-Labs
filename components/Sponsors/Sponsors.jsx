import Image from "next/image";

import data from "./data";
const Sponsors = () => {
  return (
    <div className="px-4 md:px-24 pt-2 md:pt-10">
      <p className="title">
        Thousands of projects worldwide are using Crew Labs
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 w-full md:w-[60%] mx-auto">
        {data.map((img) => (
          <Image src={img.icon} alt="crew-labs" key={img.id} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
