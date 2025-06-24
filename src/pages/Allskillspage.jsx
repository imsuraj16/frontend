import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Allskillspage = () => {

const skills = useSelector(state=>state.skill.skill)
const user = useSelector(state=>state.user.user)


const filteredSkill = skills.filter((skill)=>skill.ownerId!==user?.id)





  return (
    <div className='w-full flex justify-between'>
      {
        filteredSkill.map((skill)=>(
          <div key={skill.id} className='w-full h-20 bg-amber-200'>
            <h1 >{skill.name}</h1>
            <h1>{skill.username}</h1>
            <Link to={`/user/${skill.ownerId}`}>details</Link>
          </div>
          
        ))
      }
    </div>
  )
}

export default Allskillspage
