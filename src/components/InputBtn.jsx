import React, { useState } from 'react';

export default function InputBtn({ getText }) {
    console.log(getText);
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
          <li key={item.id}>{item.value}<button>완료</button></li>
        ))}
      </ul>
    </div>
  );
}
