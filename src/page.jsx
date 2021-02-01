import React from 'react';

import Input from './input';
import Button from './button';
import Todoilst from './todolist';

export default function Page({
  inputText, onChange, onAddClick, todos, onCompleteClick,
}) {
  return (
    <div>
      <Input
        text={inputText}
        onChange={onChange}
      />
      <Button
        text="추가"
        onClick={onAddClick}
      />
      <Todoilst
        todos={todos}
        onCompleteClick={onCompleteClick}
      />
      {/* <ol>
        {
          !todos.length
            ? <div>할 일이 없어요!</div>
            : todos.map(({ title, index }) => (
              <li key={index} Style="margin-top:10px">
                .
                {title}
                <Button
                  text="완료"
                  onClick={() => onCompleteClick(index)}
                />
              </li>
            ))
        }
      </ol> */}
    </div>
  );
}
