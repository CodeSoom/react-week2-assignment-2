import React from 'react';

import Button from './Button';

export default function Output({ value, onClick }) {
    return (<div>
        <span>{value}</span>
        <Button value="완료" onClick={onClick} />
        </div>);
  };
