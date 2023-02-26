import { useState } from 'react';

function App() {
	const [todoText, setTodoText] = useState('');
	const [todos, setTodos] = useState([]);

	const handleClick = () => {
		console.log(todoText);

		setTodos([...todos, { id: new Date().toISOString(), text: todoText, completed: false }]);
		setTodoText('');
	};

	const handleDelete = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const handleToggle = id => {
		const currentTodo = todos.find(todo => todo.id === id);
		currentTodo.completed = !currentTodo.completed;
	};

	return (
		<>
			<div>
				<label>
					<input onChange={e => setTodoText(e.target.value)} type='text' placeholder='Write Todo' />
					<button onClick={() => handleClick()}>Add Todo</button>
				</label>
			</div>
			<div>
				<ul>
					{todos.map(todo => (
						<li className='flex align-middle' key={todo.id}>
							<input
								className='mr-[16px]'
								type='checkbox'
								onChange={() => handleToggle(todo.id)}
							/>
							<span>Todo: {todo.text}</span>
							<button onClick={() => handleDelete(todo.id)} className='ml-[16px]'>
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
