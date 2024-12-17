const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];


// for文の場合
for (let i=0; i<holidays.length; i++){
  console.log(holidays[i]);
}

// 疑問1 ここでiをコンソールに表示させるとエラーになるのはなぜ？
// console.log(i);

// while文の場合

// 疑問2 10行目のコンソール表示はエラーになるのに18行目以降のiへのアクセスはエラーにならないのはなぜ？

// 疑問3 iがもし有効なら再定義(17行目コメントアウトを解除)してもエラーにならないのはなぜ？
// let i;
i = 0;
while (i<holidays.length){
  console.log(holidays[i]);
  i++;
}