import { createAction, props } from '@ngrx/store';

export const changeColor = createAction(
  '[Home Page] Change color',
  props<{ color: string }>()
);
