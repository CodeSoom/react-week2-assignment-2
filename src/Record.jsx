import React from 'react';
import Button from './Button';

const Output = ({ value, onClick }) => {
  const components = [<span>{value}</span>, <Button value="완료" onClick={onClick} />];
  return (<div>{components.map((element) => element)}</div>);
};

export default Output;
