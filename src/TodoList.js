// src/TodoList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./redux/actions";
import "./TodoList.css";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
