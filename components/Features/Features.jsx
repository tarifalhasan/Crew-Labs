import AOS from "aos";
import { useEffect } from "react";
import styles from "../../styles/Card.module.css";
import Icon3 from "../images/feature/Shine-3.svg";
import Card from "./Card";
const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  });
  return (
    <section className="py-10 md:py-28 px-4 lg:px-28 container">
      <div className={`block md:flex items-center  justify-evenly  `}>
        <div
          className={`basic-[47%] `}
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <div className="block lg:flex items-center humsufer gap-[10.5rem] m-[10px] md:m-[45px]">
            <div className="grid grid-cols-1 gap-7">
              <Card />
            </div>
            <div className="pt-8 ml-0 lg:ml-[4.75rem]">
              <div
                className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center`}
              >
                <div className="w-full md:w-[70%] mx-auto">
                  <div className={styles.cardIcon}>
                    <Icon3 className="text-[3rem] mx-auto" />
                  </div>
                  <p className="py-4">Decentralized</p>
                  <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                    Where data and services are distributed among the network,
                    rather than controlled by a central authority. It puts the
                    power back in your hands.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="basis-[45%] feature-title px-3 mt-14"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="features_title mt-10 md:mt-0">
            Unleashing <br className="hidden md:block " /> the power
            <br className="hidden md:block " /> of Web 3.0
          </h2>
          <p className="text-[#AEAFB4] text-sm my-6">
            Where power is distributed among its users rather than centralized
            in a few large companies or organizations. De-Fi could disrupt
            traditional financial systems by enabling new business models and
            opportunities for entrepreneurship.
          </p>
          {/* <Button name="Learn more" width="w-full md:w-[40%]" /> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
