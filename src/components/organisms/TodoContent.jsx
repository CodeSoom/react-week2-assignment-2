import React from 'react';

import OrderedList from '../atoms/OrderedList';
import ListItem from '../atoms/ListItem';
import Message from '../molecules/Message';
import TodoItem from '../molecules/TodoItem';

export default function TodoContent({ items }) {
  const message = (todoItems) => {
    if (todoItems.length !== 0) {
      return <></>;
    }
    return (
      <Message
        message="할 일이 없어요!"
      />
    );
  };

  return (
    <>
      {message(items)}
      <OrderedList>
        {[...items].map((item) => (
          <ListItem
            key={item.id}
          >
            <TodoItem
              text={item.text}
            />
          </ListItem>
        ))}
      </OrderedList>
    </>
  );
}
