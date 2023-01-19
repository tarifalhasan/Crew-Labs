import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import data from "./data";
const Services = () => {
  // framer motion effect

  let easing = [0.6, -0.05, 0.01, 0.99];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
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
    <motion.section className="container">
      <div
        className={`px-[2rem] pt-10 md:pt-0 pb-24 md:px-[8rem] mx-auto ${styles.bg}`}
      >
        <div className=" px-4 md:px-26 mx-auto">
          <motion.div
            className="heading pb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <p className="title">What we do?</p>
            <motion.h3
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="heading"
            >
              Fast, simple & effortless.
            </motion.h3>
          </motion.div>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-y-[40px] md:gap-y-[40px] md:gap-x-[28px] md:grid-cols-4"
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: false }}
        >
          {data?.map((ite) => (
            <motion.div variants={item} key={ite.id}>
              <ite.image className="text-6xl md:text-[48px] my-1" />
              <p className={styles.title}>{ite.title}</p>
              <div className={styles.line}></div>
              <small className={styles.description}>{ite.descripetion}</small>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
