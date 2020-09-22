import React from 'react';

function EmptyBox({ isEmpty }) {
  if (isEmpty) {
    return (
      <p>
        할 일이 없어요!
      </p>
    );
  }
  return null;
}

export default EmptyBox;
