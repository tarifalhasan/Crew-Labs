import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className="pt-0 lg:px-16 pb-[3rem] md:pt-10 overflow-hidden">
      <div
        className="px-6  grid grid-cols-1"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <div className="pt-[4rem] md:pt-5 text-left md:text-center  w-full lg:w-[84%] mx-auto">
          <h2 className={`${styles.heading}`}>
            The DeFi <br className="block lg:hidden" />
            <span className="text-[#004BDC] md:text-[36A6F6]">Crew</span>
          </h2>
          <p
            className={`${styles.subHeading} text-base py-4 w-full lg:w-[90%] mx-auto`}
          >
            Re-DeFining the future of finance with Crew Lab's business
            solutions. We decentralize your business by unleashing the power of
            Web 3.0 and maximizing your performance.
          </p>
          <div className="flex w-full m-0 md:mx-auto  md:justify-center  items-center text-base py-14 gap-[12px] md:gap-[26px]">
            <div>
              <button className={`${styles.btn}`}>Get started now</button>
            </div>
            <p>
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
