import { useState,useReducer } from 'react'
import AddTask from './components/AddTask'
import { v4 } from "uuid"
import TaskList from './components/TaskList'

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: v4(),
          text: action.payload,
          done: false,
        },
      ];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
}

function App() {

  const initialState = [
    { id: v4(), text: 'Do homework', done: false },
    { id: v4(), text: 'Buy groceries', done: true },
    { id: v4(), text: 'Eat cake', done: false },
  ]

  const [todos, dispatch] = useReducer(todosReducer, initialState);

  const [text, setText] = useState('')

  function handleAddTask() {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleDeleteTask(selectedTodoID) {
    dispatch({ type: 'DELETE_TASK', payload: selectedTodoID });
  }


  function handleEditTask(todoChangedText) {
    dispatch({ type: 'EDIT_TASK', payload: todoChangedText });
  }

  function handleCheckboxChange(todoID) {
    dispatch({ type: 'TOGGLE_TASK', payload: todoID });
  }



  return (
    <>
      <h1 className='font-mono text-4xl font-bold text-center mt-10 text-blue-500'>Todo List</h1>
      <AddTask text={text} handleAddTask={handleAddTask} handleTextChange={handleTextChange} />
      <TaskList todos={todos} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} handleCheckboxChange={handleCheckboxChange} />

    </>
  )
}

export default App
