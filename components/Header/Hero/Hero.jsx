import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className="pt-0 pb-10 md:pt-10">
      <div className="px-4 md:px-24 grid  md:grid-cols-2 grid-cols-1">
        <div className="pt-16">
          <h2 className={`${styles.heading}`}>
            Blockchain <br />
            is <span className="text-[#004BDC]">Fastest</span>
          </h2>
          <p className={`${styles.subHeading} py-4`}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years. Lorem ipsum dolor sit amet.
          </p>
          <div className="grid grid-cols-2 items-center">
            <div>
              <Button name="Get started now" className="block" />
            </div>
            <p>
              {" "}
              <Link href="/developers" className="block">
                Developer guides
              </Link>
            </p>
          </div>
        </div>
        <div className={`${styles.rightSide} hidden md:block`}></div>
      </div>
    </div>
  );
};

export default Hero;
