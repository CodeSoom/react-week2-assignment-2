import React from 'react';

export default function OrderedList({ children }) {
  return (
    <>
      <ol>
        {children}
      </ol>
    </>
  );
}
