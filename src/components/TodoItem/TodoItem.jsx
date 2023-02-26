import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';

function TodoItem({todo}) {
	const dispatch = useDispatch();

	return (
		<li className='flex align-middle' key={todo.id}>
			<input
				className='mr-[16px]'
				type='checkbox'
				onChange={() => dispatch(toggleTodo({ id: todo.id }))}
			/>
			<span>Todo: {todo.text}</span>
			<button onClick={() => dispatch(deleteTodo({ id: todo.id }))} className='ml-[16px]'>
				X
			</button>
		</li>
	);
}

export default TodoItem