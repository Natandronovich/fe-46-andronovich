// NORMAL level
// task 1
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a, typeof b, typeof c, typeof d, typeof e,);

// task 2
let height = 15;
let width = 20;


console.log(Math.max(height, width)); //вариант1

let max = function (){  //вариант2
    if (height > width){
        console.log(height)
    } else
        console.log(width);
}
max();


// task 3
//вариант 1
for (let i = 1; i <= 20; i++) {
        if(i % 3 === 0){
            console.log(i);
        }
    }

//вариант 2
let i = 1
while(i <= 20){
    if(i % 3 === 0){
        console.log(i);
    }
    i++;
}


// task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);


// task 5
let userNumber = prompt('Введите число', '');

if(userNumber % 3 === 0 && userNumber % 5 === 0){
    console.log('FizBuz');
}else if(userNumber % 5 === 0){
    console.log('Fiz');
}else if (userNumber % 3 === 0){
    console.log('Buz');
}

// task 6
let userAge = prompt('Сколько вам лет?', '');

if(userAge > 18){
    console.log('Попей пивка');
} else if(userAge >= 16 && userAge <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
}else{
    console.log('Пей колу');
}

//task 7
let bestTrip = prompt('В какую сторону света вы хотели бы отправиться?', 'юг');

let south = 'юг';
let north = 'север';
let west = 'запад';
let east = 'восток';

switch (bestTrip) {
    case south:
    console.log('на юг пойдешь счастье найдешь');
    break;
    case north:
    console.log('на север пойдешь много денег найдешь')
    break;
    case west:
    console.log('на запад пойдешь верного друга найдешь')
    break;
    case east:
    console.log('на восток пойдешь разработчиком станешь')
    break;
    default:
    console.log('попробуйте еще раз');
}


//ADVANCED level
//task 1
    let wryUserName = 'пОлИнА нАбЕрЕжНаЯ';
    wryUserName = wryUserName
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
alert(`Привет, ${wryUserName}`);



//task 2
let questionNumber = +prompt('Введите число', '');
let questionSubtract = +prompt('Сколько отнять от числа?', '');
let questionAdd = +prompt('Сколько прибавить к предыдущему результату?', '');
let questionMultiply = +prompt('На сколько умножить предыдущий результат?', '');
let questionDivide = +prompt('На сколько разделить предыдущий результат?', '');

let result = (((questionNumber - questionSubtract) + questionAdd) * questionMultiply) / questionDivide;

alert(`(((${questionNumber} - ${questionSubtract}) + ${questionAdd}) * ${questionMultiply}) / ${questionDivide} = ${result}`);


//task 3
//вариант 1
let steps = '';
for(let i = 0; i < 6; i++){
    steps += '#';
    console.log(steps);
}

//вариант 2
for( let i = 0; i < 6; i++){
    for( let j = 0; j < i; j++){
        document.write('#');
    }
    document.write('</br>')
}
