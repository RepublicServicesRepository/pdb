import {Component, Inject} from '@angular/core';
import {TodoStore, Todo} from './services/store';

@Component({
    moduleId: module.id,
    selector: 'ng5-todo',
    templateUrl: 'template.html',
    styleUrls: ['style.css'],
    providers: [TodoStore]
})
export class Ng5Todo {
    todoStore: TodoStore;
    newTodoText = '';

    constructor(@Inject(TodoStore) todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    stopEditing(todo: Todo, editedTitle: string) {
        todo.title = editedTitle;
        todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }

        todo.title = editedTitle;
    }

    editTodo(todo: Todo) {
        todo.editing = true;
    }

    removeCompleted() {
        this.todoStore.removeCompleted();
    }

    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    remove(todo: Todo){
        this.todoStore.remove(todo);
    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    }
}