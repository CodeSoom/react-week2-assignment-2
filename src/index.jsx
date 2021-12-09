import ReactDOM from 'react-dom';

import Title from './componenet/Title';
import Content from './componenet/Content';

function App() {
  return (
    <div>
      <Title text="Todo List" />
      <Content />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
