import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import college from "../assets/college.jpg";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setError("");
  };

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "https://campusfind-backend-tj4j.onrender.com/api/auth/login",
        form
      );

      // Store token
      localStorage.setItem("token", res.data.token);

      // Store user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // Redirect after login
      navigate("/home");

    } catch (err) {

      setError(
        err.response?.data?.message || "Login failed"
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

      {/* Login Card */}
      {/* Login Card */}
      <div className="relative bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-6 sm:p-10 w-full max-w-md">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Login
        </h1>

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

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm sm:text-base text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>

    </div>

  );
}

export default Login;