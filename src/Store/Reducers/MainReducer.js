import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_STORIES,
  VIEW_HIDE,
  VIEW,
  GET_DATA,
  SET_DATA,
  CLEAR_DATA,
} from '../constants.js';

const initialState = {
  user: null,
  country: '',
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        user: action.payload,
      };
      break;

    case SIGNUP:
      state = {
        ...state,
        user: action.payload,
      };
      break;

    case LOGOUT:
      state = {
        user: null,
        country: null,
      };
      break;

    case GET_DATA:
      state = {
        country: action.payload,
      };
      break;

    case SET_DATA:
      state = {
        ...state,
        country: action.payload,
      };
      break;

    case CLEAR_DATA:
      state = {
        state: null,
        country: null,
      };
      break;

    default:
      break;
  }
  return state;
}
