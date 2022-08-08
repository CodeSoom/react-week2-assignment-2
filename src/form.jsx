import React from 'react';

function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
