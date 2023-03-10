import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import data from "./data";
const Services = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
  };

  return (
    <motion.div
      id="servics"
      className={`px-[2rem] lg:px-16 overflow-x-hidden  md:pt-0 pb-24  mx-auto ${styles.bg}`}
    >
      <div className=" px-4  mx-auto ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="heading pb-10"
        >
          <p className="title">thanks to web 3.0</p>
          <h3 className="heading">We're able to</h3>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-10 md:grid-cols-4"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
      >
        {data.map((item) => (
          <motion.div
            data-aos="fade-right"
            data-aos-duration="2000"
            variants={items}
            key={item.id}
          >
            <item.image className="text-4xl my-1" />
            <p className={styles.title}>{item.title}</p>
            <div className={styles.line}></div>
            <small className={styles.description}>{item.descripetion}</small>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
