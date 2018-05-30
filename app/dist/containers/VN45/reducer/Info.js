const originStore = {
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

export default function (store = originStore, action) {
    const { type } = action;
    switch (type) {
        case 'TOKEN_SAVE':
            return {
                ...store,
                token: action.payload.csrf_token
            };
            break;
    
        case 'AUTH_SAVE':
            let { payload } = action;
            let { errorCode } = action.payload
            let auth = false
            if (errorCode == -3 || errorCode == 0) {
                auth = true
            }
            return {
                ...store,
                auth: auth,
                fetched: payload
            };
            break;
    
        default:
            return store;
            break;
    }
    
};