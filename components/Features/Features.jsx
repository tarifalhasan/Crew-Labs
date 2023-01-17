import styles from "../../styles/Card.module.css";
import Shine1 from "../images/feature/Shine-1.svg";
import Shine2 from "../images/feature/Shine-2.svg";
import Shine3 from "../images/feature/Shine-3.svg";
const Features = () => {
  return (
    <div className={`block  py-10 md:py-28 sm:px-4 md:px-24 mx-auto`}>
      <div className="card_group block md:block lg:grid lg:grid-cols-3 ">
        <div className="card1 ">
          <div className="py-8 md:py-0">
            <div
              className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center`}
            >
              <div className="w-full md:w-[70%] mx-auto">
                <div className={styles.cardIcon}>
                  <Shine1 className="text-[3rem] mx-auto" />
                </div>
                <p className="py-4">Fast transactions</p>
                <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card2 md:py-7">
          <div
            className={`${styles.CardStyle} sm:w-[285px] lg:w-[285px] py-12 md:w-[496px] text-center`}
          >
            <div className="w-full md:w-[70%] mx-auto">
              <div className={styles.cardIcon}>
                <Shine2 className="text-[3rem] mx-auto" />
              </div>
              <p className="py-4">Fast transactions</p>
              <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical.
              </span>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="relative py-8 md:py-0">
            <div
              className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center md:inherit lg:absolute top-[12rem] top-high`}
            >
              <div className="w-full md:w-[70%] mx-auto">
                <div className={styles.cardIcon}>
                  <Shine3 className="text-[3rem] mx-auto" />
                </div>
                <p className="py-4">Fast transactions</p>
                <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card4 relative">
          <div className="lg:absolute md:top-[312px] lg:top-[171px] left-[27px] px-6 	inherit">
            <h2 className="features_title mt-10 md:mt-0">
              The fastest <br className="hidden md:block " /> blockchain
              <br className="hidden md:block " /> technology.
            </h2>
            <p className="text-[#AEAFB4] text-sm my-6">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature.
            </p>
            <button className="py-2 w-full block h-[46px] rounded-lg md:w-[141px] px-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
