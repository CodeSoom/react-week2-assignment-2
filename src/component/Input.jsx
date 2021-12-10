import React, { useState } from 'react';
import Habits from './Habits';

function Input({ onSubmit, onClickDelete, habits }) {
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

  const isHabitEmpty = habits.length === 0;
  return (
    <div>
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
      <div>
        {
          isHabitEmpty
            ? '할 일이 없어요!'
            : (
              <Habits
                onClickDelete={onClickDelete}
                habits={habits}
              />
            )
        }
      </div>
    </div>
  );
}

export default Input;
