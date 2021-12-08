import React from 'react'
import Habit from './Habit.jsx'

function Habits({ onDelete, habits }) {
  return (
    <div>
      {
        habits.map((habit, key) => (
          <Habit onDelete={onDelete} habit={habit} key={key} id={key} />
        ))
      }
    </div>
  )
}

export default Habits
