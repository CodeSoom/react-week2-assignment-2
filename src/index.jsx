import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function Habit({ habit }) {
  return (
    <div>
      {habit}
      <button type="button">삭제</button>
    </div>
  )
}

function Habits({ habits }) {
  const numberOfHabits = habits.length;
  return (
    <div>
      {
        habits.map((habit, key) => (
          <Habit key={key} habit={habit} />
        )
        )}
    </div>
  )
}

function Input({ onSubmit, habits }) {

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="content" placeholder="할 일을 입력해 주세요" />
          <input type="submit" value="추가" />
        </form>

      </div>
      <div>
        <Habits habits={habits} />
      </div>
    </div>
  )
}

function Page({ onSubmit, habits }) {
  return (
    <Input onSubmit={onSubmit} habits={habits} />
  )
}

function App() {
  const [state, setState] = useState({
    habits: []
  })
  const { habits } = state;

  function handleSubmit(e) {
    e.preventDefault()
    setState({
      habits: [e.target[0].value, ...habits]
    })
  }


  return (
    <Page onSubmit={handleSubmit} habits={habits} />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))