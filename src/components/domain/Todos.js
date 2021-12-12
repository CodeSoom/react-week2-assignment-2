import Todo from './Todo';

export default class Todos {
  constructor(list) {
    this._list = list;
  }

  static EMPTY() {
    return new Todos([]);
  }

  /**
   * @param title {string}
   * @returns {Todos}
   * */
  pushTitle(title) {
    return this.push(new Todo(title));
  }

  /**
   * @param todo {Todo}
   * @returns {Todos}
   * */
  push(todo) {
    this._list.push(todo);
    return this.copy();
  }

  /** @returns {Todo[]} */
  get readyList() {
    return this._list.filter((todo) => todo.isReady());
  }

  /** @returns {boolean} */
  isEmpty() {
    return this._list.length === 0;
  }

  /** @returns {Todos} */
  copy() {
    return new Todos(this._list);
  }
}
