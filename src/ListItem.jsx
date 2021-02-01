import React from 'react';

function ListItem({ item, onClickComplete }) {
  const { id, content } = item;

  return (
    <div>
      {content}
      <button type="button" onClick={() => onClickComplete(id)}>
        완료
      </button>
    </div>
  );
}

export default ListItem;
