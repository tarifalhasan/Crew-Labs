import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className="pt-0 pb-[3rem] md:pt-10">
      <div className="px-6 md:px-24 grid grid-cols-1">
        <div className="pt-[4rem] md:pt-5 text-left md:text-center  w-full lg:w-[84%] mx-auto">
          <h2 className={`${styles.heading}`}>
            Blockchain <br className="block md:hidden" />
            is <span className="text-[#004BDC] md:text-[36A6F6]">Fastest</span>
          </h2>
          <p
            className={`${styles.subHeading} text-base py-4 w-full lg:w-[90%] mx-auto`}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years.
          </p>
          <div className="flex w-full m-0 md:mx-auto md:w-[48%]  items-center text-base py-14 gap-[13px] md:gap-[20px]">
            <button className="rounded-full px-4 py-2">Get started now</button>

            <Link href="/developers" className="block">
              Developer guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
