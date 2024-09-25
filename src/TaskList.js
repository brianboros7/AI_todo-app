import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (newTaskTitle.trim() !== '') {
            const newTask = {
                id: Date.now(),
                title: newTaskTitle,
                items: []
            };
            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
        }
    };

    const addTaskItem = (taskId, itemText) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    items: [...task.items, { id: Date.now(), text: itemText }]
                };
            }
            return task;
        }));
    };

    const updateTaskItem = (taskId, itemId, newText) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    items: task.items.map(item => 
                        item.id === itemId ? { ...item, text: newText } : item
                    )
                };
            }
            return task;
        }));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="task-list">
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Enter a new task title"
                />
                <button type="submit">Add Task</button>
            </form>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onAddItem={addTaskItem}
                    onUpdateItem={updateTaskItem}
                    onDelete={() => deleteTask(task.id)}
                />
            ))}
        </div>
    );
}

export default TaskList;