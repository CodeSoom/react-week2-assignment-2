import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';

const Dynamic = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const insert = (record) => [() => setList([...list, record]), () => setValue('')].forEach((excute) => excute());
  const slice = (start, end) => list.slice(start, end);
  const remove = (index) => setList([...slice(0, index), ...slice(index + 1, list.length)]);

  const onChange = (event) => setValue(event.target.value);

  const components = [];
  components.push(<Input value={value} onChange={onChange} onClick={insert} />);
  components.push(<Output list={list} onClick={remove} />);

  return (<div>{components.map((element) => element)}</div>);
};

export default Dynamic;
