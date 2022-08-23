import React from 'react';
import Auth from '@react-native-firebase/auth';
import LoadingAction from '../Actions/LoadingAction';
import AuthAction from '../Actions/AuthAction';
import {NavigationServices} from '../../Config';
import {CommonActions} from '@react-navigation/native';
import {Alert} from '../../Components';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastError, ToastSuccess} from '../../config/Common';

class AuthMiddleware extends React.Component {
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
        console.log('erorrrr =======', e);
        dispatch(LoadingAction.LoadingFalse());
        Toast.show({
          text1: e.message,
          type: 'error',
          visibilityTime: 3000,
        });
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
          });
      } catch (e) {
        console.log('erorrrr =======', e);
        dispatch(LoadingAction.LoadingFalse());
        console.warn('error', e);
      }
    };
  }

  // static getStories({callback}) {
  //   return asyun dispatch => {
  //     dispatch(LoadingAction.LoadingTrue());
  //     try {

  //     } catch (error) {

  //     }
  //   }
  // }

  static Login({callback, email, password}) {
    return async dispatch => {
      dispatch(LoadingAction.LoadingTrue());
      try {
        let res = await Auth().signInWithEmailAndPassword(email, password);
        console.warn('User Sign in success', res.user.uid);
        dispatch(AuthAction.Loginin(res.user.uid));
        dispatch(LoadingAction.LoadingFalse());
        callback(res.user);
        console.log('User sign in success', res);
      } catch (e) {
        console.log('erorr =======', e.message);
        callback(e);
        dispatch(LoadingAction.LoadingFalse());
        console.warn('error', e.message);
      }
    };
  }
}
export default AuthMiddleware;
