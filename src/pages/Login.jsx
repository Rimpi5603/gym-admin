import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import homeBg from "../assets/home_bg.jpg";
import BrandLogo from "../components/BrandLogo";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      loginUser();
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Login Card */}
      <div className="relative z-10 mx-auto w-[320px] sm:w-[340px] rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-2xl">

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <BrandLogo className="h-28 w-40" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-2xl font-bold text-white">
          Gym Admin
        </h1>

        <p className="mt-1 mb-5 text-center text-sm text-gray-300">
          Welcome Back! Please Login
        </p>

        <form onSubmit={handleLogin} className="space-y-3">

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 pr-10 text-sm text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                className="accent-blue-600"
              />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>


              {/* Demo Credentials */}
          <div className="mt-5 rounded-lg border border-slate-700 bg-slate-900 p-3">
            <h3 className="mb-2 text-sm font-semibold text-white">
              Demo Credentials
            </h3>

            <p className="text-xs text-gray-400">
              Email : admin@gmail.com
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Password : 123456
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
