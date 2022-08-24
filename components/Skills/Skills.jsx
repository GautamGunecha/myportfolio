import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full bg-neutral-800 text-white lg:h-screen p-4">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center w-full">
        <h1 className="text-xl text-orange-400 tracking-widest">Skills</h1>

        <div className="grid grid-cols-2 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">JAVASCRIPT</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid  md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">node</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid  md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">reactjs</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid  md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">tailwind</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">nextjs</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">firebase</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid  md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">mongodb</h1>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid  md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64px"
                  height="64px"
                  layout="fixed"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest">github</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
