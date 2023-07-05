import React, { useState } from 'react';

function TaskList({ todos, handleDeleteTask, handleEditTask }) {
  const [editMode, setEditMode] = useState('');
  const [editedText, setEditedText] = useState('');

  function handleEditButtonClick(todoID, todoText) {
    setEditMode(todoID);
    setEditedText(todoText);
  }

  function handleSaveButtonClick(todoID,todoDone) {
    handleEditTask({ id: todoID, text: editedText, done: todoDone });
    setEditMode('');
  }

  function handleCancelEditButtonClick() {
    setEditMode('');
  }

  return (
    <div className="grid place-content-center">
      {todos.map((todo) => (
        <div key={todo.id} className="mb-2">
          {editMode === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border-2 border-zinc-400 rounded-md"
              />
              <button
                className="uppercase text-white py-0.5 px-2 bg-cyan-700 ml-1 rounded-md"
                onClick={() => handleSaveButtonClick(todo.id, todo.done)}
              >
                Save
              </button>
              <button
                className="uppercase text-white py-0.5 px-2 bg-red-500 ml-1 rounded-md"
                onClick={handleCancelEditButtonClick}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <label>
                <input type="checkbox" className="mr-2"></input>
                {todo.text}
              </label>
              <button
                className="border-cyan-700 border text-sm rounded p-0.5 ml-2 text-cyan-700"
                onClick={() => handleEditButtonClick(todo.id, todo.text)}
              >
                Edit
              </button>
              <button
                className="border-cyan-700 border text-sm rounded p-0.5 ml-2 text-cyan-700"
                onClick={() => handleDeleteTask(todo.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
