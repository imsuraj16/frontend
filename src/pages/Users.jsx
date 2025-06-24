import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const allUsers = useSelector((state) => state.user.alluser);
  const currentUser = useSelector((state) => state.user.user);

  // Remove current user from the list
  const filteredUsers = allUsers.filter((user) => user.id !== currentUser?.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {user.bio || "No bio provided"}
            </p>

            <Link
              to={`/user/${user.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Profile
            </Link>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 col-span-2">
            No other users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Users;
