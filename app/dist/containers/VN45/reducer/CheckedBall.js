export default function(state = [], action) {
    const { type } = action;
    switch (type) {
        case 'CHOOSE_BALL':
            const { ball } = action;
            let newState
            if (ball > 45 || ball < 1) return state
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

        case 'CLEAR_ALL':
            return []
            break;

        case 'RANDOM_BALL':
            const { amount } = action;
            if (amount > 45) return state
            
            let allNumber = Array(45).fill(0).map((val, index) => (index+1))
            let random
            let choose = 0
            let newRandomState = []
            while (choose != amount) {
                random = ((Math.random()*(45 - choose)) >>> 0) + choose
                newRandomState.push(allNumber[random]);
                [allNumber[choose], allNumber[random]] = [allNumber[random], allNumber[choose]]
                choose++
            }
            return newRandomState
            break;

        case 'FAST_CHOOSE':
            let { star, end, jump } = action
            let targetArr = []
            for (let i = star; i <= end; i+=jump) {
                targetArr.push(i)                
            }
            let haveAll = targetArr.every((item)=>{
                return state.includes(item)
            })
            let newBalls
            if (haveAll) {
                newBalls = state.filter((item)=>{
                    return !targetArr.includes(item)
                })
            }else{
                let temp = targetArr.filter((item)=>{
                    return !state.includes(item)
                })
                newBalls = [...state, ...temp]
            }
            return newBalls
            break;

        default:
            return state
            break;
    }
};