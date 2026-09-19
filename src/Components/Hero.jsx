import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto mt-15 flex flex-col items-center gap-8 px-4 pt-8 pb-4 text-center md:flex-row md:justify-between md:text-left">
      <div className="flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Build Your Ideal
          </h1>

          <h1 className="text-3xl font-bold leading-tight text-gradient-dev sm:text-4xl md:text-5xl">
            Development Stack
          </h1>
        </div>

        <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2 md:justify-start">
          <button className="btn rounded-md bg-linear-to-r from-[#FF5722] via-[#b30740] to-[#6f048d] px-4 py-2 text-white">
            Explore Technologies
          </button>

          <button className="btn px-4 py-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex w-full max-w-md flex-1 justify-center">
        <img
          src={heroImage}
          alt="Hero visual"
          className="h-auto max-h-100 w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
