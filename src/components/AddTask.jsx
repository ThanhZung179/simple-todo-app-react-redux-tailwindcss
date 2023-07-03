import React from 'react'

function AddTask() {
  return (
    <div className='flex justify-center items-center m-6'>
    <input type='text' placeholder=' Add Task ' className='border-2 border-zinc-400 rounded-md'/>
    <button type= 'button' className=' uppercase text-white py-0.5 px-2 bg-cyan-700 ml-1 rounded-md'>Add</button>
    </div>
  )
}

export default AddTask