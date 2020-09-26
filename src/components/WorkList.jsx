import React from 'react';

import WorkItem from './WorkItem';

const isEmpty = (array) => array.length <= 0;

export default function WorkList({ works, onClick }) {
  if (isEmpty(works)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {
        works.map(({ key, value }) => (
          <WorkItem key={key} work={value} onClick={() => onClick(key)} />
        ))
      }
    </ol>
  );
}
