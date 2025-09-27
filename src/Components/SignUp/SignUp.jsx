import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [role, setRole] = useState('');
  const [name, setName] = useState('Waqas khan');
  const [email, setEmail] = useState('waqaskhan@gmail.com');
  const [phone, setPhone] = useState('03451-83-57-0');
  const [password, setPassword] = useState('admin123');
  const [showerr, setShowerr] = useState({});

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setShowerr({});

    if (!role) {
      setShowerr((prev) => ({ ...prev, role: "Please select a role" }));
      return;
    }

    if (password.length < 8) {
      setShowerr((prev) => ({ ...prev, password: "Password must be at least 8 characters long" }));
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setShowerr((prev) => ({ ...prev, phone: "Phone number invalid" }));
      return;
    }

    const demoEmail = "waqaskhan@gmail.com";
    const demoPassword = "admin123";

    if (email === demoEmail && password === demoPassword) {
      sessionStorage.setItem("auth-token", "demo-auth-token");
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);
      navigate("/");
      window.location.reload();
    } else {
      setShowerr((prev) => ({
        ...prev,
        general: "Invalid email or password. Please use waqaskhan@gmail.com and admin123.",
      }));
    }
  };

  const resetForm = () => {
    setRole('');
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-2">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-1">
          Create Your Account
        </h2>
        <p className="text-sm text-center text-gray-600 mb-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <form onSubmit={register} className="space-y-4">
          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block font-semibold text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200 bg-white"
              required
            >
              <option value="" disabled hidden>
                Select a Role
              </option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="demo user">Demo User</option>
            </select>
            {showerr.role && (
              <p className="text-red-600 text-sm mt-1">{showerr.role}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200"
            />
            {showerr.name && (
              <p className="text-red-600 text-sm mt-1">{showerr.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200"
              required
            />
            {showerr.phone && (
              <p className="text-red-600 text-sm mt-1">{showerr.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200"
            />
            {showerr.email && (
              <p className="text-red-600 text-sm mt-1">{showerr.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200"
              required
            />
            {showerr.password && (
              <p className="text-red-600 text-sm mt-1">{showerr.password}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="w-full bg-red-500 text-white py-2 rounded-xl font-semibold shadow-sm hover:bg-red-600 transition-all duration-300"
            >
              Reset
            </button>
          </div>

          {/* General error */}
          {showerr.general && (
            <p className="text-red-600 text-sm text-center mt-2">
              {showerr.general}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
