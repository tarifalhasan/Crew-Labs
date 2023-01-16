import styles from "../../styles/Card.module.css";
import blockchainImg from "../images/Crew Labs SVG/Shine-1.svg";
import icon2 from "../images/Crew Labs SVG/Shine-2.svg";
const Card = () => {
  const data = [
    {
      id: 1,
      title: "Connect Assets",
      subTitle:
        "Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
      icon: blockchainImg,
    },
    {
      id: 2,
      title: "Connect Assets",
      subTitle:
        "Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
      icon: icon2,
    },
  ];

  return (
    <>
      {data.map((data) => (
        <div
          key={data.id}
          className={`${styles.CardStyle} w-full py-12 md:w-[100%] text-center`}
        >
          <div className="w-full md:w-[70%] mx-auto">
            <div className={styles.cardIcon}>
              {<data.icon className="text-[3rem] mx-auto" />}
            </div>
            <p className="py-4">{data.title}</p>
            <span className="w-[80%] mx-auto md:w-full block text-sm text-[#AEAFB4]">
              {data.subTitle}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
