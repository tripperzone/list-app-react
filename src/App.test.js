import React from "react";
import { render, fireEvent } from '@testing-library/react';

import App from './App';

const setup = () => {
    const utils = render(<App />);
    const input = utils.getByLabelText('todo-input');
    const title = utils.getByText(/TODO List/i);
    const addButton = utils.getByText(/Add New Todo/i);

    return {
      input,
      title,
      addButton,
      ...utils,
    }
};

describe("<App />", () => {
    it("Renders <App /> component correctly", () => {
      const { title, addButton } = setup();
      expect(title).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
    });
});

describe("<TodoForm />", () => {
    it("Should allow user input", () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'abc' } });
        expect(input.value).toBe('abc');
    });

    it("Should render a todo element when clicking on -Add New Todo-", () => {
        const { input, addButton, ...utils } = setup();
        fireEvent.change(input, { target: { value: 'abc' } });
        fireEvent.click(addButton);
        const firstLi = utils.container.querySelector('li[data-id="1"]');
        const firstTodo = utils.container.querySelector('li[data-id="1"] > input');
        expect(firstLi).toBeInTheDocument();
        expect(firstTodo.value).toBe('abc');
    });

    it("Should not render a todo element when clicking on -Add New Todo- if input is empty", () => {
        const { input, addButton, ...utils } = setup();
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(addButton);
        const todoList = utils.container.querySelector('ul');
        expect(todoList).toBeEmptyDOMElement();
    });

    it("Should change the text of the new todo input to blank", () => {
        const { input, addButton } = setup();
        fireEvent.change(input, { target: { value: 'abc' } });
        fireEvent.click(addButton);
        expect(input.value).toBe("");
    });
});

describe("<TodoList />", () => {
    it("Should delete a todo element when clicking on DELETE TODO", () => {
        const { input, addButton, ...utils } = setup();
        fireEvent.change(input, { target: { value: 'abc' } });
        fireEvent.click(addButton);
        const deleteButton = utils.container.querySelector('.deleteBtn');
        fireEvent.click(deleteButton);
        const todoList = utils.container.querySelector('ul');
        expect(todoList).toBeEmptyDOMElement();
    });

    it("Should allow to modify text of a todo element on the list", () => {
        const { input, addButton, ...utils } = setup();
        fireEvent.change(input, { target: { value: 'abc' } });
        fireEvent.click(addButton);
        const firstTodo = utils.getByLabelText('list-input');
        fireEvent.change(firstTodo, { target: { value: 'abcd' } });
        expect(firstTodo.value).toBe('abcd');
    });

});