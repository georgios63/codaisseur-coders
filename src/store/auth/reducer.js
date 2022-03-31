const initialState = {
  me: null,
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/tokenReceived": {
      return {
        ...state,
        accessToken: action.payload.token,
      };
    }
    case "auth/meReceived": {
      return {
        ...state,
        me: action.payload.me,
      };
    }

    default: {
      return state;
    }
  }
}
