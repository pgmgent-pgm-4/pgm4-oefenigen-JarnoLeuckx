import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TextField
        label="Add Todo"
        variant="outlined"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
               
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoApp;
