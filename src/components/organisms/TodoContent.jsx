import React from 'react';

import OrderedList from '../atoms/OrderedList';
import ListItem from '../atoms/ListItem';
import Message from '../molecules/Message';
import TodoItem from '../molecules/TodoItem';

export default function TodoContent() {
  return (
    <>
      <Message
        message="할 일이 없어요!"
      />
      <OrderedList>
        <ListItem>
          <TodoItem
            text="할 일"
          />
        </ListItem>
        <ListItem>
          <TodoItem
            text="아무것도 하지 않기"
          />
        </ListItem>
      </OrderedList>
    </>
  );
}
