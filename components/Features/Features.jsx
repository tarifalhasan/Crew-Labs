import styles from "../../styles/Card.module.css";
import BlockchainImg from "../images/feature/Shine-1.svg";
import Icon2 from "../images/feature/Shine-2.svg";
import Icon3 from "../images/feature/Shine-3.svg";

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-28 lg:px-16 px-4 ">
      <section className={`${styles.Grid} block lg:grid overflow-hidden`}>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className={`${styles.card} md:my-[37px] lg:my-0 h-[353px]`}
        >
          <div
            className={` h-[329px] md:h-auto w-full py-12 md:w-[100%] text-center`}
          >
            <div className="w-full md:w-[70%] mx-auto">
              <div className={styles.cardIcon}>
                <BlockchainImg className="text-[4rem] mx-auto" />
              </div>
              <p className="py-4">Intelligent</p>
              <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                Revolutionize business models by automating processes, reducing
                intermediaries and costs, and increasing transparency.
              </span>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className={`${styles.card} md:my-[37px] lg:my-0 h-[353px] mt-8 md:mt-0`}
        >
          <div
            className={`${styles.CardStyle} md:my-0 my-14 h-[329px] md:h-auto w-full pt-12 md:w-[100%] text-center`}
          >
            <div className="w-full md:w-[70%] mx-auto">
              <div className={styles.cardIcon}>
                <Icon2 className="text-[4rem] mx-auto" />
              </div>
              <p className="py-4">Intelligent</p>
              <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                Revolutionize business models by automating processes, reducing
                intermediaries and costs, and increasing transparency.
              </span>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className={`${styles.card} md:my-[37px] lg:my-0 card mt-8 md:mt-0 h-[353px]`}
        >
          <div
            className={`${styles.CardStyle} w-full py-12 md:w-[100%] text-center`}
          >
            <div className="w-full md:w-[70%] mx-auto">
              <div className={styles.cardIcon}>
                <Icon3 className="text-[4rem] mx-auto" />
              </div>
              <p className="py-4">Intelligent</p>
              <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                Revolutionize business models by automating processes, reducing
                intermediaries and costs, and increasing transparency.
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.card} card h-[353px]`}>
          <div
            className="feature-title px-3 mt-14"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
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
    </section>
  );
};

export default Features;
