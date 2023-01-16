import styles from "../../styles/Header.module.css";
import Hero from "./Hero/Hero";

import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <main>
      <div className={``}>
        <Navbar />
        <Hero />
        <div className="relative">
          <div className={styles.floatRightt}></div>
          <div className={styles.floatLeftt}></div>
        </div>
      </div>
    </main>
  );
};

export default Header;
