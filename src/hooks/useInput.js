import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState({
    inputValue: initialValue,
    contents: [],
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      inputValue: e.target.value,
    });
  };

  return [value, handleChange, setValue];
};

export default useInput;
