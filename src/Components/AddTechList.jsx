const AddTechList = () => {
    return (
        <div className="col-span-3 w-full min-w-0 md:col-span-1 mb-40">
            <div className="flex w-full items-center justify-center">
                <div className="w-full max-w-xs rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all sm:rounded-3xl sm:p-6 md:p-8">
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-sm text-slate-400 sm:text-base">
                        No technologies selected yet.
                    </p>

                    <div className="mt-5 flex min-h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-400 sm:mt-6 sm:min-h-32 sm:rounded-2xl sm:py-8 sm:text-base">
                        Your stack is empty.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTechList;