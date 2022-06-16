import { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return [value, handleChange, setValue];
};

export default useInput;
