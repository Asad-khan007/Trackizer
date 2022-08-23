import React from 'react';
import {LOADING_FALSE, LOADING_TRUE} from '../constants';

class LoadingAction extends React.Component {
  static LoadingTrue() {
    return {
      type: LOADING_TRUE,
    };
  }

  static LoadingFalse() {
    return {
      type: LOADING_FALSE,
    };
  }
}

export default LoadingAction;
