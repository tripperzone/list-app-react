import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { todoAdded } from '../store/todos';

function TodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(todoAdded({text: value}));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        aria-label="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Add New Todo" />
    </form>
  );
}

export default TodoForm;