const routerMiddleware = (store, routerParams) => (
  render,
  redirectTo,
  asyncRedirectTo
) => {
  //從 store.account 中取得已登入的狀態
  const isLoggedIn = store.getState()['member'].auth;
  console.log('isLoggedIn :');
  console.log(isLoggedIn);
  //已登入，渲染畫面
  if (isLoggedIn) return render();

  //未登入，發送 api
  fetch('http://sb51a-w.lucky588.net/user/page-info', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => {
      /* api說已經登入了 */
      console.log('data.errorCode :');
      console.log(data.errorCode);
      if (data.errorCode == 0) {
        console.log('data :');
        console.log(data);
        /* 紀錄登入資訊之類的處理 */
        store.dispatch({ type: 'AUTH_SAVE', data });
        // 從 routerParams 拿路徑名稱判斷是否在登入頁
        if (routerParams.path === '/login') asyncRedirectTo('/vn45/2/S');
        /* 導向投注頁 */ else asyncRedirectTo('/bet-order'); /* 導向目前頁面 */
      } else {
        /* api說沒登入，導向登入頁 */
        asyncRedirectTo('/login');
      }
    })
    .catch(err => {
      console.log('err :');
      console.log(err);
      /* 錯誤處理 */
      asyncRedirectTo('/error');
    });

  // 等待ajax回傳的時候要顯示的內容，沒有就回傳null(為了防止頁面跳錯)
  return null;
};

export default routerMiddleware;
