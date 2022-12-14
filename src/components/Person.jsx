import React from 'react'

function Person({name, height, mass}) {
  return (
    <div className="person">
      <h1>{name}</h1>
      <h2>{height} cm</h2>
      <h2>{mass} kg</h2>
    </div>
  )
}

export default Person