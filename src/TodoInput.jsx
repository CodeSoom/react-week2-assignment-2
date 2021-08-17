import React from 'react';
import PropTypes from 'prop-types';

function TodoInput({ todo, onChange, onClick }) {
  return (
    <div>
      <input type="text" value={todo} placeholder="할 일을 입력해 주세요" onChange={onChange} />
      <button type="button" onClick={onClick}>추가</button>
    </div>
  );
}

TodoInput.propTypes = {
  todo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoInput;
