import React from 'react'
import Habit from './Habit.jsx'

function Habits({ onClickDelete, habits }) {
  return (
    <div>
      {
        habits.map((habit, key) => (
          <Habit onClickDelete={onClickDelete} habit={habit} key={key} id={key} />
        ))
      }
    </div>
  )
}

export default Habits
