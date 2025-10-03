let secretNumber = Math.floor(Math.random() * 100) + 1;
let userinput = 0;
let attempts = 0;

while (true) {
    userinput = parseInt(prompt("Угадайте число от 1 до 100:"));
    attempts++;
    
    if (userinput === secretNumber) {
        alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
        break;
    } 
    else if (userinput > secretNumber) {
        alert("Слишком много!");
    } 
    else {
        alert("Слишком мало!");
    }
}