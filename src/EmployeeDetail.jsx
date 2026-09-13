const EmployeeDatail = () => {
  return (
    <div className="p-3 sm:p-6">
      <div className="flex justify-center sm:justify-between gap-3 sm:gap-4 flex-wrap bg-zinc-900 text-white p-4 sm:p-6 rounded-2xl shadow-lg">
        <div className="bg-zinc-800 p-3 sm:p-4 rounded-xl w-[45%] xs:w-36 sm:w-40 text-center hover:scale-105 transition">
          <h1 className="text-gray-400 text-xs sm:text-sm">Employee Name</h1>
          <h1 className="text-base sm:text-xl font-bold mt-1 sm:mt-2 truncate">John Doe</h1>
        </div>

        <div className="bg-blue-600 p-3 sm:p-4 rounded-xl w-[45%] xs:w-28 sm:w-32 text-center hover:scale-105 transition">
          <h1 className="text-xs sm:text-sm">New Task</h1>
          <h1 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">0</h1>
        </div>

        <div className="bg-green-600 p-3 sm:p-4 rounded-xl w-[45%] xs:w-28 sm:w-32 text-center hover:scale-105 transition">
          <h1 className="text-xs sm:text-sm">Completed</h1>
          <h1 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">0</h1>
        </div>

        <div className="bg-red-600 p-3 sm:p-4 rounded-xl w-[45%] xs:w-28 sm:w-32 text-center hover:scale-105 transition">
          <h1 className="text-xs sm:text-sm">Failed</h1>
          <h1 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">0</h1>
        </div>

        <div className="bg-purple-600 p-3 sm:p-4 rounded-xl w-[45%] xs:w-28 sm:w-32 text-center hover:scale-105 transition">
          <h1 className="text-xs sm:text-sm">Active</h1>
          <h1 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">0</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDatail;