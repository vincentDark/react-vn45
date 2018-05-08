export function chooseBall(ball) {
    return{
        type: 'CHOOSE_BALL',
        ball: ball,
    }
}

export function clearAllBall() {
    return {
        type: 'CLEAR_ALL'
    }
}

export function fastChoose(star, end, jump) {
    return{
        type: 'FAST_CHOOSE',
        star: star,
        end: end,
        jump: jump
    }
}

export function randomChoose(amount) {
    return{
        type: 'RANDOM_BALL',
        amount: amount,
    }
}
