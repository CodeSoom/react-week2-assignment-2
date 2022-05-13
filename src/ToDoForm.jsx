import React from 'react';

import toDoConstant from './constant/todo';

export function ToDoForm({ onChange, onClick }) {
  return (
    <form>
      <input
        type="text"
        placeholder={toDoConstant.placeHolder}
        onChange={onChange}
      />
      <input type="reset" onClick={onClick} value={toDoConstant.add} />
    </form>
  );
}
