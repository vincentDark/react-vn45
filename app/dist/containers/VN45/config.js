import view from "./App";
import Reducer from "./reducer";

export default {
    reducer:{
        ballChecked: Reducer
    },
    router: [{
        path: '/vn45/:star/:type',
        component: view
    }]
};

