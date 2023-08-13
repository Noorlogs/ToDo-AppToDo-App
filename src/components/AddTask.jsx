import React, { useState } from 'react';
import './customform.css';
import TaskList from './TaskList';

export default function AddTask() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setTasks([...tasks, value]);
      setValue("");
    }
  };

  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input
            type="text"
            placeholder='Add Something!'
            name=""
            required=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSubmit}>
            ADD
            <span />
          </button>
        </div>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
