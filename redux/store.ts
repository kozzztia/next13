import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todosReducer from "./features/todosSlice";
export const store = configureStore({
    reducer: {
        counterReducer,
        todosReducer,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;