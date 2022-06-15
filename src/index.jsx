import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const onAddTodoItem = () => {
    if (inputRef.current.value === '') {
      alert('할 일을 입력해 주세요.');
      return;
    }

    const addItem = { id: Math.floor((Math.random() * 99999)), text: inputRef.current.value };
    setTodoList((prevList) => ([...prevList, addItem]));
    inputRef.current.value = '';
  };

  const onRemoveTodoItem = (id) => {
    const filterTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodoList);
  };

  return (
    <>
      <p>To-do</p>
      <p>
        <input ref={inputRef} placeholder="할 일을 입력해 주세요" />
        <button type="button" onClick={() => onAddTodoItem()}>
          추가
        </button>
      </p>
      <div>
        {todoList.length > 0
          ? todoList.map(
            (item, index) => (
              <div key={item.id}>
                <span>{index+1}.{item.text}</span>
                <button onClick={() => onRemoveTodoItem(item.id)}>완료</button>
              </div>
            ),
          ) : <p>할일이 없어요!</p>}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
