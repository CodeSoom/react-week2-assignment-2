import React from 'react';

const TodoList = ({ itemList, setItemList }) => {
  const deleteTodo = (index) => {
    setItemList((previousItem) => previousItem.filter((item, idx) => index !== idx));
  };

  return (
    <>
      <div>
        {itemList && itemList.length ? itemList.map((item, index) => (
          <>
            <div>
              {`${index + 1} . `}
              {item.todo}
              <button type="button" onClick={() => deleteTodo(index)}>완료</button>
            </div>
          </>
        )) : <div>할 일이 없어요!</div>}
      </div>
    </>
  );
};

export default TodoList;
