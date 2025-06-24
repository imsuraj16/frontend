import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutuser());
    navigate("/");
  };

  return (
    <div className="w-full bg-gray-200 flex justify-between px-[4rem] py-[2rem]">
      <div>
        <NavLink to="/">SkillSwap</NavLink>
      </div>
      <div className="flex gap-[2rem]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        {user && <NavLink to="/add-skill">Add Skill</NavLink>}
        {user && <NavLink to="/profile">Profile</NavLink>}
        <NavLink to='/users'>Users</NavLink>

        {user ? (
          <h1 className="cursor-pointer" onClick={logoutHandler}>
            Logout
          </h1>
        ) : (
          <NavLink to="/Login">login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
