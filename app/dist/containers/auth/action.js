export function getToken() {
  return {
    type: 'GET_CSRF_TOKEN'
  };
}

export function getInfo() {
  return {
    type: 'GET_USER_INFO'
  };
}
