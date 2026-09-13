const TaskNumbersList = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">

      <div className="bg-green-600 hover:scale-105 transition-all duration-300 h-32 sm:h-40 w-full xs:w-[45%] sm:w-56 md:w-64 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
        <h2 className="text-base sm:text-lg font-medium opacity-80">
          Completed
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-red-600 hover:scale-105 transition-all duration-300 h-32 sm:h-40 w-full xs:w-[45%] sm:w-56 md:w-64 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
        <h2 className="text-base sm:text-lg font-medium opacity-80">
          Failed
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-blue-600 hover:scale-105 transition-all duration-300 h-32 sm:h-40 w-full xs:w-[45%] sm:w-56 md:w-64 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
        <h2 className="text-base sm:text-lg font-medium opacity-80">
          New Task
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-purple-600 hover:scale-105 transition-all duration-300 h-32 sm:h-40 w-full xs:w-[45%] sm:w-56 md:w-64 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
        <h2 className="text-base sm:text-lg font-medium opacity-80">
          Active
        </h2>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          0
        </h1>
      </div>

    </div>
  );
};

export default TaskNumbersList;