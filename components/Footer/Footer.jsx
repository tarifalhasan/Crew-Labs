import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import Logo from "../images/crew logo.svg";
import LlinkedeinIcon from "../images/Instagram.svg";
import TwiterIcon from "../images/LinkedIn.svg";
const Footer = () => {
  const links = [
    { name: "About", href: "/about", id: 1 },
    { name: "Privacy Policy", href: "/privacy_policy", id: 2 },
    { name: "Developers", href: "/developers", id: 3 },
    { name: "Community", href: "/community", id: 4 },
  ];

  return (
    <div className="px-6 md:px-24 pt-5 md:pt-12">
      <main className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 overflow-x-hidden">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="order-last pb-5  md:order-first"
        >
          <Link
            href="/"
            className={`flex items-center gap-0 md:gap-[2px] text-lg items-center${styles.logo}`}
          >
            <Logo className="text-4xl" />
            <span>Crew Labs</span>
          </Link>
          <p className={styles.pragraph}>The DeFi Crew.</p>
          <div className="social_icon flex py-2 items-center gap-2 text-xl text-[#AEAFB4]">
            <Link href="https://linkdein.com">
              <LlinkedeinIcon />
            </Link>
            <Link href="https://twitter.com">
              <TwiterIcon />
            </Link>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-out-up"
          className="pt-5 w-[70%] md:pt-0"
        >
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <span>Quick menu.</span>
          </Link>
          <div className="pt-5">
            <div className="flex justify-between w-[90%] pb-4 text-[#AEAFB4]">
              <p>Collectibles</p>
              <p className="cardWallet">Wallets</p>
            </div>
            <div className="flex justify-between w-[90%] pb-4 text-[#AEAFB4]">
              <p>DeFi</p>
              <p>Company</p>
            </div>
            <div className="flex justify-between w-[90%] pb-4 text-[#AEAFB4]">
              <p>Company</p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="order-first md:order-last"
        >
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <span className="self-center">Subcribe our latest news</span>
          </Link>
          <p className="text-[#AEAFB4] my-4">
            Subscribe to get update and notify our blockchain and products
          </p>

          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="email"
                className="block w-full p-4  text-sm text-white border border-gray-300 rounded-lg  subscribeBtn"
                placeholder="Enter your Email"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 footerBtn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* copy rigth police */}

      <footer className="footer_border bg-transparent rounded-lg  md:flex md:items-center md:justify-between md:p-6 ">
        <span className="footer_text block mt-4 md:mt-0">
          2023 © Crew Labs. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="mr-4 footer_text hover:underline md:mr-6 "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
