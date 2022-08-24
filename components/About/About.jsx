import React from "react";

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            sapiente labore, quidem pariatur recusandae itaque voluptatem illum,
            perferendis possimus eius necessitatibus! Officia quod praesentium
            maxime dolores modi harum accusamus culpa. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non, dolorum. Blanditiis quia
            corporis magnam animi porro praesentium ab commodi quisquam ut
            obcaecati natus deserunt dolorum, iusto eveniet, aliquam mollitia
            pariatur.
          </p>

          <p className="py-2 text-lg text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            sapiente labore, quidem pariatur recusandae itaque voluptatem illum,
            perferendis possimus eius necessitatibus! Officia quod praesentium
            maxime dolores modi harum accusamus culpa. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non, dolorum. Blanditiis quia
            corporis magnam animi porro praesentium ab commodi quisquam ut
            obcaecati natus deserunt dolorum, iusto eveniet, aliquam mollitia
            pariatur.
          </p>

          <p className="py-2 underline cursor-pointer">
            Check out my projects!
          </p>
        </div>
        <div className="w-full m-auto h-auto shadow-xl shadow-gray-600 rounded-xl items-center justify-center  p-4 hover:scale-105 ease-in duration-500">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="unsplash"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
