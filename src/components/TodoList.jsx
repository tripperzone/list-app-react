import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { todoModified, todoRemoved } from '../store/todos';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.list);

  return (
    <div style={{ marginTop: "16px" }}>
      {todos.map((todo, index) => (
        <div style={{ marginBottom: "2px" }} key={index}>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => dispatch(todoModified({ id: todo.id, text: e.target.value }))}
          />
          <button onClick={() => dispatch(todoRemoved({ id: todo.id }))}>DELETE TODO</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;