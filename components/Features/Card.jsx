import styles from "../../styles/Card.module.css";
import blockchainImg from "../images/feature/Shine-1.svg";
import icon2 from "../images/feature/Shine-2.svg";
const Card = () => {
  const data = [
    {
      id: 1,
      title: "Intelligent",
      subTitle:
        "Revolutionize business models by automating processes, reducing intermediaries and costs, and increasing transparency.",
      icon: blockchainImg,
    },
    {
      id: 2,
      title: "Creative",
      subTitle:
        "A more open and accessible web, allowing for new forms of creativity, and enabling new opportunities for new expression and innovation.",
      icon: icon2,
    },
  ];

  return (
    <>
      {data?.map((data) => (
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
