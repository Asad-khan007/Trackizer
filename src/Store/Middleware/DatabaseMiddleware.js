import React from 'react';
import LoadingAction from '../Actions/LoadingAction';
import AppAction from '../Actions/AppAction';
import ApiCaller from '../../config/Api';

class DatabaseMiddleware extends React.Component {
  constructor(props) {
    super(props);
  }

  static GetData({callback}) {
    return async dispatch => {
      dispatch(LoadingAction.LoadingTrue());
      try {
        let res = await ApiCaller.Get('states/ca/current.json');
        console.log('response =====', res);
        if (res.status == 200) {
          // let data = JSON.parse(res);
          dispatch(AppAction.GetData(res));
          dispatch(LoadingAction.LoadingFalse());
          callback(res);
        } else console.warn('error======', res);
        dispatch(LoadingAction.LoadingFalse());
      } catch (e) {
        console.log('erorrrr =======', e);
        dispatch(LoadingAction.LoadingFalse());
        callback(e.message);
      }
    };
  }

  //   static LogoutUser({callback}) {
  //     return async dispatch => {
  //       dispatch(LoadingAction.LoadingTrue());
  //       try {
  //         await Auth()
  //           .signOut()
  //           .then(res => {
  //             dispatch(LoadingAction.LoadingFalse());
  //             dispatch(AuthAction.Logout());
  //             callback(res);
  //           })
  //           .catch(err => {
  //             dispatch(LoadingAction.LoadingFalse());
  //             callback(err.message);
  //           });
  //       } catch (e) {
  //         console.log('erorrrr =======', e);
  //         dispatch(LoadingAction.LoadingFalse());
  //         console.warn('error', e);
  //       }
  //     };
  //   }

  //   // static getStories({callback}) {
  //   //   return asyun dispatch => {
  //   //     dispatch(LoadingAction.LoadingTrue());
  //   //     try {

  //   //     } catch (error) {

  //   //     }
  //   //   }
  //   // }

  //   static Login({callback, email, password}) {
  //     return async dispatch => {
  //       dispatch(LoadingAction.LoadingTrue());
  //       try {
  //         let res = await Auth().signInWithEmailAndPassword(email, password);
  //         // console.warn('User Sign in success', res.user.uid);
  //         dispatch(AuthAction.Loginin(res.user.uid));
  //         dispatch(LoadingAction.LoadingFalse());
  //         callback(res.user);
  //         Toast.show({
  //           text1: 'User Login successfully',
  //           type: 'success',
  //           visibilityTime: 3000,
  //         });
  //       } catch (e) {
  //         console.log('erorr =======', e.message);
  //         callback(e);
  //         dispatch(LoadingAction.LoadingFalse());
  //         Toast.show({
  //           text1: e.message,
  //           type: 'error',
  //           visibilityTime: 3000,
  //         });
  //       }
  //     };
  //   }
}
export default DatabaseMiddleware;
