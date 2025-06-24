import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addSkill } from "../store/actions/skillsAction";
import { useNavigate } from "react-router-dom";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const user = useSelector(state=>state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  


  const skillHandler = (skillData)=>{
    skillData.id = nanoid()
    skillData.ownerId = user.id
    skillData.username = user.name
    dispatch(addSkill(skillData))
    navigate('/explore')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Skill</h2>
      <form onSubmit={handleSubmit(skillHandler)} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("name")}
        />

        <select
          name="category"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("category")}
        >
          <option value="">Select Category</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="description"
          placeholder="Short description (optional)"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          {...register("description")}
        />

        <button
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
