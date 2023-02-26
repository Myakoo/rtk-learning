import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';

function TodoItem({todo}) {
	const dispatch = useDispatch();

	return (
		<li
			className='flex w-[310px] items-center bg-[#a8dadc] border-solid border-[#457b9d] border-2 rounded-[8px] my-[16px] p-[8px]'
			key={todo.id}
		>
			<input
				className='mr-[16px]'
				type='checkbox'
				onChange={() => dispatch(toggleTodo({ id: todo.id }))}
			/>
			<p>{todo.text}</p>
			<button onClick={() => dispatch(deleteTodo({ id: todo.id }))} className='ml-[16px]'>
				❌
			</button>
		</li>
	);
}

export default TodoItem