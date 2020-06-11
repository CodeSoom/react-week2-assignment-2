import React from 'react';

export default function ({ value, onChange, placeholder }) {
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}
