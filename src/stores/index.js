import { combineReducers, createStore } from "redux";

// reducer
import todoReducer from '../reducers/app.reducer';

// combine reducer
const rootReducer = combineReducers({
  todo: todoReducer
  
})

const store = createStore(rootReducer)

export default store;