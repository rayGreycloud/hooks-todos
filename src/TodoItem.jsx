import React from 'react';

const itemStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '60%',
  padding: '20px',
};

const TodoItem = ({ id, completed, text }) => (
  <div key={id} style={itemStyles}>
    <input type="checkbox" checked={completed} />
    <input type="text" defaultValue={text} />
    <button>- Delete</button>
  </div>
);

export default TodoItem;
