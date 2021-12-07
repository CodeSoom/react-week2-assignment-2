import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';

const App = () => {
  const [list, setList] = React.useState([]);

  const onClickAppendToDo = (text) => {
    setList([...list, { id: Date.now(), text }]);
  };

  const onClickRemoveToDo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <ToDo
      appendHandler={onClickAppendToDo}
      removeHandler={onClickRemoveToDo}
      list={list}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
