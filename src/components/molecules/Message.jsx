import React from 'react';

import Paragraph from '../atoms/Paragraph';

export default function Message({ message }) {
  return (
    <>
      <Paragraph>{message}</Paragraph>
    </>
  );
}
