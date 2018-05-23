import view from "./App";
import BallsState from "./reducer/BallsState";
import getCsrf from "./reducer/token";
import Saga from './saga';


export default {
    reducer:{
        BallsState: BallsState,
        csrf: getCsrf
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
        },
    ],
    subscribe: Saga
};

