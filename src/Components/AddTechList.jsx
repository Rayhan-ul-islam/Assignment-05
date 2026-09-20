import { toast } from "react-toastify";

const AddTechList = ({ addToStack, setAddToStack }) => {
  const handleRemove = (id) => {
    const removedTech = addToStack.find(
      (tech) => tech.id === id
    );

    setAddToStack((previous) => {
      return previous.filter((tech) => tech.id !== id);
    });

    toast.info(`${removedTech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (addToStack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setAddToStack([]);

    toast.success("All technologies removed!");
  };

  return (
    <div className="col-span-3 w-full min-w-0 md:col-span-1">
      <div className="flex w-full items-center justify-center">
        <div className="w-full max-w-xs rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all sm:max-w-sm sm:rounded-3xl sm:p-6 md:p-8">

          <h2 className="text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-400 sm:text-base">
            {addToStack.length === 0
              ? "No technologies selected yet."
              : `${addToStack.length} technologies selected`}
          </p>

          {addToStack.length === 0 ? (
            <div className="mt-5 flex min-h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-400 sm:mt-6 sm:min-h-32 sm:rounded-2xl sm:py-8 sm:text-base">
              Your stack is empty.
            </div>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {addToStack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-8 w-8 shrink-0 object-contain"
                      />

                      <span className="truncate text-sm font-medium text-slate-800">
                        {tech.name}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="ml-3 shrink-0 text-lg text-slate-400 transition-colors hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-xl border border-red-100 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTechList;