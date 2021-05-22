import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import ToDoItem from '../src/components/ToDoItem';

// 테스트 코드를 작성하는 표현방식 키워드
// describe - context - it
// given - when- then
test('renderToDoItem', () => {
  const todo = {
    id: 1,
    title: '계획대로 공부하기',
  };
  const handleClick = jest.fn();
  const { container, getByText } = render(
    <ToDoItem todo={todo} onClick={handleClick} />,
  );

  expect(container).toHaveTextContent('계획대로 공부하기');
  expect(container).toHaveTextContent('완료');

  const button = getByText('완료');

  expect(handleClick).not.toBeCalled();
  fireEvent.click(button);

  expect(handleClick).toBeCalledWith(1);
});
