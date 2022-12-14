class Todo {
  constructor(newTodo) {
    this.id = Math.random();
    this.todo = newTodo;
    this.isDeleted = false;
  }
}

export default Todo;
