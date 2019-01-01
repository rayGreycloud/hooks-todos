import React, { useContext } from 'react';

import DispatchContext from '../contexts/DispatchContext';

const itemStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '60%',
  padding: '20px',
};

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div key={id} style={itemStyles}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch({
            type: 'completed',
            payload: id,
          })
        }
      />
      <input type="text" defaultValue={text} />
      <button
        onClick={() =>
          dispatch({
            type: 'delete',
            payload: id,
          })
        }
      >
        - Delete
      </button>
    </div>
  );
};

export default TodoItem;
