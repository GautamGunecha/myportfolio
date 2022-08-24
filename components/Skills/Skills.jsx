import Image from "next/image";
import { skillsData } from "../../public/assets/data/data";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full bg-neutral-800 text-white lg:h-screen p-4"
    >
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center w-full">
        <h1 className="text-xl text-orange-400 tracking-widest">Skills</h1>

        <div className="grid grid-cols-2 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((content) => (
            <div
              key={content.id}
              className="p-6 shadow-sm shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={content.img}
                    width="64px"
                    height="64px"
                    layout="fixed"
                  />
                </div>
                <div className="hidden md:flex flex-col items-center justify-center">
                  <h1 className="uppercase tracking-widest">{content.skill}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
