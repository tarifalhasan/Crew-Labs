import styles from "../../styles/Card.module.css";
import Icon3 from "../images/Crew Labs SVG/Shine-2.svg";
const Features = () => {
  return (
    <div className={`block  py-10 md:py-28 sm:px-4 md:px-24 mx-auto`}>
      <div class="card_group block md:grid">
        <div className="card1">
          <div className="py-8 md:py-0">
            <div
              className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center`}
            >
              <div className="w-full md:w-[70%] mx-auto">
                <div className={styles.cardIcon}>
                  <Icon3 className="text-[3rem] mx-auto" />
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
        <div className="card2">
          <div
            className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center`}
          >
            <div className="w-full md:w-[70%] mx-auto">
              <div className={styles.cardIcon}>
                <Icon3 className="text-[3rem] mx-auto" />
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
              className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center md:absolute top-[12rem]`}
            >
              <div className="w-full md:w-[70%] mx-auto">
                <div className={styles.cardIcon}>
                  <Icon3 className="text-[3rem] mx-auto" />
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
          <div className="lg:absolute top-[171px] left-[27px] px-3 mt-14	">
            <h2 className="features_title mt-10 md:mt-0">
              The fastest <br className="hidden md:block " /> blockchain
              <br className="hidden md:block " /> technology.
            </h2>
            <p className="text-[#AEAFB4] text-sm my-6">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature.
            </p>
            <button className="py-2 rounded-lg w-auto px-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
