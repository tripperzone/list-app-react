import React from "react";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

export default function App() {

  const store = configureStore();
 

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}
