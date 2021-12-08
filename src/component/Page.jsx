import React from 'react'

function Page({ onSubmit, onDelete, habits }) {
  return (
    <Input onSubmit={onSubmit} onDelete={onDelete} habits={habits} />
  )
}

export default Page
