const daysInput = document.getElementById('days');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

const daysBtn = document.getElementById('daysBtn');
const hoursBtn = document.getElementById('hoursBtn');
const minutesBtn = document.getElementById('minutesBtn');
const secondsBtn = document.getElementById('secondsBtn');

// Функция для конвертации из дней
function convertFromDays(days) {
    const daysValue = parseFloat(days);
    if (!isNaN(daysValue)) {
        hoursInput.value = (daysValue * 24).toFixed(2);
        minutesInput.value = (daysValue * 1440).toFixed(2);
        secondsInput.value = (daysValue * 86400).toFixed(2);
    }
}

// Функция для конвертации из часов
function convertFromHours(hours) {
    const hoursValue = parseFloat(hours);
    if (!isNaN(hoursValue)) {
        daysInput.value = (hoursValue / 24).toFixed(2);
        minutesInput.value = (hoursValue * 60).toFixed(2);
        secondsInput.value = (hoursValue * 3600).toFixed(2);
    }
}

// Функция для конвертации из минут
function convertFromMinutes(minutes) {
    const minutesValue = parseFloat(minutes);
    if (!isNaN(minutesValue)) {
        daysInput.value = (minutesValue / 1440).toFixed(2);
        hoursInput.value = (minutesValue / 60).toFixed(2);
        secondsInput.value = (minutesValue * 60).toFixed(2);
    }
}

// Функция для конвертации из секунд
function convertFromSeconds(seconds) {
    const secondsValue = parseFloat(seconds);
    if (!isNaN(secondsValue)) {
        daysInput.value = (secondsValue / 86400).toFixed(2);
        hoursInput.value = (secondsValue / 3600).toFixed(2);
        minutesInput.value = (secondsValue / 60).toFixed(2);
    }
}

daysBtn.addEventListener('click', function() {
    convertFromDays(daysInput.value);
});

hoursBtn.addEventListener('click', function() {
    convertFromHours(hoursInput.value);
});

minutesBtn.addEventListener('click', function() {
    convertFromMinutes(minutesInput.value);
});

secondsBtn.addEventListener('click', function() {
    convertFromSeconds(secondsInput.value);
});