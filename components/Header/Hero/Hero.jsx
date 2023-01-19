import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../../../styles/Hero.module.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      once: true,
    });
  });
  return (
    <div className="pt-0 pb-[3rem] md:pt-10">
      <div
        className="px-6 md:px-24 grid grid-cols-1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="pt-[4rem] md:pt-5 text-left md:text-center  w-full lg:w-[84%] mx-auto">
          <h2 className={`${styles.heading}`}>
            The DeFi
            <br className="block md:hidden" />
            <span className="text-[#004BDC] md:text-[36A6F6]"> Crew</span>
          </h2>
          <p
            className={`${styles.subHeading} text-base py-4 w-full lg:w-[90%] mx-auto`}
          >
            Re-DeFining the future of finance with Crew Lab's business
            solutions. We decentralize your business by unleashing the power of
            Web 3.0 and maximizing your performance. .
          </p>
          <div className="flex w-full m-0 md:mx-auto md:justify-center md:w-[48%]  items-center text-base py-14 gap-[13px] md:gap-[20px]">
            <button className="rounded-full text-lg px-5 py-3">
              Get started now
            </button>
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
