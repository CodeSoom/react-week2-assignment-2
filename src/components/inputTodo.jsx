import React from 'react';
import PropTypes from 'prop-types';

function InputToDo({ onClick }) {
  return (
    <p>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="할 일을 입력해 주세요"
      />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </p>
  );
}

InputToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InputToDo;
