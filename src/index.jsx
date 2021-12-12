import ReactDOM from 'react-dom';
import Todo from './page/Todo';

const App = () => (
  <div>
    <Todo />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
