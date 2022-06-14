import { useState } from 'react';
import reactDom from 'react-dom';

function App() {
  const [state, setState] = useState({
    inputValue: '',
    list: [],
  });

  const { inputValue, list } = state;

  const handleInput = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleClick = () => {
    const test = list;
    test.push({ text: inputValue, index: test.length });

    setState({
      list: test,
      inputValue: '',
    });
  };

  const handleClickDelete = (index) => {
    const test = list;
    test.splice(index, 1);

    setState({
      ...state,
      list: test,
    });
  };

  const listIsNull = list.length === 0;

  return (
    <div>
      <h1>To-Do</h1>
      <div>
        <input value={inputValue} onChange={handleInput} placeholder="할 일을 입력해 주세요" />
        <button onClick={handleClick} type="button">추가</button>
        {listIsNull ? (<div>할 일이 없어요!</div>) : list.map(({ text, index }, mapIdx) => (
          <div key={index}>
            <span>{text}</span>
            <button
              onClick={() => {
                handleClickDelete(mapIdx);
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

reactDom.render(<App />, document.getElementById('app'));
