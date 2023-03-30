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
for (let i = 1; i < 20; i++) {
        if(i % 3 === 0){
            console.log(i);
        }
    }


// task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && apple || orange;
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
// let wryUserName = 'пОлИнА нАбЕрЕжНаЯ';

const f=(s)=>{
    alert('Привет, '+s.toLowerCase().split(/\s+/).map(x=>x[0]=x[0].toUpperCase()+x.slice(1)).join(' ')+'!')
    }
    f('пОлИнА нАбЕрЕжНаЯ');



//task 2
let questionNumber = +prompt('Введите число', '');
let questionSubtract = +prompt('Сколько отнять от числа?', '');
let questionAdd = +prompt('Сколько прибавить к предыдущему результату?', '');
let questionMultiply = +prompt('На сколько умножить предыдущий результат?', '');
let questionDivide = +prompt('На сколько разделить предыдущий результат?', '');

let result = (((questionNumber - questionSubtract) + questionAdd) * questionMultiply) / questionDivide;

alert((((questionNumber - questionSubtract) + questionAdd) * questionMultiply) / questionDivide);


let Action = function(name, str, block) {
    this.name = name;
    this.str = str;
    this.call = block;
};
let del = new Action('Сколько отнять от предыдущего результата?', ' - ', function(a, b) {
    return a - b;
});
let add = new Action('Сколько прибавить к предыдущему результату?', ' + ', function(a, b) {
    return a + b;
});
let multiply = new Action('На сколько умножить предыдущий результат?', ' * ', function(a, b) {
    return a * b;
});
let divide = new Action('На сколько разделить предыдущий результат?', ' / ', function(a, b) {
    if (b == 0) throw 'Division by zero';
    return a / b;
});

let bot = function(actions) {
    let gets = function(index) {
        return +prompt(actions[index].name);
    };

    let lastAction = actions.length - 1;

    let singleAction = function() {
        var x = +prompt('Введите число:'),
        y = gets(lastAction);

    return x + actions[lastAction].str + y + ' = ' + actions[lastAction].call(x, y);
    }

    let severalActions = function() {
        var x = +prompt('Введите число:'),
        y, formula;

        formula = x;

        for (let i = 0; i < lastAction; i++) {
        y = gets(i);
        formula = '(' + formula + actions[i].str + y + ')';
        x = actions[i].call(x, y);
    }

    y = gets(lastAction);
    x = actions[lastAction].call(x, y);
    formula += actions[lastAction].str + y + ' = ' + x;
    return formula;
    }

    return lastAction == 0 ? singleAction() : severalActions();
}

let actions = [del, add, multiply, divide];

alert(bot(actions));


//task 3
for( let i = 0; i < 6; i++){
    for( let j = 0; j < i; j++){
        document.write('#');
    }
    document.write('</br>')
}