import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import filtersSlice from './features/filters/filtersSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersSlice
    }
})

export default store;
