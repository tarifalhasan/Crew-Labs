import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className="pt-0 pb-20 md:pt-10">
      <div className="px-4 md:px-24 grid grid-cols-1">
        <div className="pt-4 text-left md:text-center  w-full md:w-[60%] mx-auto">
          <h2 className={`${styles.heading}leading-10	 text-6xl`}>
            Blockchain <br className="block md:hidden" />
            is <span className="text-[#004BDC] md:text-[36A6F6]">Fastest</span>
          </h2>
          <p
            className={`${styles.subHeading} text-base py-4 w-full md:w-[90%] mx-auto`}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years.
          </p>
          <div className="grid w-full mx-auto md:w-[60%] grid-cols-2 items-center text-base">
            <div>
              <button className={`${styles.btn}`}>Get started now</button>
            </div>
            <p>
              {" "}
              <Link href="/developers" className="block">
                Developer guides
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
