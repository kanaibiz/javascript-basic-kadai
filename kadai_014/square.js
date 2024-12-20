const squared = (num) => {
  let squaredNum = num*num;
  return squaredNum;
}

let inputNum = 10;
let answer = squared(inputNum);
console.log("入力した値："+inputNum+"\n二乗した値："+answer);