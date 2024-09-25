import React, { useState } from 'react';

function TaskItem({ task, onAddItem, onUpdateItem, onDelete }) {
    const [newItemText, setNewItemText] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItemText.trim() !== '') {
            onAddItem(task.id, newItemText);
            setNewItemText('');
        }
    };

    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <button onClick={onDelete}>Delete Task</button>
            <form onSubmit={handleAddItem}>
                <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Add new item"
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {task.items.map(item => (
                    <li key={item.id}>
                        <input
                            type="text"
                            value={item.text}
                            onChange={(e) => onUpdateItem(task.id, item.id, e.target.value)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskItem;