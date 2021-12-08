import React from 'react'
import Input from './Input.jsx'
function Page({ onSubmit, onClickDelete, habits }) {
  return (
    <Input onSubmit={onSubmit} onClickDelete={onClickDelete} habits={habits} />
  )
}

export default Page
