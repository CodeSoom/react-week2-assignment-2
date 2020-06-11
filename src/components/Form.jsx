import React from 'react';

import Input from './Input';

export default function ({
  onSubmit, value, onChange, isEmpty,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Input value={value} onChange={onChange} placeholder="할 일을 적어주세요." />
        <button type="submit">추가</button>
      </div>
      {isEmpty && <b style={{ color: 'red' }}>할 일을 적어주세요.</b>}
    </form>
  );
}
