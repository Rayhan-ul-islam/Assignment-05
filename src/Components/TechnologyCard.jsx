const TechnologyCard = ({ tech, addToStack, setAddToStack }) => {

  const isAdded = addToStack.some(
    (item) => item.id === tech.id
  );

  const handleAddToStack = () => {
    setAddToStack((previous) => {
      if (previous.some((item) => item.id === tech.id)) {
        return previous;
      }

      return [...previous, tech];
    });
  };

  return (
    <div>
      <div className="max-w-xs p-6 bg-white border border-gray-100 rounded-3xl shadow-sm font-sans">

        <div className="flex items-center justify-between mb-4">
          <img
            src={tech.icon}
            className="w-10 h-10"
            alt={tech.name}
          />

          <span className="px-3 py-1 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100">
            {tech.badge}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {tech.name}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {tech.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
          <span className="px-2.5 py-1.5 bg-gray-100 font-medium text-gray-600 rounded-md">
            {tech.category}
          </span>

          <span className="font-medium text-gray-500">
            {tech.difficulty}
          </span>

          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span>
            {tech.rating}
          </div>
        </div>

        <button
          onClick={handleAddToStack}
          disabled={isAdded}
          className={`w-full py-3 text-white text-sm font-medium rounded-xl transition-colors ${
            isAdded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-slate-950 hover:bg-slate-800"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;