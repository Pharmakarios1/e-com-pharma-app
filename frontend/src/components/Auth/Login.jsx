import { useState } from "react";

const Login = () => {
  const [auth, setAuth] = useState(true);
  return (
    <div className="min-h-screen">
      <div className="shadow-xl flex justify-center text-xl font-bold text-[#277c67]">
        {auth ? "Login" : "Register"}
      </div>
      <form
        action=""
        className="flex flex-col p-10 sm:px-20 justify-center w-full md:w-[15rem] gap-4"
      >
        <input
          type="email"
          placeholder="Enter your mail"
          className="outline-none border-[#277c67] border-[1px] w-full rounded-md p-1"
        />
        <input
          type="email"
          placeholder="Enter your mail"
          className="outline-none border-[#277c67] border-[1px] w-full rounded-md p-1"
        />
      </form>
    </div>
  );
};

export default Login;
