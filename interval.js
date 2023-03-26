
// i++ vs ++i

let num = 0;
const intervalID = setInterval(() => {
   console.log(++num)
   if(num === 10){
        clearInterval(intervalID);
   }
}, 1000);