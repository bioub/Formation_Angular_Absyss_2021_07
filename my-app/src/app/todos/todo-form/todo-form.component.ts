import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo: Omit<Todo, 'id'> = {
    title: '',
    completed: false,
  };

  @Output() add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.add.emit({id: Math.random(), ...this.todo});
  }

}
