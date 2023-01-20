import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Team.module.css";
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
      name: "Ryan Robertson",
      role: "Software Developer",
      img: Wanda,
    },
    {
      id: 2,
      name: "Alex Hamilton",
      role: "UI/UX Specialist & Creative Director",
      img: Steve,
    },
    {
      id: 3,
      name: "Thomas Gaffney",
      role: "Chief Compliance Officer",
      img: Jack,
    },
    {
      id: 4,
      name: "Soumik Dey",
      role: "Resource Manager & Coordinator",
      img: Veronica,
    },
  ];
  // motion
  let easing = [0.6, -0.05, 0.01, 0.99];

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
        duration: 0.2,
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.div className="relative lg:px-16 pt-2">
        <div className={` px-6 mx-auto overflow-x-hidden`}>
          <div data-aos="fade-up" data-aos-duration="3000" className="heading">
            <p className="title">Who are we?</p>
            <h2 className="heading">Meet our founders!</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: true }}
            className="grid pt-8 gap-5  md:my-8 grid-cols-2 items-center md:grid-cols-4"
          >
            {teamMembers.map((item) => (
              <motion.div
                data-aos="fade-right"
                data-aos-duration="2000"
                variants={items}
                key={item.id}
                className={`text-center py-4 md:py-10`}
              >
                <Image
                  className="rounded-full w-[106px]  md:w-[130px] h-[106px] md:h-[130px] block mx-auto"
                  alt={item.name}
                  src={item.img}
                />
                <div className="mt-8">
                  <h2 className={`${styles.name}`}>{item.name}</h2>
                  <p className={`${styles.role} `}>{item.role}</p>
                  <div className="icon flex items-center justify-center gap-4">
                    <Link href="/twitter">
                      <Twitter className="text-[1.7rem]" />
                    </Link>
                    <Link href="/twitter">
                      <Linkedin className="text-[1.7rem]" />
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
