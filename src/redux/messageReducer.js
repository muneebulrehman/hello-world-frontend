const GET_GREETING = 'GET_GREETING';

const initialState = {
  message: ''
};

const getGreeting = (payload) => {
  return {
    type: GET_GREETING,
    payload
  };
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/v1/message');
  const data = await response.json();
  dispatch(getGreeting(data.message));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
