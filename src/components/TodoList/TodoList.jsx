import React from 'react';
import { useSelector} from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
	const todos = useSelector(state => state.todos.todos);

	return (
		<ul className='w-[310px]'>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}

export default TodoList;
