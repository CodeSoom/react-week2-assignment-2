import { useState } from 'react';
import Page from './Page';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(`'${e.target.firstChild.value}', 해야 할 일 목록 업데이트`);
  e.target.firstChild.value = '';
};

const handleClick = (e) => {
  e.preventDefault();
  console.log(`${e.target.className}번 항목 완료됨`);
};

export default function App() {
  return <Page onClick={handleClick} onSubmit={handleSubmit} />;
}
