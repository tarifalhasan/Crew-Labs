import { motion } from "framer-motion";
import data from "./data";
const Sponsors = () => {
  // motion
  let easing = [0.6, -0.05, 0.01, 0.99];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.5,
      },
    },
  };

  return (
    <motion.div className="px-6 md:px-26  pt-2 md:pt-0">
      <motion.p
        className="title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        Thousands of projects worldwide are using Crew Labs
      </motion.p>
      <motion.div
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
        className="grid pb-4 overflow-hidden omy-5 md:grid-cols-4 grid-cols-2 w-full md:w-[60%] mx-auto"
      >
        {data?.map((img) => (
          <motion.span
            variants={item}
            data-aos="fade-left"
            data-aos-duration="2000"
            className="mx-auto"
            key={img.id}
          >
            <div className="flex items-center">
              {<img.icon className="text-[37px]" />}
              {<img.title className="text-[91px] ml-2" />}
            </div>
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Sponsors;
