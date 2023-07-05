// constant
export const ADD_TASK = 'APP/ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_DONE = 'TOGGLE_DONE';

// actions
export const addTask = text => ({
  type: 'ADD_TASK',
  payload: text
});

export const deleteTask = todoID => ({
  type: 'DELETE_TASK',
  payload: todoID
});

export const editTask = todo => ({
  type: 'EDIT_TASK',
  payload: todo
});

export const toggleDone = todoID => ({
  type: 'TOGGLE_DONE',
  payload: todoID
});
