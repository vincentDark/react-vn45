// 左邊球號

export function clearAllBall() {
    return {
        type: 'CLEAR_ALL'
    }
}

export function chooseBall(star, end, jump, type = 'SE') {
    return{
        type: 'CHOOSE_BALL',
        star: star,
        end: end,
        jump: jump,
        gameType: type
    }
}

export function randomChoose(amount) {
    return{
        type: 'RANDOM_BALL',
        amount: amount,
    }
}

// 柱碰部分
export function chooseColumn(column) {
    return{
        type: 'CHOOSE_COLUMN',
        column: column,
    }
}
