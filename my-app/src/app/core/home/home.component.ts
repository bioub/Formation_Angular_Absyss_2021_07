import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeColor } from 'src/app/store/actions';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  color$: Observable<string>;

  constructor(private store: Store<State>) {
    this.color$ = this.store.select((state: State) => state.color);
  }

  ngOnInit(): void {}

  changeColor(color: string) {
    // this.store.dispatch({ type: 'CHANGE_COLOR', payload: color });
    this.store.dispatch(changeColor({ color }));
  }
}
