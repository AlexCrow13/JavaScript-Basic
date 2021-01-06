// ### 3

console.log('Задание 3');
let a = 5;
let b = 30;

if (a>=0 && b >=0) {
   if (a>b) {
       const c = a-b;
       console.log(c);
   } else {
       c = b-a;
       console.log(c);
   }
} else if ((a>=0 && b<= 0) || (a<=0 && b>= 0)) {
    c = a+b;
    console.log(c);
} else {
    c = a*b;
    console.log(c);
}


// ### 4

// Возможно не понял задание, но чтобы вывести последовательность чисел от а до 15 в каждом из case пришлось использовать цикл
console.log('Задание 4');
a = 11;

switch (a) {
    case 1 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 2 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 3 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 4 :
    for (a; i <=15; i++){
        console.log(i);
    }
    break;
    case 5 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 6 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 7 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 8 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 9 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 10 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 11 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 12 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 13 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 14 :
    for (a; a <=15; a++){
        console.log(a);
    }
    break;
    case 15 :
    console.log(a);
    break;
}


// ### 5

console.log('Задание 5');
a = 30;
b = 6;

function sum(a,b) {
    return a+b;
}
// const sum = (a,b) => a+b;
console.log(sum(a,b));  

function sub(a,b) {
    return a-b;
}
// const sub = (a,b) => a-b;
console.log(sub(a,b));

function multi(a,b) {
    return a*b;
}
// const multi = (a,b) => a*b;
console.log(multi(a,b));

function div(a,b) {
    return a/b;
}
// const div = (a,b) => a/b;
console.log(div(a,b));

// ### 6
console.log('Задание 6');

function mathOperation(arg1, arg2, operation) {
    switch (operation){
        case 'sum':
        console.log(sum(arg1,arg2));
        break;
        case 'sub':
        console.log(sub(arg1,arg2));
        break;
        case 'multi':
        console.log(multi(arg1,arg2));
        break;
        case 'div':
        console.log(div(arg1,arg2));
        break;
    }
}

mathOperation(5,15,'multi')

// ### 7

// Думаю, тк null это объект то сравнение с типом number >, <, == возвращает false, в отличии от сравнения string и number , где  нестрогое == приводит в одному типу и возвращает true, а строгое === определяет тип и возвращает false. Однако, оператор >=, <= c null возвращает true. Думаю, что  это работает от обратного (если null > 0 - false, то null >= 0 - true)
console.log('Задание 7');

console.log(typeof(null)); console.log(typeof(0));

console.log('null > 0: ' + ( null > 0));
console.log('null >= 0: ' + ( null >= 0));
console.log('null < 0: ' + ( null < 0));
console.log('null <= 0: ' + ( null <= 0));
console.log('null == 0: ' + ( null == 0));
console.log('null === 0: ' + ( null === 0));

console.log(typeof('0'));
console.log('"0" > 0: ' + ( '0' > 0));
console.log('"0" >= 0: ' + ( '0' >= 0));
console.log('"0" == 0: ' + ( '0' == 0));
console.log('"0" === 0: ' + ( '0' === 0));

// ### 8 Рекурсивная функция

// 2, 4, 8, 16, 32, 64...
//1 2
//2 (2+2)                  
//3 (2+2)*2
//4 (2+2)*4
//5 (2+2)*8
//6 (2+2)*16
//7 (2+2)*32

// 5, 25, 125, 625, 3125, 15625
//1 5
//2 5*5
//3 (5*5)*5
//4 (5*5)*25

console.log('Задание 8');

function power(val, pow){
    return pow > 1 ? power(val,pow-1)*val : val;
}

console.log(power(3,5));