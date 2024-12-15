const numCheck = (num) => {
  console.log(num + "の場合");
  if(num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
  }else if(num % 3 === 0){
    console.log("3の倍数です");
  }else if(num % 5 === 0){
    console.log("5の倍数です");
  }else{
    console.log(num);
  }
}

numCheck(9);

numCheck(20);

numCheck(15);

numCheck(1);

