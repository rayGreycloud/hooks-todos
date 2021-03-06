import React, { useEffect, useReducer } from 'react';

import TodosList from './TodosList';
import appReducer from '../reducers/appReducer';
import DispatchContext from '../contexts/DispatchContext';

import '../styles/App.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    const rawData = localStorage.getItem('data');
    dispatch({
      type: 'reset',
      payload: JSON.parse(rawData),
    });
  }, []);

  useEffect(
    () => {
      localStorage.setItem('data', JSON.stringify(state));
    },
    [state],
  );

  return (
    <DispatchContext.Provider value={dispatch}>
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
    </DispatchContext.Provider>
  );
};

export default App;
