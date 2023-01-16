import styles from "../../styles/Contact.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 py-0 md:py-8 md:grid-cols-2 px-12 md:px-24">
      <div className="my-4 md:my-0">
        <p className={`${styles.title}`}>Questions, bug reports, feedback.</p>
        <h2 className={`${styles.heading}`}>Contact us</h2>
      </div>
      <div className="mb-4">
        <div className="">
          <label className={styles.title} htmlFor="Email">
            Your email
          </label>
          <Input />
        </div>
        <div>
          <label className={`${styles.title}`} htmlFor="message">
            Tell us what you need help with:
          </label>
          <textarea
            className={styles.message}
            name="message"
            cols="60"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="mt-4">
          <Button name="Send now" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
