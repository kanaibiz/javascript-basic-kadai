const squared = (num) => {
  let squaredNum = num*num;
  return squaredNum;
}

let inputNum;
let answer;

inputNum = 10;
answer = squared(inputNum);
console.log("入力した値："+inputNum+"\n二乗した値："+answer);

inputNum = 5;
answer = squared(inputNum);
console.log("入力した値："+inputNum+"\n二乗した値："+answer);