import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ items }) =>
  items.map(item => <TodoItem key={item.id} {...item} />);

export default TodosList;
