import Image from "next/image";
import styles from "../../styles/Services.module.css";
import data from "./data";
const Services = () => {
  return (
    <div className="px-4 md:px-20 mx-auto">
      <div className=" px-4 md:px-20 mx-auto">
        <div className="heading py-4">
          <p className="title">What we do?</p>
          <h3 className="heading">Fast, simple & effortless.</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {data.map((item) => (
          <div key={item.id}>
            <Image src={item.image} className="pb-2" />
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
