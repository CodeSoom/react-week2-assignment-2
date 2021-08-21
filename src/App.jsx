import React, { useState } from 'react';
import ReactDOM from 'react-dom';

  function App() {
    return (
        <div>
          <p>To-do</p>
          <p>
            <input type='text' placeholder='할 일을 입력해 주세요'></input>
            <button>추가</button>
          </p>
        </div>
       );
  }

ReactDOM.render(
  <App />,   
  document.getElementById('app'),
);
