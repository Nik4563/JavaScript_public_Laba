let num1 = parseInt(prompt("Введите первое число: "));
let num2 = parseInt(prompt("Введите второе число:"));
 
let addition = num1 + num2;          // сложение
let subtraction = num1 - num2;       // вычитание
let multiplication = num1 * num2;    // умножение
let division = num1 / num2;          // деление
let remainder = num1 % num2;         // остаток от деления

let resultMessage = 
    `Результаты математических операций:\n` +
    `${num1} + ${num2} = ${addition}\n` +
    `${num1} - ${num2} = ${subtraction}\n` +
    `${num1} * ${num2} = ${multiplication}\n` +
    `${num1} / ${num2} = ${division}\n` +
    `${num1} % ${num2} = ${remainder}`;

alert(resultMessage);