import React from 'react';
import isFunction from '../utils/isFunction';

export default function TodoItem({ children, onComplete }) {
 const handleClick = () => {
  isFunction(onComplete) && onComplete();
 };

 return (
  <div>
   <span>{children}</span>
   <button type="button" onClick={handleClick}>완료</button>
  </div>
 );
}
