import { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [text, setText] = useState('Todo App!');
  return <h1>{text}</h1>;
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
