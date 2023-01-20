import styles from "../../styles/Contact.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 py-8 lg:px-16 md:grid-cols-2 px-6 overflow-x-hidden	">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" my-10 md:my-0 block md:flex  relative  justify-center"
      >
        <div className="md:absolute mt-[86px]">
          <p className={`${styles.title}`}>Questions, bug reports, feedback.</p>
          <h2 className={`${styles.heading}`}>Contact us</h2>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="">
        <div className="">
          <label className={styles.title}>Your email</label>
          <Input />
        </div>
        <div>
          <label className={`${styles.title}`}>
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
