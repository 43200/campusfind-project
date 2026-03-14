import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import college from "../assets/college.jpg";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    // clear error when typing
    setError("");
  };

  const handleSignup = async () => {
    try {

      await axios.post(
        "https://campusfind-backend-tj4j.onrender.com/api/auth/signup",
        form
      );

      alert("Signup successful!");
      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message || "Signup failed"
      );

    }
  };

  return (

    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${college})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      {/* Card */}
      <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-xl p-6 sm:p-10 w-full max-w-md">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Create Account
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border border-white/40 bg-white/20 text-white placeholder-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border border-white/40 bg-white/20 text-white placeholder-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-white/40 bg-white/20 text-white placeholder-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleChange}
        />

        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Signup
        </button>

        <p className="mt-5 text-center text-sm sm:text-base text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;