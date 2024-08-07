import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.REACT_APP_API;
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/api/auth/register`, {
        email,
        password,
        username,
      });
      const data = response?.data;
      if (response.status === 200) {
        toast.success(data?.message || "Successfully registered user!");
        navigate("/login");
      } else {
        toast.error(data?.message || "Error signing up");
      }
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred during sign-up.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-x-4">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center bg-white p-6 rounded shadow-md w-96 mx-auto mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="mb-2 p-2 border rounded w-full"
            required
          />
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
            Register
          </button>
          <Link to="/login" className="text-blue-500">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
