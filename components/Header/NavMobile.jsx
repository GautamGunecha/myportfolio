import { Fragment, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const NavMobile = () => {
  const [nav, setNav] = useState(false);

  const handleNavigation = () => {
    setNav((val) => !val);
  };

  return (
    <Fragment>
      <AiOutlineMenu size={20} onClick={handleNavigation} />
      <div
        className={
          nav
            ? "md:hidden fixed bg-black/60 left-0 top-0 ease-in duration-500 w-full h-screen"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen left-0 top-0 w-[75%] md:w-[65%] sm:w-[50%] bg-neutral-800 p-6 ease-in duration-500"
              : "fixed h-screen left-[-100%] top-0 w-[75%] md:w-[65%] sm:w-[50%] bg-neutral-800 p-6 ease-in duration-500"
          }
        >
          {/* Logo & Closebutton */}
          <div className="w-full flex items-center justify-between">
            <h1 className="hover:text-orange-400 transition duration-500 ease-out hover:ease-in font-primary text-xl font-semibold cursor-pointer">
              Gautam Gunecha
            </h1>
            <section
              className="rounded-full
             p-2 shadow-lg shadow-orange-400"
            >
              <AiOutlineClose size={22} onClick={handleNavigation} />
            </section>
          </div>

          {/* Text */}
          <div className="mt-8 border-b">
            <p className="mb-2 hover:bg-orange-500 ease-in duration-500">
              Let's build out something together!
            </p>
          </div>

          {/* navigation */}
          <div className="mt-8 w-full">
            <ul className="w-full flex-col">
              <li className="mb-4 text-lg cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
                Home
              </li>
              <li className="mb-4 text-lg cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
                About
              </li>
              <li className="mb-4 text-lg cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
                Portfolio
              </li>
              <li className="mb-4 text-lg cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
                Contact
              </li>
              <li className="mb-4 text-lg cursor-pointer hover:text-orange-400 transition duration-500 ease-out hover:ease-in">
                Blog
              </li>
            </ul>
          </div>

          {/* socials */}
          <div className="pt-28">
            <h1 className="text-xl">Let's connect!</h1>
            <div className="flex mt-8 w-full text-center gap-8">
              <section className="rounded-full shadow-lg p-2 shadow-blue-300 cursor-pointer">
                <AiOutlineGithub
                  size={25}
                  className="hover:text-gray-300 transition duration-500 ease-out hover:ease-in"
                />
              </section>
              <section className="cursor-pointer  rounded-full shadow-lg p-2 shadow-blue-300">
                <AiOutlineLinkedin
                  size={25}
                  className="hover:text-sky-600 transition duration-500 ease-out hover:ease-in"
                />
              </section>
              <section className="rounded-full cursor-pointer shadow-lg p-2 shadow-blue-300 ">
                <AiOutlineTwitter
                  className="hover:text-sky-400 transition duration-500 ease-out hover:ease-in"
                  size={25}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavMobile;