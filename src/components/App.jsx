import { useState } from 'react';
import Page from './Page';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.firstChild.value);
  e.target.firstChild.value = '';
};

const handleClick = (e) => {
  e.preventDefault();
  console.log(e.target.parentNode);
};

export default function App() {
  return <Page onClick={handleClick} onSubmit={handleSubmit} />;
}
