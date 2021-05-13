import React from 'react';

const Input = ({
  value, onChangeValue, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <input onChange={onChangeValue} value={value} {...props} />
);

export default Input;
