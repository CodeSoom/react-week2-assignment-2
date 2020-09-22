import React from 'react';
import ListItems from './ListItems';
import AddBox from './AddBox';

function Page() {
  return (
    <div>
      <h2>To-do</h2>
      <AddBox />
      <ListItems />
    </div>
  );
}

export default Page;
