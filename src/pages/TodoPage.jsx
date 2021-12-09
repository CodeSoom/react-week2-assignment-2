import React from 'react';
import TodoAppending from '../components/TodoAppending';

export default function TodoPage() {
 const handleAppend = (todo) => {
  console.log('todo : ', todo);
 };

 return (
  <main>
   <h1>Todo</h1>
   <TodoAppending onAppend={handleAppend} />
  </main>
 );
}
