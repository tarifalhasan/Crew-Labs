import styles from "../../styles/Button.module.css";
const Button = ({ name, width, redius }) => {
  return (
    <button className={`${styles.btn} ${redius} height ${width}`}>
      {name}
    </button>
  );
};

export default Button;
