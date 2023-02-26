import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

function TodoInput({setText, text}) {
	const dispatch = useDispatch();

	return (
		<label>
			<input
				onChange={e => setText(e.target.value)}
				value={text}
				type='text'
				placeholder='Write Todo'
			/>
			<button
				onClick={() => {
					dispatch(addTodo({ text }));
					setText('');
				}}
			>
				Add Todo
			</button>
		</label>
	);
}

export default TodoInput;
