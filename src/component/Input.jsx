import React from 'react'
import Habits from './Habits.jsx'

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
