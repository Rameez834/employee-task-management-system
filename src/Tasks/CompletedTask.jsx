const CompletedTask = () => {
  return (
    <div>
       <div className="bg-gradient-to-br from-yellow-600 to-indigo-700 w-full sm:w-[26rem] min-h-[20rem] sm:h-80 rounded-3xl shadow-2xl text-white">
        <div className="p-4 sm:p-5 flex justify-between items-center gap-2">
          <h1 className="font-bold text-sm sm:text-lg bg-indigo-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl truncate">
            taskTitle
          </h1>
          <h1 className="text-xs sm:text-base whitespace-nowrap shrink-0">
            date
          </h1>
        </div>

        <div className="bg-white text-black mx-4 sm:mx-5 rounded-xl p-4 sm:p-5 h-28 sm:h-36 overflow-auto">
          <h1 className="text-sm sm:text-base">
           Description
          </h1>
        </div>

        <div className="flex justify-between p-4 sm:p-5 gap-3">
          <button className="bg-green-500 hover:bg-green-600 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base flex-1 sm:flex-none">
            Completed
          </button>
          <button className="bg-red-500 hover:bg-red-600 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base flex-1 sm:flex-none">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompletedTask