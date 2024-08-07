import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.REACT_APP_API;
const token = localStorage.getItem("token");

const LinkList = ({ links, setLinks }) => {

  const deleteLink = async (id) => {
    try {
      const response = await axios.delete(`${baseURL}/api/link/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setLinks(links.filter((link) => link._id !== id));
        toast.success("Link deleted successfully");
      } else {
        toast.error("Error deleting link");
      }
    } catch (error) {
      toast.error("Error deleting link");
    }
  };
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Your Links</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <div
            key={link._id}
            className="p-4 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition duration-300 flex justify-between items-center"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium"
            >
              {link.title}
            </a>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => deleteLink(link._id)}
                className="bg-red-500 text-white font-semibold py-1 px-2 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkList;
