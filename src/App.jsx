import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { currentUser, getAllUsers } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "./store/actions/skillsAction";

const App = () => {
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getSkills());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
