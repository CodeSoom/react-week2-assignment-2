import React from 'react';
import Input from './Input'
import List from './List'


function Page({input,list, onAdd, onComplete, onChange}) {

  return (
    <div>
    <h1>To-do</h1>
    <Input onAdd={onAdd} input={input} onChange={onChange}/>
    <List list={list} onComplete={onComplete}/>
    </div>
  )
}

export default Page;