import React from 'react';

const Button = ({ handleClick, children, value }) => (
  <button type="button" onClick={handleClick} value={value}>{children}</button>
);

export default Button;
