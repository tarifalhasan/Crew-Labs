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
  return (
    <>
      <div className="relative pt-2">
        <div className={` px-6 md:px-20 mx-auto`}>
          <div className="heading">
            <p className="title">Who we are?</p>
            <h2 className="heading">Meet our teams.</h2>
          </div>
          <div className="grid pt-8 gap-5 md:my-8 grid-cols-2 items-center md:grid-cols-4">
            {teamMembers.map((item) => (
              <div key={item.id} className={`text-center py-4 md:py-10`}>
                <Image
                  className="rounded-full w-[106px]  md:w-[130px] h-[106px] md:h-[130px] block mx-auto"
                  alt={item.name}
                  src={item.img}
                />
                <div className="mt-8">
                  <h2 className={`${styles.name}`}>{item.name}</h2>
                  <p className={`${styles.role}`}>{item.role}</p>
                  <div className="icon flex items-center justify-center gap-3">
                    <Link href="/twitter">
                      <Twitter className="text-2xl" />
                    </Link>
                    <Link href="/twitter">
                      <Linkedin className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
