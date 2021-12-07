import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function Habit() {
  const content = "none";
  return (
    <div>
      {content}
      <button type="button"> {content}</button>
    </div>
  )
}

function Habits() {
  return (
    <div>habits</div>
  )
}

function Input({ onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="content" placeholder="할 일을 입력해 주세요" />
      <input type="submit" value="추가" />
    </form>
  )
}

function Page({ onSubmit }) {
  return (
    <Input onSubmit={onSubmit} />
  )
}

function App() {
  function handleSubmit(e) {
    console.log(e.target[0].value)
  }


  return (
    <Page onSubmit={handleSubmit} />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))