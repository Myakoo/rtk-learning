import { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {

	const [todoText, setTodoText] = useState('');

	return (
		<>
			<TodoInput setText={setTodoText} text={todoText} />
			<TodoList />
		</>
	);
}

export default App;
