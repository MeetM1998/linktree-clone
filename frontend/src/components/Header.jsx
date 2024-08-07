import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged out successfully");
  };
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white text-center shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Linktree Clone</h1>
        {token ? (
          <button onClick={handleLogout} className="px-4 hover:underline">
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
