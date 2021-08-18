import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <h1>To-do</h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
      />
      <button type="button">추가</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
