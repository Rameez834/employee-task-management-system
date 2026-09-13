import AcceptTask from "./AcceptTask"
import ActiveTask from "./ActiveTasks"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTasks"
import NewTask from "./NewTasks"


export const TasksList = ({data}) => {
  return (
    <div className="p-4 sm:p-6 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5">
         {data.tasks.map((task,idx)=>{
          return <NewTask key={task.id} data={task} key={idx}/>
         })}
        <CompletedTask/>
        <FailedTask/>
        <ActiveTask/>
        <AcceptTask/>
    </div>
  )
}