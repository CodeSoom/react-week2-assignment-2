import React from 'react';

import Input from './Input';
import Submit from './Submit';

function Form({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Input onChange={onChange} />
      <Submit />
    </form>
  );
}

export default Form;
