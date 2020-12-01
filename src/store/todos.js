import { createSlice } from "@reduxjs/toolkit";

export let count = 0;

const slice = createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        todoAdded: (todos, action) => {
            count++;
            todos.list.push({id: count, text: action.payload.text });
        },
        todoRemoved: (todos, action) => {
            const index = todos.list.findIndex(todo => todo.id === action.payload.id);
            todos.list.splice(index, 1);
        },
        todoModified: (todos, action) => {
            const index = todos.list.findIndex(todo => todo.id === action.payload.id);
            todos.list[index].text = action.payload.text;
        }
    }
});

export const { 
    todoAdded, 
    todoRemoved, 
    todoModified
} = slice.actions;

export default slice.reducer;