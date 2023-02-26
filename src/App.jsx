import { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {

	const [todoText, setTodoText] = useState('');

	return (
		<div className='h-[100vh] flex justify-center items-center flex-col bg-[#f1faee]'>
			<TodoInput setText={setTodoText} text={todoText} />
			<TodoList />
		</div>
	);
}

export default App;
