import React from 'react';
import PropTypes from 'prop-types';

import InputButton from './InputButton';

function Input({ todo, onChange, onClick }) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <InputButton
        onClick={onClick}
      />
    </div>
  );
}

Input.propTypes = {
  todo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Input;
