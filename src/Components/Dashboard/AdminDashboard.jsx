import EmployeeDatail from "../../EmployeeDetail";
import TaskAssignForm from "../../TaskAssignForm";
import Header from "../headers/AdminHeader";

const AdminDashboard = (props) => {

  return (
    <div>
        <Header changeUser = {props.changeUser}/>
        <TaskAssignForm/>
        <EmployeeDatail/>
    </div>
  )
}

export default AdminDashboard;