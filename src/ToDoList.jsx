import React from 'react';

import Record from './Record';

export default function ToDoList({ list, onClick }) {
    const mappingList = (record, index) => (<Record value={record} onClick={() => onClick(index)} />);
    const components = list.map(mappingList).map((record) => (<li>{record}</li>));
    const isEmpty = list.length === 0;
    const output = (isEmpty ? <p>할 일이 없어요!</p> : <ol>{components.map((element) => element)}</ol>);
  
    return <div>{output}</div>;
}
