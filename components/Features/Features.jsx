import styles from "../../styles/Features.module.css";
import Button from "../Button/Button";
import blockchainImg from "../images/feature/blockchain.png";
import icon2 from "../images/feature/icon2.png";
import icon3 from "../images/feature/icon3.png";
import Card from "./Card";
const Features = () => {
  return (
    <div
      className={`block md:flex items-center justify-between py-10 px-4 md:px-24 ${styles.features_right}`}
    >
      <div className={`basic-[47%] `}>
        <div className="block md:flex items-center gap-5 m-[10px] md:m-[45px]">
          <div className="grid grid-cols-1 gap-7">
            <Card
              image={blockchainImg}
              title="Connect Assets"
              subTitle="Lorem Ipsum is not simply random text. It has roots in a piece of classical."
            />
            <Card
              image={icon2}
              title="Creator Friendly"
              subTitle="Lorem Ipsum is not simply random text. It has roots in a piece of classical."
            />
          </div>
          <div className="pt-8">
            <Card
              image={icon3}
              title="Fast transactions"
              subTitle="Lorem Ipsum is not simply random text. It has roots in a piece of classical."
            />
          </div>
        </div>
      </div>
      <div className="basis-[45%]	">
        <h2 className=" text-[33px]">
          The fastest <br className="hidden md:block " /> blockchain{" "}
          <br className="hidden md:block " /> technology.
        </h2>
        <p className="text-[#AEAFB4] text-sm my-4">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature.
        </p>
        <Button name="Learn more" width="w-full md:w-[40%]" />
      </div>
    </div>
  );
};

export default Features;
