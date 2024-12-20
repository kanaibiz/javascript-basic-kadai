const todaysDate = new Date();

const yearNow = todaysDate.getFullYear();
const monthNow = todaysDate.getMonth()+1;
const dateNow = todaysDate.getDate();

console.log(yearNow+"年"+ monthNow +"月"+dateNow+"日");