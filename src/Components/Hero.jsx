import heroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (

        <div className="mt-15 container mx-auto pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex-1 space-y-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Build Your Ideal
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gradient-dev">Development Stack</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
                    Explore frontend, backend, database, and tooling options, compare them
                    side by side, and put together the stack that fits your next project.
                </p>

                <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
                    <button className="btn w-50 bg-linear-to-r from-[#FF5722] via-[#b30740] to-[#6f048d] text-white px-4 py-2 rounded-md">Explore Technologies</button>
                    <button className="btn w-50">Learn More</button>
                </div>
            </div>

            <div className="flex-1 flex justify-center w-full max-w-md">
                <img
                    src={heroImage}
                    alt="Hero visual"
                    className="w-full h-auto object-contain max-h-100"
                />
            </div>
        </div>
    );
};

export default Hero;