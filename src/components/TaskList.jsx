import React from 'react'

function TaskList({ todos, handleDeleteTask }) {

  return (
    <div className='grid place-content-center'>
      {todos.map((todo) => (
        <div key={todo.id} className='mb-2'>
          <label>
            <input type='checkbox' className='mr-2'></input>
            {todo.text}
          </label>
          <button className='border-cyan-700 border text-sm rounded p-0.5 ml-2 text-cyan-700'>Edit</button>
          <button className='border-cyan-700 border text-sm rounded p-0.5 ml-2 text-cyan-700' onClick={() => handleDeleteTask(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList