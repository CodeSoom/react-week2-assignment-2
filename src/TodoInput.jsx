/* eslint-disable react/prop-types */

import React from 'react';

import Button from './Button';
import Input from './Input';

export default function TodoInput({
  inputType,
  placeholder,
  value,
  onChangeInput,
  buttonType,
  buttonTitle,
  onClickButton,
}) {
  return (
    <div>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
      <Button
        type={buttonType}
        buttonTitle={buttonTitle}
        onClick={onClickButton}
      />
    </div>
  );
}
