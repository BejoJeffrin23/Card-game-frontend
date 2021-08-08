import Cookies from 'js-cookie';
import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr,loginDataSet,logoutDataRemoval,cardDataSet,cardDataRemoval } = actions;

const login = (userData) => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      dispatch(loginDataSet(userData))
      setTimeout(() => {
        Cookies.set('logedIn', true);
        return dispatch(loginSuccess(true));
      }, 1000);
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const cardSet=(cardData) => {
  return async dispatch => {
    try {
      dispatch(cardDataSet(cardData))
     
    } catch (err) {
    };
    }
  };


const cardRemove = () => {
  return async dispatch => {
    try {
      dispatch(cardDataRemoval())
      
    } catch (err) {
     
    }
  };
};


const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      dispatch(logoutDataRemoval())
      Cookies.remove('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut,cardRemove,cardSet };
