import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    task: '',
    tasks: [
      { name: '할일 1', date: '2020-09-23' },
    ],
  });

  const { task, tasks } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      task: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      task: '',
      tasks: [...tasks, {
        name: task,
        date: new Date(),
      }],
    });
  };

  return (
    <div>
      <h1>To-do</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          value={task}
          onChange={handleChange}
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
