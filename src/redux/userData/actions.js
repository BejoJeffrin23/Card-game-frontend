const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_DATA_SET: 'LOGIN_DATA_SET',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_DATA_REMOVAL:'LOGOUT_DATA_REMOVAL',
  LOGOUT_ERR: 'LOGOUT_ERR',

  CARD_DATA_SET:'CARD_DATA_SET',
  CARD_DATA_REMOVAL :'CARD_DATA_REMOVAL',

  cardDataSet: data => {
    return {
      type: actions.CARD_DATA_SET,
      data,
    };
  },

  cardDataRemoval:()=>{
    return{
      type:actions.CARD_DATA_REMOVAL
    }
  },

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: data => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginDataSet: data => {
    return {
      type: actions.LOGIN_DATA_SET,
      data,
    };
  },

  loginErr: err => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutDataRemoval:()=>{
    return{
      type:actions.LOGOUT_DATA_REMOVAL
    }
  },

  logoutSuccess: data => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: err => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },
};

export default actions;
