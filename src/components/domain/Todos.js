import Todo from './Todo';

export default class Todos {
  constructor() {
    this._list = [];
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
    return Object.assign(this);
  }

  /** @returns {Todo[]} */
  get readyList() {
    return this._list.filter((todo) => todo.isReady());
  }

  /** @returns {boolean} */
  isEmpty() {
    return this._list.length === 0;
  }
}
