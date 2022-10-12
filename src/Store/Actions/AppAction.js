import React, {Component} from 'react';
import {CLEAR_DATA, GET_DATA, SET_DATA} from '../constants';

class AppAction extends Component {
  static GetData(data) {
    return {type: GET_DATA, payload: data};
  }

  static SetData(data) {
    return {type: SET_DATA, payload: data};
  }

  static ClearData(data) {
    return {type: CLEAR_DATA};
  }
}

export default AppAction;
