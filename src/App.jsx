import { useContext, useEffect, useState } from "react"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import Login from "./Components/Login/LogIn"
import { getLocalStorage, setLocalStorage } from "./LocalStorage/LocalStorage"
import AuthProvider, { authContext } from "./AuthProvider"

const App = () => {
  const {userData} = useContext (authContext)
  const [user, setUser] = useState("")
  const [loggedInUserData, setLoggedInUserData] = useState("")
   useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if(loggedInUser){
      const logginInfo = JSON.parse(loggedInUser)
      setUser(logginInfo.role)
      setLoggedInUserData(logginInfo.data)
    }
   }, [])
   
  const handleLogIn = (email,password) =>{
    if(email === "admin@me.com" && password === "123" ){
      setUser("admin")
      localStorage.setItem("user",JSON.stringify({role:"admin"}))
    } else if(userData){
      const employee = userData?.find((e)=>e.email===email && e.password === password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("user",JSON.stringify({role:"employee",data:employee}))
      }
      
    }else{
      alert("Invalid")
    }
  }
  return (
    <div>
      {!user? (<Login  handleLogIn = {handleLogIn}/>) 
      :user === "admin"?
        (<AdminDashboard changeUser ={setUser}/>)
        :user === "employee"?
        (<EmployeeDashboard changeUser = {setUser} data ={loggedInUserData}/>):null}
    </div>
  )
}

export default App