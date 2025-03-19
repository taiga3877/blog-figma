import React from "react";

const Register = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[500px] bg-gray-100 p-6 md:p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl text-center text-[#232536] font-bold mb-6">
          Register
        </h1>

        <div className="flex flex-col space-y-4  text-[#232536] ">
          {["Firstname", "Lastname", "Username"].map((placeholder, index) => (
            <input
              key={index}
              className="w-full  text-[#232536] h-[55px] border border-gray-300 rounded-lg px-4 text-lg outline-none focus:ring-2 focus:ring-[#FFD050] transition-all duration-200"
              type="text"
              placeholder={placeholder}
            />
          ))}
          {["Password", "Confirm password"].map((placeholder, index) => (
            <input
              key={index}
              className="w-full  text-[#232536] h-[55px] border border-gray-300 rounded-lg px-4 text-lg outline-none focus:ring-2 focus:ring-[#FFD050] transition-all duration-200"
              type="password"
              placeholder={placeholder}
            />
          ))}

          <button className="text-lg md:text-xl text-[#232536] w-full h-[55px] bg-[#FFD050] font-bold rounded-lg mt-4 transition-all duration-300 hover:bg-yellow-500 shadow-md hover:shadow-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
