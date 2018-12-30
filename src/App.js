import React, { useReducer } from 'react';
import './App.css';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          complete: false,
        },
      ];

    default:
      break;
  }
};

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
      {state.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};

export default App;
