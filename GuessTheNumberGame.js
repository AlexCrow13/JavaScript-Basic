console.log('Игра Угадай число');

/*
function generateNumber() {
    const num = parseInt(Math.random() * 100 + 1);
    return (num);
}

const number = generateNumber();
console.log(number);

userNumber = +prompt('Угадайте число от 1 до 100');

while (userNumber !== number) {
    if (userNumber > number) {
        userNumber = +prompt('Загаданное число меньше');
    } else {
        userNumber = +prompt('Загаданное число больше');
    }
}
if (userNumber === number) {
    alert('Поздравляю, Вы угадали')
}
*/

function genNumber() {
    const randomNumber = Math.floor(Math.random()*100+1);
    console.log(randomNumber);
    return randomNumber;
}

const randomNumber = genNumber()


function game(randomNum) {
    const userNumber = +prompt('Введите число от 1 до 100');
    if (userNumber === randomNum) {
        alert('Вы угадали');
    } else if (userNumber > randomNum){
        alert('Загаданное число меньше');
        game(randomNumber)
    } else {
        alert('Загаданное число больше');
        game(randomNumber);
    }
}

game(randomNumber);