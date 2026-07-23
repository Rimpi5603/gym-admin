import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaDumbbell,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      loginUser();
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-4 py-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <FaDumbbell className="text-5xl text-blue-600" />
        </div>

        {/* Heading */}

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Gym Admin
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8 text-sm sm:text-base">
          Welcome Back! Please Login
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
              Email
            </label>

            <div className="relative">

              {/* <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" /> */}

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full box-border rounded-lg border border-gray-300 py-3 !pl-4 pr-4 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-200"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
              Password
            </label>

            <div className="relative">

              {/* <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" /> */}

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full box-border rounded-lg border border-gray-300 py-3 !pl-4 pr-12 text-sm sm:text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="!absolute !right-4 !top-1/2 !-translate-y-1/2 text-gray-500 hover:text-gray-700 !bg-transparent !border-none !p-0 !m-0 cursor-pointer !flex !items-center !justify-center !z-10"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between text-xs sm:text-sm">

            <label className="flex items-center gap-2 text-gray-600">

              <input
                type="checkbox"
                className="accent-blue-600"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer p-0 m-0"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            className="w-full box-border rounded-lg bg-blue-600 border border-blue-600 py-3 pl-11 pr-4 text-sm sm:text-base font-semibold text-white cursor-pointer outline-none m-0 block transition-colors duration-200 hover:bg-blue-700 hover:border-blue-700"
          >
            Login
          </button>

        </form>

        {/* Demo */}

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">

          <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
            Demo Credentials
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm">
            Email : admin@gmail.com
          </p>

          <p className="text-gray-600 mt-1 text-xs sm:text-sm">
            Password : 123456
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;