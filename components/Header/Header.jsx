import styles from "../../styles/Header.module.css";
import Hero from "./Hero/Hero";

import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <main className="relative">
      <div className={styles.gredient}>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default Header;
