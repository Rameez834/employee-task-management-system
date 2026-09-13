import { useContext, useState } from "react"
import { authContext } from "./AuthProvider"

const TaskAssignForm = () => {
  const { userData, setUserData } = useContext(authContext)
  const [task, setTask] = useState({
    title: "",
    date: "",
    category: "",
    description: "",
    assignTo: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateData = userData.map((employee) => {
      if (employee.name === task.assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, task],
        }
      }
      return employee
    })

    setUserData(updateData)
    localStorage.setItem("employees", JSON.stringify(updateData))
    setTask({ title: "", date: "", category: "", description: "", assignTo: "" })
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
          <div className="w-full">
            <h1 className="font-bold text-lg sm:text-xl">Task Title</h1>
            <input
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="border-2 h-10 w-full p-3 mt-2"
              type="text"
              placeholder="Web Developer"
            />
          </div>
          <div className="w-full">
            <h1 className="font-bold text-lg sm:text-xl">Date</h1>
            <input
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
              className="border-2 h-10 w-full p-3 mt-2"
              type="date"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 mt-6 sm:mt-10">
          <div className="w-full">
            <h1 className="font-bold text-lg sm:text-xl">Assign To</h1>
            <input
              value={task.assignTo}
              onChange={(e) => setTask({ ...task, assignTo: e.target.value })}
              className="border-2 h-10 w-full p-3 mt-2"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="w-full">
            <h1 className="font-bold text-lg sm:text-xl">Task Category</h1>
            <input
              value={task.category}
              onChange={(e) => setTask({ ...task, category: e.target.value })}
              className="border-2 h-10 w-full p-3 mt-2"
              type="text"
              placeholder="Category"
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <h1 className="font-bold text-lg sm:text-xl">Description</h1>
          <textarea
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="mt-3 p-4 h-32 sm:h-40 w-full border-2"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button
            type="submit"
            className="bg-black text-white h-10 w-full sm:w-64 font-bold text-lg sm:text-2xl cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskAssignForm