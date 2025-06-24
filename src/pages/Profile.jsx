import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const userProfile = useSelector((state) => state.user.user);
  const skills = useSelector((state) => state.skill.skill);

  const filteredSkills = skills.filter((s) => s.ownerId === userProfile?.id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="border rounded p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{userProfile?.name}</h2>
          <Link
            to="/edit-profile"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>

        <p className="text-gray-600 mb-6">{userProfile?.bio || "No bio available"}</p>

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Your Skills</h3>
          <Link
            to="/add-skill"
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Add Skill
          </Link>
        </div>

        {filteredSkills.length > 0 ? (
          <ul className="list-disc pl-6">
            {filteredSkills.map((skill) => (
              <li key={skill.id} className="mb-2">
                {skill.name}{" "}
                <span className="text-sm text-gray-500">({skill.category})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You haven't added any skills yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
