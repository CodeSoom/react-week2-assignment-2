import { useRef } from 'react';

const ToDoInput = ({ appendHandler }) => {
  const inputRef = useRef(null);

  const onClickAppend = () => {
    appendHandler(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input placeholder="할 일을 입력해 주세요" ref={inputRef} />
      <button type="button" onClick={onClickAppend}>
        추가
      </button>
    </div>
  );
};

export default ToDoInput;
