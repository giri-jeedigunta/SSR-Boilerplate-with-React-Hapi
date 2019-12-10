import { observable, computed, reaction, action } from 'mobx';

export default class TodoStore {
  @observable todos = [];

  @action addTodo(title) {
    this.todos.push(title);
  }

	@computed get completedCount() {
		return this.todos.length;
	}

};
