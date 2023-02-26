import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import '../../index.css'

function TodoInput({setText, text}) {
	const dispatch = useDispatch();

	return (
		<div className='p-[12px] rounded-[8px] border-solid border-[#457b9d] border-2 bg-[#a8dadc] flex justify-center'>
			<label>
				<input
					className='h-[32px] rounded-[4px] p-[4px] text-[#212529] mr-[12px]'
					onChange={e => setText(e.target.value)}
					value={text}
					type='text'
					placeholder='Write Todo'
				/>
				<button
					className='bg-[#457b9d] py-[3px] px-[6px] rounded-[4px] text-[white] hover:bg-[#587e96]'
					onClick={() => {
						dispatch(addTodo({ text }));
						setText('');
					}}
				>
					Add Todo
				</button>
			</label>
		</div>
	);
}

export default TodoInput;
