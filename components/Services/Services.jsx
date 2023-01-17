import styles from "../../styles/Services.module.css";
import data from "./data";
const Services = () => {
  return (
    <div
      className={`px-[2rem] pt-10 md:pt-0 pb-24 md:px-[8rem] mx-auto ${styles.bg}`}
    >
      <div className=" px-4 md:px-20 mx-auto">
        <div className="heading pb-10">
          <p className="title">What we do?</p>
          <h3 className="heading">Fast, simple & effortless.</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-[20px] md:gap-y-[54px] md:grid-cols-4">
        {data.map((item) => (
          <div key={item.id}>
            <item.image className="text-6xl md:text-[48px] my-1" />
            <p className={styles.title}>{item.title}</p>
            <div className={styles.line}></div>
            <small className={styles.description}>{item.descripetion}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
