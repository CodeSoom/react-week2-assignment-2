import React from 'react'
import Input from './Input.jsx'
function Page({ onSubmit, onDelete, habits }) {
  return (
    <Input onSubmit={onSubmit} onDelete={onDelete} habits={habits} />
  )
}

export default Page
