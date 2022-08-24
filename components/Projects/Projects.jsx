import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projectsData } from "../../public/assets/data/data";

const Projects = () => {
  const [item, setItem] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      if (item === "all") {
        setProjects(projectsData);
      } else {
        const newProjects = projectsData.filter((project) => {
          return project.category.toLowerCase() === item;
        });
        setProjects(newProjects);
      }
    };
    fetchData();
  }, [item]);

  return (
    <div id="projects" className="w-full text-white bg-black/95">
      <div className="max-w-[1240px] mx-auto w-full px-2 py-16">
        <h1 className="text-xl text-orange-400">Portfolio</h1>
        {/* Projects filters */}
        <div className="flex gap-4 md:gap-8 text-center justify-center mt-4">
          <p
            onClick={() => setItem("all")}
            className={
              item === "all"
                ? "md:text-lg text-sm cursor-pointer text-orange-400 ease-in duration-300 tracking-widest uppercase"
                : "md:text-lg text-sm cursor-pointer text-white hover:text-orange-400 ease-in duration-300 tracking-widest uppercase"
            }
          >
            All
          </p>
          <p
            onClick={() => setItem("webdevelopment")}
            className={
              item === "webdevelopment"
                ? "md:text-lg text-sm cursor-pointer text-orange-400 ease-in duration-300 tracking-widest uppercase"
                : "md:text-lg text-sm cursor-pointer text-white hover:text-orange-400 ease-in duration-300 tracking-widest uppercase"
            }
          >
            web development
          </p>
          <p
            onClick={() => setItem("ui")}
            className={
              item === "ui"
                ? "md:text-lg text-sm cursor-pointer text-orange-400 ease-in duration-300 tracking-widest uppercase"
                : "md:text-lg text-sm cursor-pointer text-white hover:text-orange-400 ease-in duration-300 tracking-widest uppercase"
            }
          >
            ui
          </p>
          <p
            onClick={() => setItem("client")}
            className={
              item === "client"
                ? "md:text-lg text-sm cursor-pointer text-orange-400 ease-in duration-300 tracking-widest uppercase"
                : "md:text-lg text-sm cursor-pointer text-white hover:text-orange-400 ease-in duration-300 tracking-widest uppercase"
            }
          >
            client
          </p>
        </div>

        {/* project container */}
        <div className="grid mt-8 md:grid-cols-2 gap-8">
          {projects.map((content) => (
            <div
              key={content.id}
              className="relative flex items-center justify-center h-auto w-full shadow-sm shadow-orange-500 p-2 rounded-xl group hover:bg-gradient-to-tr from-yellow-300 to-red-500"
            >
              <Image
                src={content.image}
                alt={content.name}
                className="rounded-xl group-hover:opacity-10"
              />
              <div
                className="hidden group-hover:block absolute 
              top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <h1 className="text-lg md:text-2xl mb-1">{content.name}</h1>
                <p className="hidden md:block text-sm mb-2 justify-center text-justify">
                  {content.desc}
                </p>
                <section className="flex gap-4">
                  <Link href={"/"}>
                    <p className="border p-1 md:p-2 w-full text-center cursor-pointer hover:scale-105 ease-in duration-300">
                      Demo
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className="cursor-pointer border p-1 md:p-2 w-full text-center hover:scale-105 ease-in duration-300">
                      Github
                    </p>
                  </Link>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
