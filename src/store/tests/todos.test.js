import { todoAdded, todoRemoved, todoModified, count } from '../todos';
import configureStore from '../configureStore';

describe("todosSlice", () => {
    let store;

    beforeEach(() => {
        store = configureStore();
    });

    const todosSlice = () => store.getState().todos;

    describe("action creators", () => {

        it("should add the todo to the store", () => {
            const todo = { text: 'a' };
    
            store.dispatch(todoAdded(todo));
            const savedTodo = { ...todo, id:count };
    
            expect(todosSlice().list).toContainEqual(savedTodo);
        });
    
    
        it("should modify the text property of todo", () => {
            const todo = { text: 'a' };

            store.dispatch(todoAdded(todo));
            store.dispatch(todoModified({ id:count, text: 'b'}));
    
            expect(todosSlice().list[0].text).toBe('b');
        });

        it("should remove a todo from the list", () => {
            const todo = { text: 'a'};
            const todo2 = { text: 'b'};

            store.dispatch(todoAdded(todo));
            store.dispatch(todoAdded(todo2));
            store.dispatch(todoRemoved({ id: count }));

            expect(todosSlice().list).toHaveLength(1);
            expect(todosSlice().list[0].text).toBe('a');
        });
    
    });
});