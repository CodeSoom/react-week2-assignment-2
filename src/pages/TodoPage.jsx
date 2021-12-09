import React from 'react';
import TodoAppending from '../components/TodoAppending';
import TodoList from '../components/TodoList';

export default function TodoPage() {
 const handleAppend = (todo) => {
  console.log('todo : ', todo);
 };

 return (
  <main>
   <h1>Todo</h1>
   <TodoAppending onAppend={handleAppend} />
   <TodoList todos={['foo', 'bar']} onComplete={(index) => { console.log('index', index) }} />
  </main>
 );
}
