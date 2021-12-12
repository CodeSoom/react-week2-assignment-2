import { TodoStatus } from './TodoStatus';
import { generateId } from './generateId';

export default class Todo {
  /**
   * @param title {string}
   */
  constructor(title) {
    this._id = generateId();
    this._title = title;
    this._status = TodoStatus.READY;
  }

  complete() {
    this._status = TodoStatus.COMPLETE;
  }

  /** @returns {string} */
  get id() {
    return this._id;
  }

  /** @returns {string} */
  get title() {
    return this._title;
  }

  /**
   * @param id {string}
   * @returns {boolean}
   */
  equals(id) {
    return this._id === id;
  }

  /** @returns {boolean} */
  isReady() {
    return this._status === TodoStatus.READY;
  }
}
