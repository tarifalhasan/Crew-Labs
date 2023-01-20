import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAlignRight, FaAngleRight, FaTimes } from "react-icons/fa";
import styles from "../../../styles/Navbar.module.css";
import Logo from "../../images/crew logo.svg";
// hanle route
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = [
    {
      name: "Web 3.0",
      id: 1,
      href: "servics",
    },
    {
      name: "Features",
      id: 2,
      href: "features",
    },
    {
      name: "Team",
      id: 3,
      href: "team",
    },
    {
      name: "Contact Us",
      id: 4,
      href: "contact",
    },
  ];
  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  return (
    <div className="px-6 lg:px-16 ">
      <nav className="bg-transparent sm:px-4 py-2.5  w-full  border-gray-200 ">
        <div className=" flex  flex-wrap items-center justify-between mx-auto">
          <Link href="/" className={`text-xl flex items-center ${styles.logo}`}>
            <Logo className="text-2xl" />
            <span>Crew Labs</span>
          </Link>
          <div className="flex md:order-2 relative">
            <Link
              href="/documention"
              className={`md:flex items-center hidden ${styles.navLink}`}
            >
              Documentation <FaAngleRight />
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden "
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes
                  onClick={() => openNavbar()}
                  className="text-2xl text-white"
                />
              ) : (
                <FaAlignRight
                  onClick={() => openNavbar()}
                  className="text-2xl text-white"
                />
              )}
            </button>
          </div>

          <div
            className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 relative  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="	 z-10 flex flex-col p-4 mt-4 bg-slate-900 rounded	 md:bg-transparent md:sticky absolute md:w-full w-[90%] left-[8px] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium animate__animated sm:animate__zoomIn">
              {navLink.map((link) => (
                <li
                  key={link.id}
                  className={`md:hover:bg-transparent hover:bg-blue-600 p-1 md:p-0 md:text-[#aeafb4] rounded-md`}
                >
                  <Link href={"#" + link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
