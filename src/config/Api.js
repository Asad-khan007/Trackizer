import Axios from 'axios';
var baseUrl = 'https://api.covidtracking.com/v1/';

Axios.interceptors.response.use(
  response => {
    return response;
  },
  async ({response, ...rest}) => {
    if (response.status == 401) {
      try {
        console.log(response, '====Response====');
        // let {
        //   AuthReducer: {
        //     user: {refreshToken},
        //   },
        // } = store.getState();
        // store.dispatch(
        //   AuthMiddleware.RefreshToken({
        //     refreshToken,
        //     callback: token => {
        //       rest.config.headers.Authorization = 'Bearer ' + token;
        //       Axios(rest.config);
        //     },
        //   }),
        // );
        // // });
      } catch (err) {
        console.log('Error= ===', err);
      }
    }
    return response;
  },
);

export default class ApiCaller {
  static Get = (url = '', customUrl = '', headers = {}) => {
    return Axios.get(customUrl ? customUrl : `${baseUrl}${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Post = (endPoint = '', body = {}, headers = {}) => {
    return Axios.post(`${baseUrl}${endPoint}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Put = (url = '', body = {}, headers = {}) => {
    return Axios.put(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Delete = (url = '', body = {}, headers = {}) => {
    return Axios.delete(`${baseUrl}${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
      data: body,
    })
      .then(res => res)
      .catch(err => err.response);
  };
}
