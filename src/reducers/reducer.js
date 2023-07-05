import { v4 as uuid } from 'uuid';
import { ADD_TASK, DELETE_TASK, TOGGLE_DONE, EDIT_TASK } from './action';

// initial state
const initialState = [
  { id: uuid(), text: 'Do homework', done: false },
  { id: uuid(), text: 'Buy groceries', done: true },
  { id: uuid(), text: 'Eat cake', done: false }
];

// reducer
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: uuid(),
          text: action.payload,
          done: false
        }
      ];
    case DELETE_TASK:
      return state.filter(todo => todo.id !== action.payload);
    case EDIT_TASK:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, done: action.payload.done }
          : todo
      );
    case TOGGLE_DONE:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      return state;
  }
}

