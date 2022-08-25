const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen  text-center bg-neutral-900">
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
            Self-driven, quick starter, passionate programmer with a curious
            mind who enjoys out building new and exiting projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
