import {LOADING_FALSE, LOADING_TRUE} from '../constants';

const intialState = {
  loading: false,
};

export default function LoadingReducer(state = intialState, action) {
  switch (action.type) {
    case LOADING_FALSE:
      state = {
        loading: false,
      };
      break;

    case LOADING_TRUE:
      state = {
        loading: true,
      };
      break;

    default:
      break;
  }
  return state;
}
