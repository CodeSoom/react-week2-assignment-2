import React from 'react';
import ReactDOM from 'react-dom';

function Button({ children }) {
  return (
    <button type="button">{children}</button>
  );
}

function Buttons(){
  return (
    <p>
      {[1,2,3].map((i) => (
        <Button type="button" key={i}>{i}</Button>
      ))}
    </p>
  );
}

const App = (
  <div>
    <p>hello world!</p>
    <Buttons/>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
