import React from 'react'

export default function Skill({skills}) {
  return (
    <div>
      <ul>
      {
        skills.map((skill)=>(

<li key={skill}>{skill}</li>
        ))}
        </ul>
    </div>
  )
}
