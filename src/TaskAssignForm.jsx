import { useContext, useState } from "react"
import { authContext } from "./AuthProvider"

const TaskAssignForm = () => {
  const {userData,setUserData}= useContext(authContext)
  const [task, setTask] = useState({
    title:"",
    date:"",
    category:"",
    description:"",
    assignTo:"",
  })
 const handleSubmit  = (e)=>{
  e.preventDefault()
  const updateData = userData.map((employee)=>{
      
  if(employee.name === task.assignTo){
    console.log("MATCH:", employee.name)
    return {
      ...employee,
      tasks:[
        ...employee.tasks,
        task
      ]
    }
  }
  return employee
 })
 console.log(updateData)
 setUserData(updateData),
 localStorage.setItem("employees",JSON.stringify(updateData))
 }
 
  return (
    <div>
      <form onSubmit={handleSubmit}
      
      className="p-10">
        <div className="flex justify-between">
        <div>
         <h1 className="font-bold text-xl">Task Title</h1>
        <input value={task.title}
        onChange={(e)=>setTask({
          ...task,
          title:e.target.value
        })}
         className="border-2 h-10 w-140 p-3 mt-2" type="text" placeholder="Web Developer"/>
        </div>
        <div>
         <h1 className="font-bold text-xl">Date</h1>
        <input value={task.date}
        onChange={(e)=>setTask({
          ...task,
          date:e.target.value
        })}
         className="border-2 h-10 w-140 p-3 mt-2" type="date" placeholder="Web Developer"/>
        </div>
        </div>

        <div className="flex justify-between mt-10">
        <div>
         <h1 className="font-bold text-xl">Assign To</h1>
        <input value={task.assignTo}
        onChange={(e)=>setTask({
          ...task,
          assignTo:e.target.value
        })}
         className="border-2 h-10 w-140 p-3 mt-2" type="text" placeholder="Employee Name"/>
        </div>
        <div>
         <h1 className="font-bold text-xl">Task Category</h1>
        <input value={task.category}
        onChange={(e)=>setTask({
          ...task,
          category:e.target.value
        })}
        className="border-2 h-10 w-140 p-3 mt-2" type="text" placeholder="Category"/>
        </div>
        </div>
        <div className="mt-15">
            <h1 className="font-bold text-xl">Description</h1>
            <textarea value={task.description}
        onChange={(e)=>setTask({
          ...task,
          description:e.target.value
        })}
            className=" mt-3 p-4 h-40 w-180 border-2" type="text" placeholder="Discription"></textarea>
        </div>
        <div className="items Center justify-center flex mt-5">
            <button type="submit"
             className="bg-black text-white h-10 w-140 font-bold text-2xl cursor-pointer">
                Creat Task
            </button>
        </div>
      </form>
    </div>
  )
}

export default TaskAssignForm