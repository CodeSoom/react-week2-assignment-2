import React, { useEffect, useRef } from 'react';

export default function Input({
  value,
  onChange,
  onKeyPress,
  type,
  todos,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
