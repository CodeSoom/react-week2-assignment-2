import { useState } from 'react';

const inputStyle = {
  fontSize: '15px',
};

const TodoInput = ({ onClick }) => {
  const [state, setState] = useState({
    todo: '',
  });

  const { todo } = state;

  const handleChangeInput = (e) => {
    setState({
      todo: e.target.value,
    });
  };

  const handleClickAdd = () => {
    if (todo !== '') {
      onClick(todo);
      setState({
        todo: '',
      });
    }
  };

  return (
    <>
      <input type="text" style={inputStyle} value={todo} onChange={handleChangeInput} />
      <button type="button" onClick={handleClickAdd}>추가</button>
    </>
  );
};

export default TodoInput;
