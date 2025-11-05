const container = document.createElement('div');
container.style.textAlign = 'center';

const minContainer = document.createElement('div');

const minLabel = document.createElement('span');
minLabel.textContent = 'Min ';
minContainer.appendChild(minLabel);

const minInput = document.createElement('input');
minInput.type = 'number';
minInput.value = '1';
minInput.style.width = '60px';
minContainer.appendChild(minInput);

container.appendChild(minContainer);

const maxContainer = document.createElement('div');
maxContainer.style.margin = '10px 0';

const maxLabel = document.createElement('span');
maxLabel.textContent = 'Max ';
maxContainer.appendChild(maxLabel);

const maxInput = document.createElement('input');
maxInput.type = 'number';
maxInput.value = '10';
maxInput.style.width = '60px';
maxContainer.appendChild(maxInput);

container.appendChild(maxContainer);

// Кнопка генерации
const generateBtn = document.createElement('button');
generateBtn.textContent = 'Generate';
generateBtn.style.margin = '15px 0';
generateBtn.style.padding = '8px 16px';
container.appendChild(generateBtn);

const result = document.createElement('div');
result.style.fontSize = '24px';
result.textContent = '0'; 
container.appendChild(result);

document.body.appendChild(container);

function generateRandomNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    
    if (min >= max) {
        result.textContent = 'Invalid range';
        return;
    }
    
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = randomNum;
}

generateBtn.addEventListener('click', generateRandomNumber);