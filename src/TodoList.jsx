import React, { useState } from 'react';

const TodoList = ({ todolist, deleteHandler }) => {
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleDelete = (index) => {
    setDeletingIndex(index);
    setTimeout(() => {
      deleteHandler(index);
      setDeletingIndex(null);
    }, 300); // Match this with fadeOut animation duration
  };

  return (
    <div className='box'>
      {todolist.map((todo, index) => (
        <div 
          className={`card ${deletingIndex === index ? 'deleting' : ''}`} 
          key={index}
        >
          <h5 className='box1'>
            {todo} &nbsp; 
            <button 
              className='btn2' 
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
