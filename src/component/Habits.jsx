import React from 'react'
import Habit from './Habit'

function Habits({ onDelete, habits }) {
  return (
    <div>
      {
        habits.map((habit, key) => (
          <Habit onDelete={onDelete} habit={habit} key={key} keyValue={key} />
        ))
      }
    </div>
  )
}

export default Habits
