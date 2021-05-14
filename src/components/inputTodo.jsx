import React from 'react';
import PropTypes from 'prop-types';

function InputToDo({ onClick, value, onChanged }) {
  return (
    <p>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={(e) => { onChanged(e.target.value); }}
      />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </p>
  );
}

InputToDo.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChanged: PropTypes.func.isRequired,
};

export default InputToDo;
