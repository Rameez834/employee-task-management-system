const ActiveTask = () => {
  return (
    <div>
       <div className="bg-gradient-to-br from-Brown-600 to-indigo-700 h-80 w-110 rounded-3xl shadow-2xl text-white">
        <div className="p-5 flex justify-between items-center">
          <h1 className="font-bold text-lg bg-indigo-900 px-4 py-2 rounded-xl">
            taskTitle
          </h1>
          <h1>date</h1>
        </div>

        <div className="bg-white text-black mx-5 rounded-xl p-5 h-36">
          <h1>
           Description
          </h1>
        </div>

        <div className="flex justify-between p-5">
          <button className="bg-gray-500 hover:bg-green-600 px-4 py-2 rounded-lg">
            Active Task
          </button>
          <button className="bg-yellow-500 hover:bg-red-600 px-4 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActiveTask