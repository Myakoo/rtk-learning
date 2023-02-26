import { createSlice } from '@reduxjs/toolkit';
import short from 'short-uuid';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [{id: '1',  text: 'Learn Redux', completed: false}],
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push({ id: short.generate(), text: action.payload.text, completed: false });
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
		},
		toggleTodo(state, action) {
			const currentTodo = state.todos.find(todo => todo.id === action.payload.id);
			currentTodo.completed = !currentTodo.completed;
		},
	},
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
