import TaskNumbersList from "../../TaskList/TaskNumbersList"
import { TasksList } from "../../Tasks/TasksList"
import EmployeeHeader from "../headers/EmployeeHeader"

const EmployeeDashboard = (props) => {
  
  return (
    <div>
        <EmployeeHeader changeUser = {props.changeUser} name={props.data?.name}/>
        <TaskNumbersList/>
        <TasksList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard