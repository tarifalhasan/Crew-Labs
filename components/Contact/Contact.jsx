import AOS from "aos";
import { useEffect } from "react";
import styles from "../../styles/Contact.module.css";
import Input from "../Input/Input";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  });
  return (
    <div className="grid grid-cols-1 py-8 container md:grid-cols-2 px-6 md:px-24">
      <div
        data-aos="fade-right"
        className="my-10 md:my-0 sm:block md:flex justify-center items-center"
      >
        <div>
          <p className={`${styles.title}`}>Questions, bug reports, feedback.</p>
          <h2 className={`${styles.heading}`}>Contact us</h2>
        </div>
      </div>
      <div className="mb-4" data-aos="fade-left">
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
          <button className="h-[46px] px-6 rounded-lg">Send Mail</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
