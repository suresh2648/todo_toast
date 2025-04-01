import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState([
    "watching tv",
    "reading book",
    "drinking water"
  ]);
  const [task, setTask] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodo([...todo, task]);
      setTask('');
      toast.success('Task added successfully! 🎉', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const deleteHandlerBtn = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
    toast.error('Task deleted! ❌', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer  className='Todoc'
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <center>
        <div className="container">
          <div className="container_container">
            <div className="container_title">
              <h2>todo list</h2>
              <form onSubmit={handleForm}>
                <input 
                  type="text" 
                  value={task}  
                  placeholder='enter your task' 
                  onChange={(e) => setTask(e.target.value)} 
                /> &nbsp;  &nbsp; 
                <button type="submit" className='btn1'>
                  Add
                </button>
              </form>
              <TodoList todolist={todo} deleteHandler={deleteHandlerBtn}/>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
