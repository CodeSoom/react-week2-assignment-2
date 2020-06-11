import React from 'react';
import Button from './Button';

const Input = ({ value, onChange, onClick }) => {
  const components = [<input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={onChange} />, <Button value="추가" onClick={() => onClick(value)} />];

  return (<div>{components.map((element) => element)}</div>);
};

export default Input;
