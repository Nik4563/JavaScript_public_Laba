let playAgain = true;

while (playAgain) {
    let userInput = prompt("Выберите: камень, ножницы или бумага");    

    let computerInputNumber = Math.floor(Math.random() * 3);
    let computerInput;
    
    if (computerInputNumber === 0) {
        computerInput = "камень";
    } 
    else if (computerInputNumber === 1) {
        computerInput = "ножницы";
    } 
    else {
        computerInput = "бумага";
    }
    
    let result;
    
    if (userInput === computerInput) {
        result = "Ничья!";
    } 
    else if (
        (userInput === "камень" && computerInput === "ножницы") ||
        (userInput === "ножницы" && computerInput === "бумага") ||
        (userInput === "бумага" && computerInput === "камень")
    ) {
        result = "Вы победили!";
    } 
    else if (
        (userInput === "камень" && computerInput === "бумага") ||
        (userInput === "ножницы" && computerInput === "камень") ||
        (userInput === "бумага" && computerInput === "ножницы")
    ) {
        result = "Компьютер победил!";
    } 
    else {
        result = "Некорректный ввод! Введите: камень, ножницы или бумага";
    }
    
    alert(`Вы выбрали: ${userInput}\nКомпьютер выбрал: ${computerInput}\n\n${result}`);
    
    let continueGame = confirm("Хотите сыграть еще раз?");
    if (!continueGame) {
        playAgain = false;
        alert("Спасибо за игру!");
    }
}