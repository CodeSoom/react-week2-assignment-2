import React from "react"

function Habit({ onDelete, habit, keyValue }) {
  return (
    <div>
      {habit}
      <button onClick={() => onDelete(keyValue)} type="button" >완료</button>
    </div>
  )
}

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

function Input({ onSubmit, onDelete, habits }) {

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="content" placeholder="할 일을 입력해 주세요" />
          <input type="submit" value="추가" />
        </form>
      </div>
      <div>
        {habits.length === 0 ? "할 일이 없어요!" : <Habits onDelete={onDelete} habits={habits} />}
      </div>
    </div>
  )
}

export default Input
