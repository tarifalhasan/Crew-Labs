import styles from "../../styles/Input.module.css";
const Input = ({ btnName, placeholder, height }) => {
  return (
    <div className={`  ${styles.inputGroup} ${height} justify-between`}>
      <input
        className="bg-transparent border-0 outline-0"
        type="email"
        placeholder="Enter you email address"
      />
    </div>
  );
};

export default Input;
