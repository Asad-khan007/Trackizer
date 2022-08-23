import React, {Component} from 'react';
import {SIGNUP, LOGIN, LOGOUT} from '../constants';

class AuthAction extends React.Component {
  static Signup(data) {
    return {type: SIGNUP, payload: data};
  }

  static Loginin(data) {
    return {type: LOGIN, payload: data};
  }

  static Logout() {
    return {type: LOGOUT};
  }
}

export default AuthAction;
