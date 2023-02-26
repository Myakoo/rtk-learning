import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './todoSlice';

export default configureStore({
	reducer: { todos: TodosReducer },
	devTools: true,
});
