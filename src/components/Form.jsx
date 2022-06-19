import { useState } from 'react';

export default function Form({ receiveSubmit }) {
  const [formInputValue, setFormInputValue] = useState('');

  const handleOnChange = ({ target: { value } }) => {
    setFormInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    receiveSubmit(formInputValue);
    setFormInputValue('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} value={formInputValue} />
        <input type="submit" value="추가" />
      </form>
    </div>
  );
}
