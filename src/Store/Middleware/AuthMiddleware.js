import React, {Component} from 'react';
import Auth from '@react-native-firebase/auth';
import LoadingAction from '../Actions/LoadingAction';
import AuthAction from '../Actions/AuthAction';
import {NavigationServices} from '../../Config';
import {CommonActions} from '@react-navigation/native';
import {Alert} from '../../Components';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastError, ToastSuccess} from '../../config/Common';
import AppAction from '../Actions/AppAction';

class AuthMiddleware extends Component {
  constructor(props) {
    super(props);
  }

  static SignUp({email, password, callback}) {
    return async dispatch => {
      dispatch(LoadingAction.LoadingTrue());
      try {
        let res = await Auth().createUserWithEmailAndPassword(email, password);
        console.log('on signup =====', res);
        if (res.user) {
          dispatch(LoadingAction.LoadingFalse());
          dispatch(AuthAction.Signup(res.user.uid));
          callback(res.user);
          Toast.show({
            text1: 'Sign in Successfully',
            type: 'success',
            visibilityTime: 3000,
          });
        } else console.warn('response', res.user);
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          Toast.show({
            text1: 'That email address is already in use!',
            type: 'error',
            visibilityTime: 3000,
          });
        }
        dispatch(LoadingAction.LoadingFalse());
        callback(e.message);
      }
    };
  }

  static LogoutUser({callback}) {
    return async dispatch => {
      dispatch(LoadingAction.LoadingTrue());
      try {
        await Auth()
          .signOut()
          .then(res => {
            dispatch(LoadingAction.LoadingFalse());
            dispatch(AuthAction.Logout());
            callback(res);
          })
          .catch(err => {
            dispatch(LoadingAction.LoadingFalse());
            callback(err.message);
            dispatch(AppAction.ClearData());
          });
      } catch (e) {
        console.log('erorrrr =======', e);
        dispatch(LoadingAction.LoadingFalse());
        console.warn('error', e);
      }
    };
  }

  static Login({callback, email, password}) {
    return async dispatch => {
      dispatch(LoadingAction.LoadingTrue());
      try {
        let res = await Auth().signInWithEmailAndPassword(email, password);
        // console.warn('User Sign in success', res.user.uid);
        dispatch(AuthAction.Loginin(res.user.uid));
        dispatch(LoadingAction.LoadingFalse());
        callback(res.user);
        Toast.show({
          text1: 'User Login successfully',
          type: 'success',
          visibilityTime: 3000,
        });
      } catch (e) {
        console.log('erorr =======', e.message);
        if (e.code === 'auth/invalid-email') {
          Toast.show({
            text1: 'That email address is invalid!',
            type: 'error',
            visibilityTime: 3000,
          });
        } else if (e.code === 'auth/user-not-found') {
          Toast.show({
            text1: 'There is no existing user record.',
            type: 'error',
            visibilityTime: 3000,
          });
        }
        callback(e);
        dispatch(LoadingAction.LoadingFalse());
      }
    };
  }
}
export default AuthMiddleware;
