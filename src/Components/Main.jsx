const Main = ({ children }) => {
  return (
    <>
      <div className="container mx-auto mt-15 mb-8">
        <h1 className="text-center sm:text-center md:text-left text-3xl sm:text-4xl md:text-3xl font-bold leading-tight">
          Explore the <span className="text-gradient-dev">Technologies</span>
        </h1>

        <p className="text-center sm:text-center md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {children}
    </>
  );
};

export default Main;

