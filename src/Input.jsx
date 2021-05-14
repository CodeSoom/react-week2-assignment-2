import React, { useEffect, useRef } from 'react';

export default function Input({
  value,
  onChangeValue,
  onKeyPress,
  type,
  todos,
}) {
  const handleChangeValue = (e) => onChangeValue(e.target.value);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={handleChangeValue}
      onKeyPress={onKeyPress}
    />
  );
}
