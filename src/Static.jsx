import React from 'react';

const Static = () => {
  const components = [<h1>To-do</h1>, <p />];

  return (<div>{components.map((element) => element)}</div>);
};

export default Static;
