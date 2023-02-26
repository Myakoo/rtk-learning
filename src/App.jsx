import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store/todoSlice';

function App() {
	const todos = useSelector(state => state.todos.todos);
	const dispatch = useDispatch();

	const [todoText, setTodoText] = useState('');

	return (
		<>
			<div>
				<label>
					<input
						onChange={e => setTodoText(e.target.value)}
						value={todoText}
						type='text'
						placeholder='Write Todo'
					/>
					<button
						onClick={() => {
							dispatch(addTodo({ text: todoText }));
							setTodoText('');
						}}
					>
						Add Todo
					</button>
				</label>
			</div>
			<div>
				<ul>
					{todos.map(todo => (
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
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
