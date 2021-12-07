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

function Input() {

  return (
    <form>
      <input type="text" placeholder="할 일을 입력해 주세요" />
      <input type="button" value="추가" id="" />
    </form>
  )
}

function Page() {
  return (
    <Input />
  )
}

function App() {
  return (
    <Page />
  )
}

ReactDOM.render(<App />, document.getElementById('app'))