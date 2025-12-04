import React from 'react'

export default function Skills({skills}) {
  return (
    <ul>
      {
        skills.map(skill => {
            return <li key={skill}>{skill}</li>
        })
      }
    </ul>
  )
}
