import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/apiconfig";
import { useSelector } from "react-redux";

const Userdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/user/${id}`);
        setUser(data);

        const skillRes = await axios.get(`/skills?ownerId=${id}`);
        
        setSkills(skillRes.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUser();
  }, [id]);

  const handleRequest = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    // Request logic yaha aayega
    alert("Request logic to be added!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {user ? (
        <div className="border rounded p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.bio || "No bio available"}</p>

          <h3 className="text-xl font-semibold mb-2">Skills:</h3>
          {skills.length > 0 ? (
            <ul className="list-disc pl-6 mb-4">
              {skills.map((skill) => (
                <li key={skill.id}>
                  {skill.name} - <span className="text-sm text-gray-500">{skill.category}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mb-4">No skills added yet.</p>
          )}

          {currentUser?.id !== user.id && (
            <button
              onClick={handleRequest}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Request
            </button>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading user...</p>
      )}
    </div>
  );
};

export default Userdetails;
