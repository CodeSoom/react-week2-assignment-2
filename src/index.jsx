import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <div>
        <h1>To-do</h1>
        <input type="text" placeholder="할 일을 입력해 주세요"></input>
        <button>추가</button>
    </div>
);


ReactDOM.render(
    element,
    document.getElementById('app'),
  );
  