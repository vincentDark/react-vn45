export default function(state = false, action) {
  const { type } = action;
  switch (type) {
    case 'PING':
      return true;
      break;

    case 'PONG':
      return false;
      break;
    case 'FETCH_USER_FULFILLED':
      return action;
    default:
      return state;
      break;
  }
}
