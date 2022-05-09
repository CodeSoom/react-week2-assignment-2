import React from 'react';

const NewCard = ({ content, handleContentChange, handleContentSubmit }) => (
  <>
    <input placeholder="할 일을 입력해 주세요" onChange={handleContentChange} value={content} />
    <button type="button" onClick={handleContentSubmit}>추가</button>
  </>
);

export default NewCard;
