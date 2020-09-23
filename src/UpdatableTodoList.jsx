import React from 'react';

export default function UpdatableTodoList({
  task,
  tasks,
  onChange,
  onSubmit,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          value={task}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
      {tasks
        ? tasks.map(({ name, date }, index) => (
          <p key={date}>
            {index + 1}
            .
            {name}
            <button type="button">완료</button>
          </p>
        ))
        : '할 일이 없어요'}
    </div>
  );
}
