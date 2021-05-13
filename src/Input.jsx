import React from 'react';

export default function Input({
  value,
  onChangeValue,
  inputRef,
  ...props
}) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <input ref={inputRef} value={value} onChange={onChangeValue} {...props} />
  );
}
