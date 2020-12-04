import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { todoModified, todoRemoved } from '../store/todos';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.list);

  return (
    <ul style={{ marginTop: "16px" }}>
      {todos.map((todo, index) => (
        <li style={{ marginBottom: "2px" }} key={index} data-id={todo.id}>
          <input
            type="text"
            aria-label="list-input"
            value={todo.text}
            onChange={(e) => dispatch(todoModified({ id: todo.id, text: e.target.value }))}
          />
          <button className='deleteBtn' onClick={() => dispatch(todoRemoved({ id: todo.id }))}>DELETE TODO</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;