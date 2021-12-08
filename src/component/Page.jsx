import React, { useState } from 'react'
import Input from './Input.jsx'
function Page() {

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
    <Input onSubmit={handleSubmit} onClickDelete={handleDelete} habits={habits} />
  )
}

export default Page
