import React, { useReducer } from 'react';

import TodosList from './TodosList';
import appReducer from './appReducer';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <div className="App">
      <header className="App-header">Todos App</header>
      <button
        onClick={() =>
          dispatch({
            type: 'add',
          })
        }
      >
        + Add Todo
      </button>
      <TodosList items={state} />
    </div>
  );
};

export default App;
