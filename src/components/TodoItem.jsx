import React from 'react';

export default function TodoItem({ children, onComplete }) {
 const handleClick = () => {
  typeof onComplete === 'function' && onComplete();
 };

 return (
  <div>
   <span>{children}</span>
   <button type="button" onClick={handleClick}>완료</button>
  </div>
 );
}
