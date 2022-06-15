import { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const inputHandler = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return [value, inputHandler, setValue];
};

export default useInput;
