import React, { useState } from 'react';

import InputBtn from './InputBtn';
// import ListItem from './ListItem'

export default function App() {
  const [getText, setGetText] = useState({
    value: '',
  });

  return (
    <div>
      <h1>To-do</h1>
      <div>
      <input type="text" placeholder="할 일을 입력해주세요." onChange={(e) => setGetText(e.target.value)} />
      <InputBtn getText={getText} />
      </div>
    </div>
  );
}
