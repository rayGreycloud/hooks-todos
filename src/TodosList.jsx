import React from 'react';

const TodoItem = ({ id }) => <div key={id}>{id}</div>;

const TodosList = ({ items }) =>
  items.map(item => <TodoItem key={item.id} {...item} />);

export default TodosList;
