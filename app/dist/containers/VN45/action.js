import { fetchAPI } from '~/core/action/effects';

// 左邊球號
export function clearAllBall() {
    return {
        type: 'CLEAR_ALL'
    }
}

export function chooseBall(star, end, jump, type = 'SE') {
    return{
        type: 'CHOOSE_BALL',
        star: star,
        end: end,
        jump: jump,
        gameType: type
    }
}

export function randomChoose(amount) {
    return{
        type: 'RANDOM_BALL',
        amount: amount,
    }
}

// 柱碰部分
export function chooseColumn(column) {
    return{
        type: 'CHOOSE_COLUMN',
        column: column,
    }
}

export function fetch() {
  return fetchAPI('GET_CSRF_TOKEN', {
    url: 'http://sb_w_user.sex/test-csrf'
  });
}

export function login(payload, csrf) {
  return fetchAPI('LOG_IN', {
    url: 'http://sb_w_user.sex/login',
    method: 'post',
    body: payload,
    csrf: csrf,
  });
}

export function save(items) {
  return {
    type: 'TOKEN_SAVE',
    payload: {
      items
    }
  };
}
