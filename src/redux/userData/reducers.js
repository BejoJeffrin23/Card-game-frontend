import Cookies from 'js-cookie';
import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR,CARD_DATA_SET,CARD_DATA_REMOVAL ,LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR,LOGIN_DATA_SET,LOGOUT_DATA_REMOVAL } = actions;

const initState = {
  login: Cookies.get('logedIn'),
  loading: false,
  error: null,
  userData:null,
  cardData:null
};

/**
 *
 * @todo impure state mutation/explaination
 */
const userReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
      case LOGIN_DATA_SET:
      return {
        ...state,
        userData: data,
        loading: false,
      };  
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
     case LOGOUT_SUCCESS:
        return {
          ...state,
          login: data,
          loading: false,
        };
    case LOGOUT_DATA_REMOVAL:
      return {
        ...state,
        userData:null,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case CARD_DATA_SET:
        return {
          ...state,
          cardData: data,
        };
      case CARD_DATA_REMOVAL:
          return {
            ...state,
            cardData: null,
          };     
    default:
      return state;
  }
};
export default userReducer;
