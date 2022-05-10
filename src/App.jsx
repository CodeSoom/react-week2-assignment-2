import React, { useState } from 'react';
import EmptyListCard from './EmptyListCard';
import List from './List';
import NewCard from './NewCard';
import Title from './Title';

const App = () => {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

  const handleContentChange = (event) => {
    const { value } = event.target;
    setContent(value);
  };

  const handleContentSubmit = () => {
    if (content.length > 0) {
      setList([...list, content]);
      setContent('');
    }
  };

  const handleContentDone = (event) => {
    const { value } = event.target;
    const listIndex = Number(value);
    setList((previousList) => previousList.filter((item, i) => i !== listIndex));
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
