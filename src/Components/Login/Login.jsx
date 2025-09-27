import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // <-- imported icons

function Login() {
  const [password, setPassword] = useState("admin123");
  const [email, setEmail] = useState("waqaskhan@gmail.com");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const demoEmail = "waqaskhan@gmail.com";
    const demoPassword = "admin123";

    if (email === demoEmail && password === demoPassword) {
      sessionStorage.setItem('auth-token', 'demo-auth-token');
      sessionStorage.setItem('email', email);
      navigate('/');
      window.location.reload();
    } else {
      alert("Invalid email or password. Please use waqaskhan@gmail.com and admin123.");
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          New here?{" "}
          <Link
            to="/frontend_developer_capstone_project/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>

        <form onSubmit={login} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2.5 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 pr-12 transition duration-200"
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="w-full bg-red-500 text-white py-2 rounded-xl font-semibold shadow-sm hover:bg-red-600 transition-all duration-300"
            >
              Reset
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <Link
              to="/password-reset"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
