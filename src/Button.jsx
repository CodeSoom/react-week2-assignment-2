import React from 'react';

function Button({ onClick, children }) {
  // const [count, setCount] = useState(0);

  // function handleClick(i = 1) {
  //   setCount(count + i);
  // }

  return (
    <button type="button" onClick={onClick}>{children}</button>
  );
}

export default Button;
