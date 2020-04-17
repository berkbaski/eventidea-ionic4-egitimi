import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList: string[] = [];
  todoText: string;

  constructor() { }

  addTodo() {
    if (this.todoText.trim().length > 0) {
      this.todoList.unshift(this.todoText);
      this.todoText = '';
    }
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }

}
