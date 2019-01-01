import React, { createContext, useReducer } from 'react';

import TodosList from './TodosList';
import appReducer from '../reducers/appReducer';

import '../styles/App.css';

const Context = createContext();

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <Context.Provider value={dispatch}>
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
    </Context.Provider>
  );
};

export default App;
