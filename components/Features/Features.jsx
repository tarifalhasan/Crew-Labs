import styles from "../../styles/Card.module.css";
import Button from "../Button/Button";

import Icon3 from "../images/Crew Labs SVG/Shine-3.svg";
import Card from "./Card";
const Features = () => {
  return (
    <div
      className={`block md:flex items-center  justify-between py-10 md:py-28 px-4 md:px-24 `}
    >
      <div className={`basic-[47%] `}>
        <div className="block md:flex items-center gap-5 m-[10px] md:m-[45px]">
          <div className="grid grid-cols-1 gap-7">
            <Card />
          </div>
          <div className="pt-8 ml-0 md:ml-[4.75rem]">
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
      </div>
      <div className="basis-[45%] px-3 mt-14	">
        <h2 className="features_title mt-10 md:mt-0">
          The fastest <br className="hidden md:block " /> blockchain
          <br className="hidden md:block " /> technology.
        </h2>
        <p className="text-[#AEAFB4] text-sm my-6">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature.
        </p>
        <Button name="Learn more" width="w-full md:w-[40%]" />
      </div>
    </div>
  );
};

export default Features;
