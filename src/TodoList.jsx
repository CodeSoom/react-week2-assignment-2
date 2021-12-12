/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React from 'react';

import Button from './Button';

export default function TodoList({
  todoItems,
  buttonType,
  buttonTitle,
  onClick,
}) {
  return (
    <ul>
      {todoItems.map((todoThing, i) => (
        <li key={i}>
          <span>
            {i + 1}
            .
            {todoThing}
          </span>
          <Button
            type={buttonType}
            buttonTitle={buttonTitle}
            onClick={() => onClick(i)}
          />
        </li>
      ))}
    </ul>
  );
}
