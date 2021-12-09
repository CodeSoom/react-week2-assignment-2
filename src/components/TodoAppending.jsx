import React, { useRef, useState } from 'react';
import isFunction from '../utils/isFunction';

export default function TodoAppending({ onAppend }) {
 const $input = useRef();
 const [todo, setTodo] = useState('');
 const handleChange = ({ target: { value } }) => {
  setTodo(value);
 };

 const handleAppend = () => {
  if (isFunction(onAppend)) {
   onAppend(todo);
   setTodo('');

   if ($input.current) {
    $input.current.focus();
   }
  }
 };

 const handleOnClick = () => {
  handleAppend();
 };

 const handleKeyPress = ({ code }) => {
  if (code === 'Enter') {
   handleAppend();
  }
 };

 return (
  <div>
   <label htmlFor="todo">할 일</label>
   <input
    ref={$input}
    id="todo"
    type="text"
    name="todo"
    value={todo}
    onKeyPress={handleKeyPress}
    onChange={handleChange}
    autoFocus
   />
   <button
    type="button"
    onClick={handleOnClick}
   >
    추가
   </button>
  </div>
 );
}
