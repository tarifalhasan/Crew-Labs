import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaAngleRight, FaTimes } from "react-icons/fa";
import styles from "../../../styles/Navbar.module.css";
import Logo from "../../images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = [
    {
      name: "Cloud",
      id: 1,
      href: "/cloud",
    },
    {
      name: "Enterprise",
      id: 2,
      href: "/enterprise",
    },
    {
      name: "Pricing",
      id: 3,
      href: "/pricing",
    },
    {
      name: "API & Console",
      id: 4,
      href: "/api/console",
    },
    {
      name: "Support",
      id: 5,
      href: "/support",
    },
  ];
  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" px-4 md:px-24 ">
      <nav className="bg-transparent sm:px-4 py-2.5  w-full  border-gray-200 ">
        <div className="container  flex  flex-wrap items-center justify-between mx-auto">
          <Link href="/" className={`flex items-center${styles.logo}`}>
            <Image src={Logo} alt="crew labs Logo" />
            <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap ">
              Crew Labs
            </span>
          </Link>
          <div className="flex md:order-2 relative">
            <Link
              href="/roadmap"
              className={`md:flex items-center hidden ${styles.navLink}`}
            >
              Roadmap <FaAngleRight />
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
            className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 mt-4 bg-slate-900 rounded	 md:bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  ">
              {navLink.map((link) => (
                <li
                  key={link.id}
                  className={`md:hover:bg-transparent hover:bg-blue-600 p-1 md:p-0 md:text-[#aeafb4] rounded-md`}
                >
                  <Link href={link.href} className={styles.navLink}>
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
