import React from 'react';
import Button from './button';

export default function Item({ index, title, onCompleteClick }) {
  return (
    <li key={index} Style="margin-top:10px">
      .
      {title}
      <Button
        text="완료"
        onClick={() => onCompleteClick(index)}
      />
    </li>
  );
}
