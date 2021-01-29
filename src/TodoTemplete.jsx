import React from 'react';

function TodoTemplete({ templetes, onClickTemplte }) {
  return (
    <div>
      <p>Templte</p>
      <p>
        {templetes.map((templete) => (
          <button
            type="button"
            key={templete}
            onClick={() => onClickTemplte(templete)}
          >
            {templete}
          </button>
        ))}

      </p>
    </div>
  );
}

export default TodoTemplete;
