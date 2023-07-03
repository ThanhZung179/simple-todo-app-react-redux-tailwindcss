import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {

  const [todos, setTodos] = useState([
    {id: 0, text: 'Do homework', done:false},
    {id: 1, text: 'Buy groceries', done: true},
    {id: 2, text: 'Eat cake', done:false}
  ])

  const [text, setText] = useState('')
  
  function handleAddTask() {

  }

  return (
    <>
      <h1 className='font-mono text-4xl font-bold text-center mt-10 text-blue-500'>Todo List</h1>
      <AddTask />
    </>
  )
}

export default App
