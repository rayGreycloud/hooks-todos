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
      return state;
  }
};

export default appReducer;
