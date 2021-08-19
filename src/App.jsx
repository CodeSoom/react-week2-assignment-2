import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [state, setState] = useState({
    todo: '',
    todos: [],
  });

  const { todo, todos } = state;

  const handleInput = ({ target }) => {
    setState({ ...state, todo: target.value });
  };

  const handleAddButtonClick = () => {
    setState({
      todo: '',
      todos: [...todos, todo],
    });
  };

  const handleCompleteButtonClick = (index) => {
    todos.splice(index, 1);
    setState({ todos });
  };

  return (
    <div>
      <p>To-do</p>
      <p>
        <TodoInput
          todo={todo}
          onChange={(event) => handleInput(event)}
          onClick={handleAddButtonClick}
        />
      </p>
      <p>
        <TodoList todos={todos} onClick={(index) => handleCompleteButtonClick(index)} />
      </p>
    </div>
  );
}

export default App;
