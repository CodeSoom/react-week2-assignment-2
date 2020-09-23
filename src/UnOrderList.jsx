import React from 'react';

import List from './List';

<<<<<<< HEAD
function UnOrderList({ onClick, toDos }) {
=======
>>>>>>> 1fe368d6577bff0713ca79b1deadb192862a6e8d
  return (
    <ul>
      {toDos[0] === undefined
        ? (<h3>할 일이 없어요!</h3>)
        : (
          <List
            onClick={onClick}
            toDos={toDos}
<<<<<<< HEAD
=======
>>>>>>> 1fe368d6577bff0713ca79b1deadb192862a6e8d
          />
        )}
    </ul>
  );
}

export default UnOrderList;
