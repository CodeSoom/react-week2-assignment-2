/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';

export default function Button({
  type = 'button',
  buttonTitle,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}
