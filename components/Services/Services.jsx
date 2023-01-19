import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import data from "./data";
const Services = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`px-[2rem] pt-10 md:pt-0 pb-24 md:px-[8rem] mx-auto ${styles.bg}`}
    >
      <div className=" px-4 md:px-20 mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="heading pb-10"
        >
          <p className="title">thanks to web 3.0</p>
          <h3 className="heading">We're able to</h3>
        </motion.div>
      </div>
      <motion.div
        className="grid grid-cols-1 gap-10 md:grid-cols-4"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        {data.map((item) => (
          <motion.div variants={items} key={item.id}>
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
