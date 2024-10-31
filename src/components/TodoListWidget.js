// src/components/TodoListWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap

const TodoListWidget = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const fetchTodos = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const addTodo = async (title) => {
    setLoading(true);
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    });
    setTodos([response.data, ...todos]); // Add the new todo to the beginning
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setLoading(true);
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className=" mt-5">
      <h2 className="text-center mb-4">Todo List</h2>
      <div className="card mx-auto w-75">
        <div className="card-body">
          <form onSubmit={handleAddTodo} className="mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control input-shadow-custom"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
                required
              />
              <button type="submit" className="btn btn-primary weather-button">
                Add
              </button>
            </div>
          </form>
          {loading ? ( // Show loader while fetching todos
            <div className="text-center">
              <Spinner animation="border" role="status" className="mb-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Loading...</p>
            </div>
          ) : (
            <ul className="list-group">
              {/* Display only the last 5 todos */}
              {todos.slice(0, 5).map((todo) => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {todo.title}
                  <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoListWidget;
