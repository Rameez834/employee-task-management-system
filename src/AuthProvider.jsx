import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "./LocalStorage/LocalStorage"

 export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])

  return (
    <div>
        <authContext.Provider value={{userData,setUserData}}>
            {children}
        </authContext.Provider>
    </div>
  )
}

export default AuthProvider
