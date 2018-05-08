export default function(state = [], action) {
    const { type, ball } = action;
    switch (type) {
        case 'CHOOSE_BALL':
            let newState
            if (state.includes(ball)) {
                newState = state.filter((item,index)=>{
                    return item != ball
                })
            }else{
                newState = [...state]
                newState.push(ball)
            }
            return newState
            break;
    
        default:
            return state
            break;
    }
};