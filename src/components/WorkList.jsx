import React from 'react';

import WorkItem from './WorkItem';

export default function WorkList({ works, onClick }) {
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
