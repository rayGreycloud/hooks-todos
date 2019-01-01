const appReducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return action.payload;

    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: Date.now().toString(),
          complete: false,
        },
      ];

    case 'delete':
      return state.filter(item => item.id !== action.payload);

    case 'completed':
      return state.map(item => {
        // toggle completed
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      });

    default:
      return state;
  }
};

export default appReducer;
