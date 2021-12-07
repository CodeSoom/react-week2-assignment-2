import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function Habit({ onDelete, habit }) {
  return (
    <div>
      {habit}
      <button onClick={onDelete} type="button">삭제</button>
    </div>
  )
}

function Habits({ onDelete, habits }) {
  const numberOfHabits = habits.length;
  return (
    <div>
      {
        habits.map((habit, key) => (
          <Habit key={key} onDelete={onDelete} habit={habit} />
        )
        )}
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
        <Habits onDelete={onDelete} habits={habits} />
      </div>
    </div>
  )
}

function Page({ onSubmit, onDelete, habits }) {
  return (
    <Input onSubmit={onSubmit} onDelete={onDelete} habits={habits} />
  )
}

function App() {
  const [state, setState] = useState({
    habits: []
  })
  const { habits } = state;

  function handleDelete() {
    console.log('삭제 버튼을 눌렀다.')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setState({
      habits: [e.target[0].value, ...habits]
    })
  }


  return (
    <Page onSubmit={handleSubmit} onDelete={handleDelete} habits={habits} />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))