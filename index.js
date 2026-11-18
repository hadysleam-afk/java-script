// Question (1).
let str = "123";
let num = 7;
const a = "=====================================================";
console.log(Number(str) + num);
console.log(a);
/************************************************/
// Question (2).
function checkValue(value) {
    if (!value) {
        return "Invalid";
    } 
}
console.log(checkValue(""));
console.log(a);
/************************************************/
// Question (3).
for(let i = 1; i <=10 ; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
}
console.log(a);
/************************************************/
// Question (4).
const b = [1, 2, 3, 4, 5];
const evenNumbers = b.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log(a);
/************************************************/
// Question (5).
let Num = [6, 7, 8, 9, 10];
let Num2 = [11, 12, 13, 14, 15];
let spreed = [...Num, ...Num2];
console.log(spreed);
console.log(a);
/************************************************/
// Question (6).
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDayName(2)); // النتيجة: "Monday"
console.log(getDayName(5)); // النتيجة: "Thursday"
console.log(a);
/************************************************/
// Question (7).
const strings = ["a", "ab", "abc"];
const lengths = strings.map(str => str.length);

console.log(lengths);
console.log(a);
/************************************************/
// Question (8).
function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}

console.log(checkDivisibility(15)); 
console.log(checkDivisibility(10));
console.log(a); 
/************************************************/
// Question (9).
const square = num => num * num;
console.log(square(1000));
console.log(a);
/************************************************/
// Question (10).
const person = { name: "Hady", age: 21  };

function getPersonInfo({ name, age }) {
  return `I am ${name} and I am ${age} years old`;
}
console.log(getPersonInfo(person));
console.log(a);
/************************************************/
// Question (11).
function calc(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(calc(250, 550, 1000));
console.log(a);
/************************************************/
//Qution(13).
function largestNum(num){
    let max = num [0];
    for (let i = 1; i < num.length ; i++){
        if ( num[i] > max){
         max = num[i];
        }
    }
    return max;
    }
console.log(largestNum([1,3,3,5,6,7,8]));
console.log(a);
/*********************************************** */ 
//Qustion(14).
function getObjectKeys(obj) {
    return Object.keys(obj);
}
const perso = { name: "John", age: 30 };
console.log(getObjectKeys(person)); 
console.log (a);
/******************************************************************* */
//Qustion(15)
function splitIntoWords(str) {
    return str.split(" ");
}
const text = "The quick brown fox";
console.log(splitIntoWords(text)); 