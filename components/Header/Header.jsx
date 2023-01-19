import styles from "../../styles/Header.module.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <header className={`${styles.gredient}`}>
      <div className={`container`}>
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
