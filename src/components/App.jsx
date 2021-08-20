import { useReducer } from 'react';

import { v4 } from 'uuid';

import Page from './Page';

const reducers = {
  ADD: (state, { payload: { id, content } }) => ({
    ...state,
    todos: [...state.todos, { id, content }],
  }),
  COMPLETE: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }),
  INPUT: (state, { payload: todoContent }) => ({
    ...state,
    todoContent,
  }),
};

function reducer(state, action) {
  return reducers[action.type](state, action);
}

const initialState = {
  todos: [],
  todoContent: '',
};

export default function App() {
  const [{ todos, todoContent }, dispatch] = useReducer(reducer, initialState);

  const handleChangeInput = (value) => {
    dispatch({ type: 'INPUT', payload: value });
  };

  const handleClickAddButton = () => {
    dispatch({ type: 'ADD', payload: { id: v4(), content: todoContent } });
    dispatch({ type: 'INPUT', payload: '' });
  };

  const handleClickCompleteButton = (id) => {
    dispatch({ type: 'COMPLETE', payload: id });
  };

  return (
    <Page
      handleChangeInput={handleChangeInput}
      handleClickAddButton={handleClickAddButton}
      handleClickCompleteButton={handleClickCompleteButton}
      todos={todos}
      todoContent={todoContent}
    />
  );
}
