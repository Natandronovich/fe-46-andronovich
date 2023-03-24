// NORMAL level
// task 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// task 2
let secondInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAge = 33;

let myAgeInSeconds = myAge * daysInYear * hoursInDay * minutesInHour * secondInMinute;
console.log(myAgeInSeconds);

// task 3
let count = 42;
let userName = '42';

let contString = String(count);
let contStringTwo = `${count}`;

let userNameNumber = Number(userName);
let userNameNumberTwo = +userName;
console.log(contString, contStringTwo, userNameNumber, userNameNumberTwo);

// task 4
let a = 1;
let b = 2;
let c = "белых медведей";

let additionOfVariables = `${a}` + `${b}` + ' ' + c;
console.log(additionOfVariables);

// task 5
let wordOne = 'доступ';
let wordTwo = 'морпех';
let wordThree = 'наледь';
let wordFour = 'попрек';
let wordFive = 'рубило';

let lengthWords = wordOne.length + wordTwo.length + wordThree.length + wordFour.length + wordFive.length;
console.log(lengthWords)

// task 6
let name = prompt("Как вас зовут?", "");
let age = prompt("Сколько вам лет?", "");

console.log(name, age);

// ADVANCED level
// task 1
let aAdvanced = 4;
let bAdvanced = 3;

aAdvanced = 3;
bAdvanced = 4;

console.log(aAdvanced, bAdvanced);

// task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);



