import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuCoffee } from "react-icons/lu";
import { FaUserShield, FaCashRegister, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/admin/dashboard");
    } else if (email === "cashier@gmail.com" && password === "123456") {
      navigate("/cashier/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    /* Desktop: fixed height, no scroll. Mobile: natural height, scrollable */
    <div className="bg-[#f7f7f7] lg:h-screen lg:overflow-hidden lg:flex lg:flex-row">

      {/* ── LEFT PANEL ── */}
      {/* Desktop: fixed full height. Mobile: natural height, no scroll */}
      <div className="
        w-full lg:w-1/2
        bg-[#f7f7f7]
        border-b lg:border-b-0 lg:border-r border-gray-200
        flex flex-col
        px-8 sm:px-12 py-10
        lg:h-full
      ">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center">
            <LuCoffee className="text-white" size={20} strokeWidth={2.2} />
          </div>
          <h1 className="text-[17px] font-semibold text-black">BrewPoint</h1>
        </div>

        {/* Text */}
        <div className="mt-10 lg:mt-28">
          <p className="uppercase tracking-[4px] text-[11px] text-gray-400 mb-5">
            Point of Sale
          </p>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-black leading-snug">
            Manage your cafe,<br />effortlessly.
          </h2>
          <p className="mt-4 text-[14px] text-gray-500 leading-7 max-w-xs">
            A simple, fast POS system built for baristas and cafe owners.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 lg:mt-auto flex flex-wrap gap-10 pt-2">
          <div>
            <h3 className="text-[30px] font-bold text-black">2</h3>
            <p className="text-gray-400 text-sm mt-1">User Roles</p>
          </div>
          <div>
            <h3 className="text-[30px] font-bold text-black">Fast</h3>
            <p className="text-gray-400 text-sm mt-1">Checkout Flow</p>
          </div>
          <div>
            <h3 className="text-[30px] font-bold text-black">Simple</h3>
            <p className="text-gray-400 text-sm mt-1">Clean Interface</p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      {/* Desktop: centered, no scroll. Mobile: scrollable */}
      <div className="
        w-full lg:w-1/2
        bg-white
        flex items-start lg:items-center justify-center
        px-6 sm:px-10
        py-10
        overflow-y-auto lg:overflow-hidden
        lg:h-full
      ">
        <div className="w-full max-w-[400px]">

          <h2 className="text-[30px] sm:text-[32px] font-bold text-black">Welcome back</h2>
          <p className="mt-2 text-[14px] text-gray-400">Sign in to your account to continue</p>

          {/* Email */}
          <div className="mt-8">
            <label className="block text-[13px] font-semibold mb-2">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[48px] border border-gray-200 rounded-lg pl-11 pr-4 text-sm outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] font-semibold">Password</label>
              <button type="button" className="text-blue-500 text-xs hover:underline">
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] border border-gray-200 rounded-lg pl-11 pr-4 text-sm outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full h-[50px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg font-semibold mt-6 transition-colors"
          >
            Sign In →
          </button>

          {/* Demo Credentials */}
          <div className="mt-6 border border-gray-200 rounded-xl p-5">
            <p className="text-[11px] uppercase tracking-[1px] text-gray-400 mb-4">
              Demo Credentials
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FaUserShield className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Admin</h4>
                  <p className="text-xs text-gray-400">admin@gmail.com / 123456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FaCashRegister className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Cashier</h4>
                  <p className="text-xs text-gray-400">cashier@gmail.com / 123456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extra bottom space on mobile */}
          <div className="h-8 lg:hidden" />

        </div>
      </div>

    </div>
  );
};

export default Login;