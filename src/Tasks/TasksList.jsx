import AcceptTask from "./AcceptTask"
import ActiveTask from "./ActiveTasks"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTasks"
import NewTask from "./NewTasks"


export const TasksList = ({data}) => {
  return (
    <div className="p-6 flex flex-wrap gap-5">
         {data.tasks.map((task)=>{
          return <NewTask data = {task}/>
         })}
        <CompletedTask/>
        <FailedTask/>
        <ActiveTask/>
        <AcceptTask/>
    </div>
  )
}
