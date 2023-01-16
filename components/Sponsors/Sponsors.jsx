import data from "./data";
const Sponsors = () => {
  return (
    <div className="px-12 md:px-24 pt-2 md:pt-0">
      <p className="title">
        Thousands of projects worldwide are using Crew Labs
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 w-full md:w-[60%] mx-auto">
        {data.map((img) => (
          <span className="mx-auto">
            <img.icon className="text-[9rem]" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
