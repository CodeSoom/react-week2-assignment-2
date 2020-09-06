import React from 'react';
import Button from './Button';

export default function ToDoInput ({ value, onChange, onClick }) {
    const components = [];
  
    return (<div>
        <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={onChange} />
        <Button value="추가" onClick={() => onClick(value)} />
        </div>);
}
