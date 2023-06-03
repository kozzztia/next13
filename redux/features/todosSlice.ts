import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoType = {id: string , task:string , isDone: boolean}

type TodosState = {
    todos : TodoType[] | []
};

const initialState = {
    todos : []
} as TodosState;

export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{id: string , task:string , isDone: boolean}>) => {
            state.todos.push(action.payload);
        },
    },
});

export const {
    addTodo
} = todos.actions;
export default todos.reducer;