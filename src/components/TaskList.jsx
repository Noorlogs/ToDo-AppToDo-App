import React, { useState } from 'react';
import './tasklist.css'; // Import your tasklist.css
import { BsPencilSquare, BsTrash, BsCheck } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';

export default function TaskList({ tasks, setTasks }) {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [cutTasks, setCutTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editValue, setEditValue] = useState("");

    const handleCutToggle = (index) => {
        const updatedCutTasks = [...cutTasks];
        updatedCutTasks[index] = !updatedCutTasks[index];
        setCutTasks(updatedCutTasks);

        // Toggle completed status
        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks[index] = !completedTasks[index];
        setCompletedTasks(updatedCompletedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index]);
    };

    const handleSaveClick = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editValue;
        setTasks(updatedTasks);
        setEditIndex(-1);
        setEditValue("");
    };

    return (
        <div className="task-list task-description">
            {tasks.map((task, index) => (
                <div
                    className={`task ${completedTasks[index] ? 'completed' : ''}`}
                    key={index}
                >
                    {editIndex === index ? (
                        <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    ) : (
                        <span className={cutTasks[index] ? 'cut-text' : ''}>
                            {task}
                        </span>
                    )}
                    <div className="task-icons">
                        <BsPencilSquare
                            className="icon edit-icon"
                            onClick={() => handleEditClick(index)}
                        />

                        {editIndex === index && (
                            <FiSave
                                className={`icon save-icon ${cutTasks[index] ? 'cut' : ''}`}
                                onClick={() => handleSaveClick(index)}
                            />

                        )}
                        <BsTrash className="icon delete-icon" onClick={() => handleDeleteTask(index)} />
                        <BsCheck
                            className={`icon done-icon ${cutTasks[index] ? 'cut' : ''}`}
                            onClick={() => handleCutToggle(index)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
