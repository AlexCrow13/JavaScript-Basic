// task 1

function numberToObject(userNumber) {
    const num = userNumber.toString();
    const numArr = [...num];
    while (numArr.length < 3) {
        numArr.unshift(0);
    }
    const number = {};
    if (num > 999) {
        return number;
    } else {
        number['единицы'] = +numArr[numArr.length - 1];
        number['десятки'] = +numArr[numArr.length - 2];
        number['сотни'] = +numArr[numArr.length - 3];
        return number;
    }
}

// const userNumber = prompt('Ввести число');
const userNumber = 12;

 numberToObject(userNumber);
if (userNumber > 999){
    console.log('Число больше 999');
    console.log(numberToObject(userNumber)); 
} else{
    console.log(numberToObject(userNumber));
}

// task 2


const shoppingCart = {
    priceList: {
        'Рубашка': 1000,
        'Брюки': 3000,
        'Куртка': 5000
    },
    items: ['Рубашка', 'Куртка', 'Брюки', 'Куртка', 'Брюки', 'Рубашка'],
    itemCost(item) {
        for (let itemKey in this.priceList) {
            if (this.priceList.hasOwnProperty(itemKey)) {
                if (item === itemKey) {
                    return this.priceList[itemKey];
                }
            }
        }
    },
    countBasketPrice() {
        let totalCost = 0;
        for (let i = 0; i < this.items.length; i++) {
            totalCost += this.itemCost(this.items[i])
        }
        return totalCost;
    }
}

console.log(`Сумма корзины - ${shoppingCart.countBasketPrice()}`);


