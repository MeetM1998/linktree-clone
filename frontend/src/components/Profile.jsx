import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";

const baseURL = process.env.REACT_APP_API;
const Profile = () => {
  const [profile, setProfile] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        });
        const data = response.data;
        setProfile(data?.profile);
      } catch (error) {
        toast.error("Error fetching profile data");
      }
    };
    fetchProfile();
  }, []);

  const addLinks = async (links) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/link`,
        {
          data: links,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      const data = response.data;
      setLinks((prev) => [...prev, data]);
    } catch (error) {
      toast.error("Error fetching profile data");
    }
  };
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {profile?.username}
        </h2>
        <LinkForm addLink={addLinks} />
        <LinkList links={links} setLinks={setLinks} />
      </div>
    </div>
  );
};

export default Profile;
