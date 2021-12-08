import { useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
  };

  return { value, setValue, onChange };
}
