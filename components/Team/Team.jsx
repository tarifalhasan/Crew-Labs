import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Team.module.css";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import data from "./data";
const Team = () => {
  return (
    <>
      <div className="relative">
        <div className={styles.gradient}></div>
        <div className=" px-4 md:px-20 mx-auto">
          <div className="heading py-4">
            <p className="title">Who we are?</p>
            <h2 className="heading">Meet our teams.</h2>
          </div>
          <div className="grid gap-5 md:my-16 grid-cols-2 items-center md:grid-cols-4">
            {data.map((item) => (
              <div key={item.id} className={`text-center py-10`}>
                <Image
                  className="rounded-full block mx-auto"
                  alt={item.name}
                  src={item.img}
                />
                <div className="mt-8">
                  <h2 className={`${styles.name}`}>{item.name}</h2>
                  <p className={`${styles.role}`}>{item.role}</p>
                  <div className="icon flex items-center justify-center gap-3">
                    <Link href="/twitter">
                      <Image src={twitter} alt="twitter" />
                    </Link>
                    <Link href="/twitter">
                      <Image src={linkedin} alt="linkedin" />
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
