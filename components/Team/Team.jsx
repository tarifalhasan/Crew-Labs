import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Team.module.css";
import Anne from "../images/team/Anne.png";
import Cassey from "../images/team/Cassey.png";
import Christian from "../images/team/Christian.png";
import Dan from "../images/team/Dan.png";
import Jack from "../images/team/jack.png";
import Linkedin from "../images/team/linkedien.svg";
import Steve from "../images/team/Steve.png";
import Twitter from "../images/team/twitter.svg";
import Veronica from "../images/team/Veronica.png";
import Wanda from "../images/team/Wanda.png";
const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Wanda Maximof",
      role: "Senior Blockchain",
      img: Wanda,
    },
    {
      id: 2,
      name: "Steve Burnley",
      role: "Backend Leads",
      img: Steve,
    },
    {
      id: 3,
      name: "Jack Williams",
      role: "UI/UX Engineer",
      img: Jack,
    },
    {
      id: 4,
      name: "Veronica Rei",
      role: "Cryptography Engineer",
      img: Veronica,
    },
    {
      id: 5,
      name: "Cassey Fanesh",
      role: "Frontend Developers",
      img: Cassey,
    },
    {
      id: 6,
      name: "Dan Hamburg",
      role: "Backend Developers",
      img: Dan,
    },
    {
      id: 7,
      name: "Anne Kath",
      role: "Database Engineer",
      img: Anne,
    },
    {
      id: 8,
      name: "Christian Van Hoc",
      role: "Community Manager",
      img: Christian,
    },
  ];
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

  const title = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <>
      <motion.div className="relative pt-2 container">
        <div className={` px-6 md:px-20 mx-auto`}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="heading"
          >
            <p className="title">Who we are?</p>
            <motion.h2
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="heading"
            >
              Meet our teams.
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid pt-8 gap-5 md:my-8 grid-cols-2 items-center md:grid-cols-4"
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: false }}
          >
            {teamMembers?.map((data) => (
              <motion.div
                variants={item}
                key={data.id}
                className={`text-center py-4 md:py-10`}
              >
                <Image
                  className="rounded-full w-[106px]  md:w-[130px] h-[106px] md:h-[130px] block mx-auto"
                  alt={data.name}
                  src={data.img}
                />
                <div className="mt-8">
                  <h2 className={`${styles.name}`}>{data.name}</h2>
                  <p className={`${styles.role}`}>{data.role}</p>
                  <div className="icon flex items-center justify-center gap-3">
                    <Link href="/twitter">
                      <Twitter className="text-2xl" />
                    </Link>
                    <Link href="/twitter">
                      <Linkedin className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Team;
