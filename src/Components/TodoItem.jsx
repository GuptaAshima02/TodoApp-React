// TodoItem.js
import React, { useState } from "react";

const TodoItem = ({ index, todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (updatedTodo.trim() !== "") {
      setIsEditing(false);
      onEdit(index, updatedTodo);
    }
  };

  const handleDeleteClick = () => {
    onDelete(index);
  };

  const handleInputChange = (event) => {
    setUpdatedTodo(event.target.value);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={updatedTodo}
          onChange={handleInputChange}
        />
      ) : (
        <span>{todo}</span>
      )}
      <div className="todo-item-buttons">
        <button className="edit-button" onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
