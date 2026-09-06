const TaskNumbersList = () => {
  return (
    <div className="py-16  px-24 full flex gap-6 flex-wrap">

      <div className="bg-green-600 hover:scale-105 transition-all duration-300 h-40 w-64 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-medium opacity-80">
          Completed
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-red-600 hover:scale-105 transition-all duration-300 h-40 w-64 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-medium opacity-80">
          Failed
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-blue-600 hover:scale-105 transition-all duration-300 h-40 w-64 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-medium opacity-80">
          New Task
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          0
        </h1>
      </div>

      <div className="bg-purple-600 hover:scale-105 transition-all duration-300 h-40 w-64 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-medium opacity-80">
          Active
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          0
        </h1>
      </div>

    </div>
  );
};

export default TaskNumbersList;