import React from 'react'

function Habit({ onDelete, habit, id }) {
  return (
    <div>
      {habit}
      <button onClick={() => onDelete(id)} type="button" >완료</button>
    </div>
  )
}
export default Habit
