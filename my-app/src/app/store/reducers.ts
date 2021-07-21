import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { changeColor } from './actions';

export interface State {
  color: string;
  count: number;
}

const initialState: State = {
  color: 'Vert',
  count: 0,
};

const colorReducer = createReducer(
  initialState.color,
  on(changeColor, (state, action) => action.color),
);


// function colorReducer(state = initialState.color, action: any) {
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return action.payload;
//     default:
//       return state;
//   }
// }

function countReducer(state = initialState.count, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {
  color: colorReducer,
  count: countReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
