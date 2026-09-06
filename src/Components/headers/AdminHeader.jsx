const Header = (props) => {
const loggedOutUser = ()=>{
    localStorage.setItem("loggedInUser","")
    props.changeUser("")
  }
  return (
    <div className="flex items-center justify-between bg-zinc-800 p-6 rounded-2xl shadow-lg">
      
      <div>
        <h1 className="text-xl text-gray-300">
          Welcome👋
        </h1>

        <h2 className="text-4xl font-bold text-white mt-1">
          Admin
        </h2>
      </div>

      <button onClick={loggedOutUser} className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md">
        Logout
      </button>

    </div>
  )
}

export default Header