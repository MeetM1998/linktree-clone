import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.REACT_APP_API;

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, {
        email,
        password,
      });
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(data.token));
        toast.success(data.message || "Successfully signed in!");
        navigate("/profile");
      } else {
        toast.error(data.message || "An error occurred.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during sign-in."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Linktree Clone
      </h2>
      <div className="space-x-4">
        <form
          onSubmit={handleSignIn}
          className="flex flex-col items-center bg-white p-6 rounded shadow-md w-96 mx-auto mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
          <Link to="/register" className="text-blue-500">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
