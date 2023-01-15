import styles from "../../styles/Button.module.css";
const Button = ({ name, width, borderRedius }) => {
  return <button className={`${styles.btn} height ${width}`}>{name}</button>;
};

export default Button;
