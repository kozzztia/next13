import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoType = {id: string , task:string , isDone: boolean}

type TodosState = {
    todos : TodoType[] | []
};

const initialState = {
    todos : [
        {id:'0' , task: "test0" , isDone: true},
        {id:'1' , task: "test1" , isDone: false},
        {id:'2' , task: "test2" , isDone: false},
        {id:'3' , task: "test3" , isDone: false},
    ]
} as TodosState;

export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        changeIsDone: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.todos = state.todos.map(item => item.id === action.payload?{id : item.id , task : item.task , isDone : !item.isDone} : item )
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    changeIsDone
} = todos.actions;
export default todos.reducer;