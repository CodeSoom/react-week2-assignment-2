/* eslint-disable no-underscore-dangle */
import uniqId from '../libs/uniqId';

class Todo {
  constructor(title) {
    this._id = uniqId();
    this._title = title;
  }

  get id() {
    return this._id;
  }

  /**
   * @readonly
   * @memberof Todo
   * @return {string}
   */
  get title() {
    return this._title;
  }
}

export default Todo;
