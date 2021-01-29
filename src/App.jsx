import React from 'react';

import Text from './Text';

function App() {
  function handleClick() {}
  return (
    <>
      <p>
        TO-DO
      </p>
      <p>
        <Text />
        <button type="button" onClick={handleClick}>
          추가
        </button>
      </p>
    </>
  );
}

export default App;
