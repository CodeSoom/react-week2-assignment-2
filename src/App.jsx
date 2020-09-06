import React from 'react';

import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function App() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');
  
    const insert = (record) =>{
      setList([...list, record]);
      setValue('');
    };
  
    const remove = (number) => setList(list.filter((element, index) => index !== number));
    const onChange = (event) => setValue(event.target.value);
  
    return (<div>
        <div>
            <h1>To-do</h1>
        </div>
        <div>
          <ToDoInput value={value} onChange={onChange} onClick={insert} />
          <ToDoList list={list} onClick={remove} />
        </div>
      </div>);
  };
