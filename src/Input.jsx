import React from 'react';

const Input = ({
  value, onChangeValue, inputRef, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <input ref={inputRef} value={value} onChange={onChangeValue} {...props} />
);

export default Input;
