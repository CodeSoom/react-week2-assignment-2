import React from 'react';

const Button = ({ children, onClick }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button type="button" onClick={onClick}>{children}</button>
);

export default Button;
