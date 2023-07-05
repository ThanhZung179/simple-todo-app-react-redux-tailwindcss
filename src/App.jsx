import { useState } from 'react'
import AddTask from './components/AddTask'
import { v4 } from "uuid"
import TaskList from './components/TaskList'

function App() {

  const [todos, setTodos] = useState([
    { id: v4(), text: 'Do homework', done: false },
    { id: v4(), text: 'Buy groceries', done: true },
    { id: v4(), text: 'Eat cake', done: false }
  ])

  console.log(todos)

  const [text, setText] = useState('')

  function handleAddTask() {
    if (text.trim() != '') {
      setTodos(prevState => [
        ...prevState,
        {
          id: v4(),
          text: text,
          done: false
        }
      ])
      setText('')
    }
  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleDeleteTask(selectedTodoID) {
    setTodos(prevState => prevState.filter(todo => todo.id !== selectedTodoID));
  }

  function handleEditTask(todoChangedText) {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === todoChangedText.id ? { ...todoChangedText } : todo
      )
    );
  }

  function handleCheckboxChange(todoID) {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoID ? { ...todo, done: !todo.done } : todo
      )
    );
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
