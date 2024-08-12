import { useState } from "react";

const Login = () => {
  const [auth, setAuth] = useState(true);
  return (
    <div className="min-h-screen">
      <div className="shadow-xl flex justify-center text-xl font-bold text-[#277c67]">
        {auth ? "Login" : "Register"}
      </div>
      <div className="">
        <form
          action=""
          className="grid grid-cols-5 gap-4 p-10 w-full md:col-[2/4] flex"
        >
          <input
            type="email"
            placeholder="Enter your mail"
            className="outline-none border-[#277c67] border-[1px] w-full rounded-md p-1 "
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none border-[#277c67] border-[1px] w-full rounded-md p-1"
          />
          <button className="bg-[#277c67] text-white rounded-md p-1">
            Login In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
