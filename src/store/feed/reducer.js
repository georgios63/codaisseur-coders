const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "feed/postsFetched": {
      console.log("feed action", action);
      return {
        loading: false,
        posts: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
