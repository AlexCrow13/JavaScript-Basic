//task 1
console.log('Задание 1');
const n = 100;
let i = 0;

while (i <= n) {
    if ( (i !== 1) && (i !== 0) ) {
        if (i < 3) {
            console.log(i);
        } else {
            let a = i - 1;
            while (i % a !== 0) {
                a = a - 1;
                if (a === 1) {
                    console.log(i);
                }
            }
        }
    }
    i++;
}

const numbers = new Array(100);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
}
console.log(numbers);

i = 0;
let simpleNumbers = [];

while (i < numbers.length) {
    if ((numbers[i] !== 1) && (numbers[i] !== 0)) {
        if (numbers[i] < 3) {
            simpleNumbers.push(numbers[i])
        } else {
            let a = numbers[i] - 1;
            while (numbers[i] % a !== 0) {
                a = a - 1;
                if (a === 1) {
                    simpleNumbers.push(numbers[i])
                }
            }
        }
    }
    i++;
}

console.log(simpleNumbers);

//task 2,3
console.log('Задание 2,3');

// Прайс-лист магазина Товар - стоимость
const priceList = [['Рубашка', 1000],['Брюки', 3000],['Куртка', 5000]]

// Корзина покупателя
const shoppingCart = ['Рубашка','Куртка','Брюки','Куртка','Брюки','Рубашка'] 
// Товаров в корзине  по прайсу на 18000

// Функция получает название товара и прайс-лист. Разбивает прайс-лист на 2 отдельных массива, в которых сохраняется порядок индексов товара и цены. По индексу товара возвращает цену товара
const itemCost = (item,priceList) => {
    const items = [];
    const prices = [];
    for ( let i =0; i < priceList.length; i++){
        items.push(priceList[i][0]);
        prices.push(priceList[i][1]);
    }
    return prices[items.indexOf(item)]
}

// console.log(itemCost('Брюки', priceList));

// Функция подсчитывает общую стоимость корзины покупателя. Цикл обходит все товары в корзине,Вычисляет стоимость каждого товара  и суммирует

const countBasketPrice = (shoppingCart,priceList) =>{
    let totalCost = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totalCost += itemCost(shoppingCart[i], priceList);
      }
      return totalCost;
    };

   console.log('Сумма товаров в корзине ' + countBasketPrice(shoppingCart,priceList)); 


// task 4
console.log('Задание 4');

for (i = 0; i < 10; i++)
    console.log(i);

// task 5
console.log('Задание 5');

const pyramid = new Array(21); // 21 элемент массива, тк корректное отображение Пирамиды 2 возможно только при нечетном количестве элементов массива
console.log(pyramid.length);

console.log('Пирамида 1');
for (i=0; i < pyramid.length; i++){
    pyramid[i] = 'x';
    console.log(pyramid);
}

// ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' X ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' 'X' X 'X' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' 'X' 'X' X 'X' 'X' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' ' ' ' ' ' ' 'X' 'X' 'X' X 'X' 'X' 'X' ' ' ' ' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' ' ' ' ' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' ' ' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' ' ' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' ' ' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' ' ' 'X' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' 'X' ' ' ' ' ' ' ' '
// ' ' ' ' ' ' 'X' 'X' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' 'X' 'X' ' ' ' ' ' '
// ' ' ' ' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' ' ' ' '
// ' ' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' ' '
// 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' X 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X' 'X'

console.log('Пирамида 2');

for (i=0; i <= (pyramid.length)/2; i++){
    let j = 0;
   while (j < pyramid.length) {
       if (j === (pyramid.length-1)/2){
        pyramid[j] = 'X';
       }else if ( (j === (pyramid.length-1)/2 + i) || (j === (pyramid.length-1)/2 - i) ){
        pyramid[j] = 'X';
       } else if (pyramid[j] === 'X'){
           j++;
           continue;
       } else {
           pyramid[j] = ' ';
       }
    j++;
   }
    console.log(pyramid);
}





