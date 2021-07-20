import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [{
    id: 1,
    title: 'ABC',
    completed: true,
  }, {
    id: 2,
    title: 'DEF',
    completed: false,
  }]

  // todos: Todo[] = (new Array(1000)).fill({id: 0, title: 'ABC', completed: true});

  constructor() { }

  ngOnInit(): void {
  }

  addToArray(todo: Todo) {
    // Changement immuable (créé un nouvel objet en mémoire);
    this.todos = [...this.todos, todo];

    // Changement muable (met à jour l'objet en mémoire)
    // this.todos.push(todo);
  }

  deleteFromArray(todo: Todo) {
    const indexToDel = this.todos.indexOf(todo);
    this.todos.splice(indexToDel, 1);
  }

}
