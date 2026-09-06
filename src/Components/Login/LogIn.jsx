import { useState } from "react";

const Login = ({handleLogIn}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogIn(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 w-[380px] p-8 rounded-2xl shadow-2xl">
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit}
        className="flex flex-col gap-4">
          <input value={email}
          onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-blue-500"
            type="email"
            placeholder="Enter Your Email"
          />

          <input value={password}
          onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-blue-500"
            type="password"
            placeholder="Enter Your Password"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;