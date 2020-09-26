import React, { useState } from 'react';
import DeleteItem from './DeleteItem';

export default function InputBtn({ getText }) {
  const [items, setItems] = useState([]);

  const addItem = (it) => {
    setItems([...items, {
      id: items.length,
      value: it,
    }]);
  };

  return (
    <div>
      <button onClick={() => addItem(getText)}>추가</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}<DeleteItem items = {items}/></li>
        ))}
      </ul>
    </div>
  );
}
