const EmployeeDatail = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between gap-4 flex-wrap bg-zinc-900 text-white p-6 rounded-2xl shadow-lg">
        <div className="bg-zinc-800 p-4 rounded-xl w-40 text-center hover:scale-105 transition">
          <h1 className="text-gray-400 text-sm">Employee Name</h1>
          <h1 className="text-xl font-bold mt-2">John Doe</h1>
        </div>

        <div className="bg-blue-600 p-4 rounded-xl w-32 text-center hover:scale-105 transition">
          <h1 className="text-sm">New Task</h1>
          <h1 className="text-2xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-green-600 p-4 rounded-xl w-32 text-center hover:scale-105 transition">
          <h1 className="text-sm">Completed</h1>
          <h1 className="text-2xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-red-600 p-4 rounded-xl w-32 text-center hover:scale-105 transition">
          <h1 className="text-sm">Failed</h1>
          <h1 className="text-2xl font-bold mt-2">0</h1>
        </div>

        <div className="bg-purple-600 p-4 rounded-xl w-32 text-center hover:scale-105 transition">
          <h1 className="text-sm">Active</h1>
          <h1 className="text-2xl font-bold mt-2">0</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDatail;