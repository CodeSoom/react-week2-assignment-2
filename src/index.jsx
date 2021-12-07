import React, { useState } from 'react'
import ReactDOM from 'react-dom'


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

  function handleDelete(key) {
    setState({
      habits: habits.filter((value, index) => index != key)
    }
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    setState({
      habits: [e.target[0].value, ...habits]
    })
    e.target[0].value = "";
  }


  return (
    <Page onSubmit={handleSubmit} onDelete={handleDelete} habits={habits} />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))