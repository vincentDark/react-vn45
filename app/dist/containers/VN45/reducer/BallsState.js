export default function(
  state: { CheckedBall: Array, nowColum: number, ColumBalls: Array } = {
    CheckedBall: [],
    nowColum: 0,
    ColumBalls: [[], []]
  },
  action
) {
  const { type, gameType } = action;
  switch (type) {
    case 'CHOOSE_BALL':
      let { star, end, jump } = action;
      let checkedBalls = [...state.CheckedBall];

      // 要加入的所有球
      let targetArr = [];
      for (let i = star; i <= end; i += jump) {
        targetArr.push(i);
      }
      // 判斷是否被全選
      let haveAll = targetArr.every(item => {
        return checkedBalls.includes(item);
      });
      let newColum = state.nowColum;
      let newColumBalls = [...state.ColumBalls];
      // 沒有被全選則把剩下的選起來  反之亦然
      if (haveAll) {
        // 移除有被選取的(球)
        checkedBalls = checkedBalls.filter(item => {
          return !targetArr.includes(item);
        });
        // 如果是柱碰-移除每柱所包含的數字  並記錄最後一個被移除柱數
        if (gameType == 'C') {
          newColumBalls = newColumBalls.map((item, index) => {
            let oneColumn = item.filter(ball => {
              if (targetArr.includes(ball)) {
                newColum = index;
              }
              return !targetArr.includes(ball);
            });
            return oneColumn;
          });
        }
      } else {
        // 把沒被選過的加入
        let temp = targetArr.filter(item => {
          return !checkedBalls.includes(item);
        });
        checkedBalls = [...checkedBalls, ...temp];
        // 如果是柱碰 - 把被加入的加入到當前柱 ＆＆  判斷是否所有柱都有選取
        if (gameType == 'C') {
          newColumBalls[newColum] = [...newColumBalls[newColum], ...temp];

          let allColumnHaveBall = newColumBalls.every(
            item => item.length !== 0
          );
          allColumnHaveBall == true &&
            (newColumBalls = [...newColumBalls, Array()]);
        }
      }
      return {
        CheckedBall: checkedBalls,
        nowColum: newColum,
        ColumBalls: newColumBalls
      };
      break;
    case 'CLEAR_ALL':
      return {
        CheckedBall: [],
        nowColum: 0,
        ColumBalls: [[], []]
      };
      break;

    case 'RANDOM_BALL':
      const { amount } = action;
      if (amount > 45) return state;

      let allNumber = Array(45)
        .fill(0)
        .map((val, index) => index + 1);
      let random;
      let choose = 0;
      let newRandomState = [];
      while (choose != amount) {
        random = ((Math.random() * (45 - choose)) >>> 0) + choose;
        newRandomState.push(allNumber[random]);
        [allNumber[choose], allNumber[random]] = [
          allNumber[random],
          allNumber[choose]
        ];
        choose++;
      }
      return {
        CheckedBall: newRandomState,
        nowColum: state.nowColum,
        ColumBalls: state.ColumBalls
      };
      break;

    case 'CHOOSE_COLUMN':
      let { column } = action;
      let tempColum = [...state.ColumBalls];
      while (tempColum[column] === undefined) {
        tempColum = [...tempColum, Array()];
      }
      return {
        CheckedBall: state.CheckedBall,
        nowColum: column,
        ColumBalls: tempColum
      };
      break;

    default:
      return state;
      break;
  }
}
