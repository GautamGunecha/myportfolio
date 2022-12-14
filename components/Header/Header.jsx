import { useState, useEffect } from "react";
import Link from "next/link";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import NavMobile from "./NavMobile";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState("home");

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full fixed z-[100] ease-in-out duration-500 flex items-center md:justify-evenly justify-between p-4 bg-neutral-900 text-white shadow-sm shadow-orange-400"
          : "w-full fixed z-[100] ease-in-out duration-500 flex items-center md:justify-evenly justify-between p-4 bg-neutral-900 text-white"
      }
    >
      <section>
        <h1 className="hover:text-orange-400 transition duration-500 ease-out hover:ease-in font-primary text-base font-semibold cursor-pointer">
          Gautam Gunecha
        </h1>
      </section>

      <section className="hidden md:flex items-center gap-5">
        <Link href="/">
          <p
            onClick={() => setNav("home")}
            className={
              nav === "home"
                ? "cursor-pointer text-orange-400 transition duration-500 ease-out hover:ease-in"
                : "cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in"
            }
          >
            Home
          </p>
        </Link>

        <Link href="/#about">
          <p
            onClick={() => setNav("about")}
            className={
              nav === "about"
                ? "cursor-pointer text-orange-400 transition duration-500 ease-out hover:ease-in"
                : "cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in"
            }
          >
            About
          </p>
        </Link>

        <Link href="/#projects">
          <p
            onClick={() => setNav("portfolio")}
            className={
              nav === "portfolio"
                ? "cursor-pointer text-orange-400 transition duration-500 ease-out hover:ease-in"
                : "cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in"
            }
          >
            Portfolio
          </p>
        </Link>

        <Link href="/#contactme">
          <p
            onClick={() => setNav("contact")}
            className={
              nav === "contact"
                ? "cursor-pointer text-orange-400 transition duration-500 ease-out hover:ease-in"
                : "cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in"
            }
          >
            Contact
          </p>
        </Link>

        <Link href="/#skills">
          <p
            onClick={() => setNav("skills")}
            className={
              nav === "skills"
                ? "cursor-pointer text-orange-400 transition duration-500 ease-out hover:ease-in"
                : "cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in"
            }
          >
            Skills
          </p>
        </Link>
      </section>

      <section className="hidden md:flex items-center gap-5">
        <Link href="https://github.com/GautamGunecha">
          <AiOutlineGithub
            size={22}
            className="cursor-pointer hover:text-gray-300 transition duration-500 ease-out hover:ease-in"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/gunechagautam">
          <AiOutlineLinkedin
            size={22}
            className="cursor-pointer hover:text-sky-600 transition duration-500 ease-out hover:ease-in"
          />
        </Link>

        <Link href="https://twitter.com/GunechaGautam">
          <AiOutlineTwitter
            size={22}
            className="cursor-pointer hover:text-sky-400 transition duration-500 ease-out hover:ease-in"
          />
        </Link>
      </section>

      <div className="md:hidden cursor-pointer">
        <NavMobile />
      </div>
    </div>
  );
};

export default Header;
