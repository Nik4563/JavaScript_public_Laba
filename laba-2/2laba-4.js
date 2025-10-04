let input = prompt("Введите элементы числового массива через запятую:");
let array = input.split(',').map(Number);

let minIndex = 0;
let maxIndex = 0;

for(let i = 1; i < array.length; i++){
    if(array[minIndex] > array[i]){
        minIndex = i;
    }
    if(array[maxIndex] < array[i]){
        maxIndex = i;
    }
}

let startIndex = Math.min(minIndex, maxIndex);
let endIndex = Math.max(minIndex, maxIndex);

let sum = 0;
for (let i = startIndex + 1; i < endIndex; i++) {
    sum += array[i];
}

let result;
if (sum < 10) {
    let product = 1;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            product *= array[i];
        }
    }
    result = `Произведение ненулевых элементов: ${product}`;
}
else {
    let minValue = array[minIndex];
    let count = 0;
    let product = 1;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % minValue === 0) {
            count++;
            product *= array[i];
        }
    }
    result = `Количество элементов, кратных минимальному (${minValue}): ${count}, их произведение: ${product}`;
}
alert(`Исходный массив: [${array}]\n${result}`);