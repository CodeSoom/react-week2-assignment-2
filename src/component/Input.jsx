import React from 'react';

function Input({ onSubmit, onChangeHabitToAdd, habitToAdd }) {
  const onChanageHandler = (event) => {
    onChangeHabitToAdd(event.target.value);
  };

  const onClickSubmitHabit = (event) => {
    event.preventDefault();
    const habit = {
      id: Date.now() + habitToAdd,
      text: habitToAdd,
    };
    onSubmit(habit);
  };

  return (
    <div>
      <form onSubmit={onClickSubmitHabit}>
        <input
          type="text"
          name="content"
          value={habitToAdd}
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
