import React from 'react';

const CreateUser = ({ todolist, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="todolist"
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
        value={todolist}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default CreateUser;
