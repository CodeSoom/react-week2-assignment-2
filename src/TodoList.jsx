import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, onClick }) {
  return list.map((el, i) => (
    <Todo
      key={el.key}
      index={i + 1}
      text={el.text}
      onClick={() => onClick(el.key)}
    />
  ));
}
