import React from 'react';

function AddForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
      />
      <button type="button">추가</button>
    </form>
  );
}

function TodoList() {
  return (
    <ol>
      {[
        { contents: '할일 1', id: 1 },
        { contents: '할일 2', id: 2 },
      ].map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          key={todoItem.id}
        />
      ))}
    </ol>
  );
}

function TodoItem({ todoItem }) {
  return (
    <li>
      <span>{ todoItem.contents }</span>
      <button
        type="button"
      >
        완료
      </button>
    </li>
  )
}

function app() {
  return (
    <div>
      <h1>To-do</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default app;
