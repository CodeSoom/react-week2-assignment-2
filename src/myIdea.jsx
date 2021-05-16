import React, { useState } from 'react';

export default function App() {
  const todoList = [
    { id: 1, content: 'Welcome to learning React!' },
    { id: 2, content: 'You can install React from npm.' },
  ];
  const [state, setState] = useState({
    id: 0,
    content: '',
  });

  const { id, content } = state;

  function appChange(e) {
    const inputData = e.nativeEvent.data;
    setState({
      id,
      content: content + inputData,
    });
  }

  const listItems = todoList.map(
    (todoThing) => <li id={todoThing.id} key={todoThing.id}>{todoThing.content}</li>,
  );

  function addTodoThing() {
    // const tempText = document.getElementById('inputThing');
    todoList.push({ id: id + 1, content });
    // console.log(todoList);
  }

  //   function makeListItem() {
  //     return (
  //       todoList.map((todoThing) => (
  //         <ListItem
  //           key={todoThing.id}
  //           value={todoThing.content}
  //         />
  //       )));
  //   }
  //   function ListItem(props) {
  //     // Correct! There is no need to specify the key here:
  //     return <li>{props.value}</li>;
  //   }

  return (
    <div>
      <p>
        To-do
      </p>
      <input type="text" value={content} onChange={appChange} />
      <button type="button" onClick={addTodoThing}>추가</button>
      {/* <ul>
        <makeListItem />
      </ul> */}
      <ul style={{
        'list-style-type': 'decimal',
      }}
      >
        {listItems}
      </ul>
    </div>
  );
}
