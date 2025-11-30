const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); (isme apan number ko string convert kardege then string ki koi bhi property uspe laga sakte hai)
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); (ye roundoff kardega jitni digit tak apan chayege)


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); (ye numbers ko dollar ke hisab se comma(,) lagata hai or bracket mai en-IN karne se inr ke hisab se comma lagata hai )

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); (use for changing the sign)
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2));(roundoff karega to top ki value top=ceiling)
// console.log(Math.floor(4.9));(roundoff karega to minimum value min=floor )
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); 
//it generates a random number in between 0 to 1
console.log((Math.random()*10) + 1);
//*10 karne se digit shift hojayegi so now it generate random num from 0 to 9 and to avoid zero case we + 1 so now it generates a num from 1 to 9
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)