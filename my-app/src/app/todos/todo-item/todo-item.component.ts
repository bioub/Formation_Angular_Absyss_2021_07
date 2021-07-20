import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // Partial => Utility Types TypeScript https://www.typescriptlang.org/docs/handbook/utility-types.html
  @Input() todo: Partial<Todo> = {};

  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  log() {
    console.log('TodoItem')
  }
}
