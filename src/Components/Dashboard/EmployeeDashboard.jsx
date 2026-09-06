import TaskNumbersList from "../../TaskList/TaskNumbersList"
import { TasksList } from "../../Tasks/TasksList"
import EmployeeHeader from "../headers/EmployeeHeader"

const EmployeeDashboard = (props) => {
  
  return (
    <div>
        <EmployeeHeader changeUser = {props.changeUser}/>
        <TaskNumbersList/>
        <TasksList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard