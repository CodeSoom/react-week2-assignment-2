import React, { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue("");

      // 이런것도 있었다...
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        handleChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInsert;
