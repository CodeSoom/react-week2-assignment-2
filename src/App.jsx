import React, { useState } from 'react';
import EmptyListCard from './EmptyListCard';
import List from './List';
import NewCard from './NewCard';
import Title from './Title';

const App = () => {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleContentSubmit = () => {
    if (content.length > 0) {
      setList([...list, content]);
      setContent('');
    }
  };
  const handleContentDone = (event) => {
    const { value } = event.target;
    const index = Number(value);
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  };
  return (
    <>
      <Title />
      <NewCard
        content={content}
        handleContentChange={handleContentChange}
        handleContentSubmit={handleContentSubmit}
      />
      {list.length === 0 && <EmptyListCard />}
      {list.length !== 0 && <List list={list} handleContentDone={handleContentDone} />}
    </>
  );
};

export default App;
