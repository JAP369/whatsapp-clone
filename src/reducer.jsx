//how data layer looks and starft off user null
export const initialState = {
  user: null,
};
// push action (info )to the data layer
export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
