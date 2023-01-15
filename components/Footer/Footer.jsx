import Link from "next/link";

import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";
import Logo from "../images/logo.png";
import Input from "../Input/Input";
const Footer = () => {
  const links = [
    { name: "About", href: "/about", id: 1 },
    { name: "Privacy Policy", href: "/privacy_policy", id: 2 },
    { name: "Developers", href: "/developers", id: 3 },
    { name: "Community", href: "/community", id: 4 },
  ];
  return (
    <div className="px-4 md:px-24">
      <main className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 ">
        <div className="order-last md:order-first">
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <Image src={Logo} alt="crew labs Logo" />
            <span className="self-center ml-2 font-semibold whitespace-nowrap ">
              Crew Labs
            </span>
          </Link>
          <p className={styles.pragraph}>The Future Blockchain.</p>
          <div className="social_icon flex py-2 items-center gap-2 text-xl text-[#AEAFB4]">
            <Link href="https://linkdein.com">
              <FaLinkedinIn />
            </Link>
            <Link href="https://linkdein.com">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div>
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <span className="self-center   font-semibold whitespace-nowrap ">
              Quick menu.
            </span>
          </Link>
          <div className="py-4">
            <div className="flex justify-between pb-4 text-[#AEAFB4]">
              <p>Collectibles</p>
              <p>Wallets</p>
            </div>
            <div className="flex justify-between pb-4 text-[#AEAFB4]">
              <p>DeFi</p>
              <p>Company</p>
            </div>
            <div className="flex justify-between pb-4 text-[#AEAFB4]">
              <p>Company</p>
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <span className="self-center">Subcribe our latest news</span>
          </Link>
          <p className="text-[#AEAFB4] my-4">
            Subscribe to get update and notify our blockchain and products
          </p>
          <Input btnName="Send" />
        </div>
      </main>
      {/* copy rigth police */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center justify-between text-[#AEAFB4] text-base ${styles.copyright} mt-10`}
      >
        <div className="">
          <p>2023 &copy; Crew Labs. All rights reserved.</p>
        </div>
        <div className="order-first md:order-last">
          <ul className="flex gap-3">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>{link.name} . </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
