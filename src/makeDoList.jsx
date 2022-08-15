import React from 'react';

function MakeDoList({ doList, setDoList }) {
  function completeButtonClick(index) {
    setDoList(doList.filter((todo, innerIndex) => index !== innerIndex));
  }

  return (
    <div>
      {doList.length === 0
        ? <div>할 일이 없어요!</div>
        : doList.map((todo, index) => (
          <div key={todo}>
            {`${index + 1}. ${todo}`}
            <button type="button" onClick={() => completeButtonClick(index)}>완료</button>
          </div>
        ))}
    </div>
  );
}

export default MakeDoList;
