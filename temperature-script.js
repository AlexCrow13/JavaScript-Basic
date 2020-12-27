let tempC= +prompt('Введите температуру в градусах C');
let tempF;

function temperature(tempC) {
    tempF=(9 / 5) * tempC +32;
    return tempF;
}

temperature(tempC);
alert('Температура в Фаренгейтах равна ' + tempF);