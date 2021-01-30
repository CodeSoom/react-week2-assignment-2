import React from 'react';

function TodoTemplete({ templetes, onClickTemplete }) {
  return (
    <div>
      <p>Templete</p>
      <p>
        {templetes.map((templete) => (
          <button
            type="button"
            key={templete}
            onClick={() => onClickTemplete(templete)}
          >
            {templete}
          </button>
        ))}

      </p>
    </div>
  );
}

export default TodoTemplete;
