import React, { useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleContentSubmit = () => {
    if (content.length > 0) {
      setList([...list, content]);
      setContent('');
    }
  };
  const handleContentDone = (event) => {
    const { value } = event.target;
    const index = Number(value);
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  };
  return (
    <>
      <h1>To-do</h1>
      <input placeholder="할 일을 입력해 주세요" onChange={handleContentChange} value={content} />
      <button type="button" onClick={handleContentSubmit}>추가</button>
      {list.length === 0 ? (
        <p>할 일이 없어요!</p>
      ) : list.map((item, index) => (
        <div key={item}>
          {item}
          <button type="button" onClick={handleContentDone} value={index}>완료</button>
        </div>
      ))}
    </>
  );
};

export default App;
