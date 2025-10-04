let n = parseInt(prompt("Введите порядок квадратной матрицы:"));

let matrix = [];
for (let i = 0; i < n; i++) {
    let rowInput = prompt(`Введите элементы ${i+1}-й строки через запятую:`);
    let row = rowInput.split(',').map(Number);
    matrix.push(row);
}

let maxBelow = matrix[1][0];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i > j) {
            if (matrix[i][j] > maxBelow) {
                maxBelow = matrix[i][j];
            }
        }
    }
}

let sum = 0;
let found = false;

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        if (matrix[i][j] > maxBelow) {
            sum += matrix[i][j];
            found = true;
        }
    }
}

let result = "";
if (found) {
    result = "Сумма элементов: " + sum;
} else {
    result = "Нет подходящих элементов";
}


alert(`${result}`);