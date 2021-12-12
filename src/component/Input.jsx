import React, { useState } from 'react';

function Input({ onSubmit }) {
  const [value, setValue] = useState('');
  const onChanageHandler = (event) => {
    setValue(event.target.value);
  };

  const onClickSubmitHabit = (event) => {
    event.preventDefault();
    const habit = {
      id: Date.now() + value,
      text: value,
    };
    setValue('');
    onSubmit(habit);
  };

  return (
    <div>
      <form onSubmit={onClickSubmitHabit}>
        <input
          type="text"
          name="content"
          value={value}
          onChange={onChanageHandler}
          placeholder="할 일을 입력해 주세요"
        />
        <input
          type="submit"
          value="추가"
        />
      </form>
    </div>
  );
}

export default Input;
