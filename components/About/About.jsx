import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full text-white bg-black/80 p-2 flex items-center md:h-screen py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="tracking-widest text-xl font-primary text-orange-500">
            About
          </h1>
          <p className="py-2 mt-6 text-lg text-justify">
            Myself Gautam Gunecha, full stack developer based out of Varanasi,
            India. I have completed my Bachelor's of engineering in Information
            Technology from SRM, Chennai. I enjoy working on projects where I
            can learn new skills as a developer, and a better overall product
            experience.
          </p>

          <p className="py-2 text-lg text-justify"></p>

          <Link href="/#projects">
            <p className="py-2 underline cursor-pointer">
              Check out my projects!
            </p>
          </Link>
        </div>
        <div className="w-full m-auto h-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-center  p-4 hover:scale-105 ease-in duration-500">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80"
            alt="unsplash"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
