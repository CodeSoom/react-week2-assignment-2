import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoList: [],
  });

  const { inputValue, todoList } = state;

  const handleInputChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleClickInsertButton = () => {
    const list = todoList;
    list.push({ text: inputValue, index: list.length });

    setState({
      todoList: list,
      inputValue: '',
    });
  };

  const handleClickCompleteButton = (index) => {
    const list = todoList;
    list.splice(index, 1);

    setState({
      ...state,
      todoList: list,
    });
  };

  const todoListIsNull = todoList.length === 0;

  return (
    <div>
      <h1>To-Do</h1>
      <div>
        <input value={inputValue} onChange={handleInputChange} placeholder="할 일을 입력해 주세요" />

        <button onClick={handleClickInsertButton} type="button">추가</button>

        {todoListIsNull ? (<div>할 일이 없어요!</div>) : todoList.map(({ text, index }, mapIdx) => (
          <div key={index}>
            <span>{text}</span>
            <button
              onClick={() => {
                handleClickCompleteButton(mapIdx);
              }}
              type="button"
            >
              완료
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
