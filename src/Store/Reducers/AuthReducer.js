import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_STORIES,
  VIEW_HIDE,
  VIEW,
} from '../constants.js';

const initialState = {
  user: null,
};

export default function AuthReducer(state = initialState, action) {
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
      };
      break;

    case VIEW_HIDE:
      state = {
        view: false,
      };

    case VIEW:
      state = {
        view: true,
      };

    default:
      break;
  }
  return state;
}
