import React from 'react';

export default function EmptyMessage({ todos }) {
  return !todos.length && <p> 할 일이 없어요! </p>;
}
