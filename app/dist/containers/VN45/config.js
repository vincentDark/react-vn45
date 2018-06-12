import view from './App';
import BallsState from './reducer/BallsState';
import { getToken, loginEpic, getInfo } from './epic';

export default {
  reducer: {
    BallsState: BallsState
  },
  router: [
    {
      path: '/login',
      component: view
    },
    {
      path: '/vn45/:star/:type',
      component: view
    },
    {
      path: '/open-ball',
      component: view
    },
    {
      path: '/total-bet',
      component: view
    },
    {
      path: '/bet-order',
      component: view
    },
    {
      path: '/order-history',
      component: view
    },
    {
      path: '/page/member-info',
      component: view
    },
    {
      path: '/page/notice',
      component: view
    },
    {
      path: '/page/rule',
      component: view
    },
    {
      path: '/page/contact',
      component: view
    }
  ],
  epic: [getToken, loginEpic, getInfo]
};
