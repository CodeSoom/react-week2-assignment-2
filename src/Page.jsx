import React from 'react';

function Page({ description, todoList, onAdd, onChange, onDelete }) {
  return (
    <div>
      <p>To-do</p>
      <p>
        <input
          type='text'
          placeholder='할 일을 입력해 주세요'
          value={description}
          onChange={(e) => onChange(e)} >
        </input>
        <button
          type='button'
          onClick={() => onAdd()}>
          추가
        </button>
      </p>
      <p>
        <ul>
          {
            todoList.map((todo) => (
              <li key={todo.id} type='1'>
                <span>{todo.description}</span>
                <button data-id={todo.id} onClick={(e) => onDelete(e)}>완료</button>
              </li>
            ))
          }
        </ul>
      </p>
    </div>
  )
}

export default Page;
