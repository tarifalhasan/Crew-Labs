import Image from "next/image";
import styles from "../../styles/Card.module.css";
const Card = ({ image, title, subTitle }) => {
  return (
    <div
      className={`${styles.CardStyle} w-[100%] py-12 md:w-[100%] text-center`}
    >
      <div className="w-full md:w-[70%] mx-auto">
        <Image className="block mx-auto" alt={title} src={image} />
        <p className="py-4">{title}</p>
        <span className=" text-sm text-[#AEAFB4]">{subTitle}</span>
      </div>
    </div>
  );
};

export default Card;
