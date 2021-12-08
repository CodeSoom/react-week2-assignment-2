import React, { useState } from 'react'
import Page from './Page.jsx';


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
      ...state,
      habits: [e.target[0].value, ...habits]
    })
    e.target[0].value = "";
  }


  return (
    <Page onSubmit={handleSubmit} onDelete={handleDelete} habits={habits} />
  )
}

export default App
