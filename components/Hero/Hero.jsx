import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen  text-center bg-neutral-900">
      <div className="max-w-[1240px] text-white h-full m-auto flex items-center justify-center">
        <div>
          <p className=" uppercase tracking-widest font-extralight  text-sm">
            Let's Build Something together!
          </p>
          <h1 className="py-4 text-3xl font-semibold">
            Hello, I'm <span className="text-orange-300">Gautam Gunecha</span>
          </h1>

          <h1 className="py-2 text-3xl font-semibold">
            A Full Stack Developer
          </h1>

          <p className="py-4 max-w-[80%] m-auto tracking-widest font-extralight  text-sm text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            libero tempore inventore eaque perferendis repellat accusamus. Rerum
            id molestiae natus ipsa consequuntur accusamus hic optio ipsum!
            Nihil ullam dolorem earum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
