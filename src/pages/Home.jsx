import React from 'react'
import Student from './Student'
import Skill from './Skill';


export default function Home() {
    const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js"
  ];
  return (
    
    <div>
      <section>
      <h2>Welcome to React Learning Hub</h2>
      <p>
        Learn modern web development through
        practical projects and examples.
      </p>
    <Student name="ALi" age={20} course="c#"/>
    <Student course="python"/>
    <Student name="sajid"/>
    <Skill skills={mySkills}/>
    </section>

    
    </div>
  )
}
