const title = document.createElement('h1');
title.textContent = 'JavaScript Events';
document.body.appendChild(title);

const colors = ['Синий', 'Красный', 'Фиолетовый', 'Зеленый'];
const colorValues = ['blue', 'red', 'purple', 'green'];

colors.forEach((color, index) => {
    const button = document.createElement('button');
    button.textContent = color;
    button.style.backgroundColor = colorValues[index]
    
    button.ondblclick = function() {
        title.style.color = colorValues[index];
    };
    
    document.body.appendChild(button);
});