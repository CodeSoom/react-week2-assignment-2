import React from 'react';

export default function List({ tasks }) {
  return (
    <div>
      {tasks.map(task => (
        <p>
          {JSON.stringify(task)}
        </p>
      ))}
    </div>
  );
}
