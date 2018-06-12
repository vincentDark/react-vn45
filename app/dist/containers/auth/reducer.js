const originwithStyle = {
  auth: false,
  fetched: false,
  token: '',
  data: {
    account: '',
    name: '',
    nickname: '',
    phone: '',
    email: '',
    credit: 0,
    status: '',
    appType: '',
    appSn: '',
    hasWithdraw: false,
    phoneAuth: false,
    depositCount: 0,
    withdrawCount: 0
  }
};

export default function(store = originwithStyle, action) {
  const { type } = action;
  let auth;
  switch (type) {
    case 'TOKEN_SAVE':
      return {
        ...store,
        token: action.data.csrf_token
      };
      break;

    case 'AUTH_SAVE':
      let { data } = action;
      let { errorCode } = data;
      if (errorCode !== '0') {
        return {
          ...store,
          auth: false
        };
      }
      return {
        ...store,
        auth: true,
        data: data.data
      };
      break;

    case 'LOGIN_SAVE':
      action.data.errorCode == 0 ? (auth = true) : (auth = false);

      return {
        ...store,
        auth: auth,
        fetched: action.data
      };
      break;

    default:
      return store;
      break;
  }
}
