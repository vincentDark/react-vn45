import view from "./App";
import BallChecked from "./reducer/CheckedBall";

export default {
    reducer:{
        ballChecked: BallChecked,
        open: BallChecked
    },
    router: [{
        path: '/vn45/:star/:type',
        component: view
    }]
};

