// redux/reducers/loaderReducer.js
const initialState = {
  loading: false,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_START':
      return { loading: true };
    case 'LOADING_END':
      return { loading: false };
    default:
      return state;
  }
};
