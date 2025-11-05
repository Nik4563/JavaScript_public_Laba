const input = document.createElement("input");
input.type = "number";
input.value = "0";

const minus = document.createElement("button");
minus.textContent = "-";

const plus = document.createElement("button");
plus.textContent = "+";

document.body.appendChild(minus);
document.body.appendChild(input);
document.body.appendChild(plus);

function increment() {
    const currentValue = parseInt(input.value);
    input.value = currentValue + 1;
}

// Функция для уменьшения значения
function decrement() {
    const currentValue = parseInt(input.value);
    input.value = currentValue - 1;
}

// Назначаем обработчики событий на кнопки
plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);