import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className="w-full fixed z-[100] ease-in-out duration-500 flex items-center md:justify-evenly justify-between p-4 bg-neutral-800 text-white shadow-sm shadow-orange-400">
      <section>
        <h1 className="hover:text-orange-400 transition duration-500 ease-out hover:ease-in font-primary text-base font-semibold cursor-pointer">
          Gautam Gunecha
        </h1>
      </section>

      <section className="hidden md:flex items-center gap-5">
        <p className="cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
          Home
        </p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
          About
        </p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
          Portfolio
        </p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
          Contact
        </p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
          Blog
        </p>
      </section>

      <section className="hidden md:flex items-center gap-5">
        <AiOutlineGithub
          size={22}
          className="cursor-pointer hover:text-gray-300 transition duration-500 ease-out hover:ease-in"
        />
        <AiOutlineLinkedin
          size={22}
          className="cursor-pointer hover:text-sky-600 transition duration-500 ease-out hover:ease-in"
        />
        <AiOutlineTwitter
          size={22}
          className="cursor-pointer hover:text-sky-400 transition duration-500 ease-out hover:ease-in"
        />
      </section>

      <div className="md:hidden cursor-pointer">
        <NavMobile />
      </div>
    </div>
  );
};

export default Header;
