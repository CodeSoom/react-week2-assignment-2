import React from 'react'

function Habit({ onDelete, habit, keyValue }) {
  return (
    <div>
      {habit}
      <button onClick={() => onDelete(keyValue)} type="button" >완료</button>
    </div>
  )
}
export default Habit
