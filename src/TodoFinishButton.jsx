import React from 'react';

function FinishButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      완료
    </button>
  );
}

export default FinishButton;
