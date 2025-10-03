let questions = [
    {
        question: "Какая планета самая большая в Солнечной системе?",
        options: ["1. Земля", "2. Юпитер", "3. Сатурн"],
        correct: 2
    },
    {
        question: "Сколько континентов на Земле?",
        options: ["1. 5", "2. 6", "3. 7"],
        correct: 3
    },
    {
        question: "Какое животное является самым быстрым на суше?",
        options: ["1. Гепард", "2. Лев", "3. Антилопа"],
        correct: 1
    },
    {
        question: "В каком году человек впервые полетел в космос?",
        options: ["1. 1957", "2. 1961", "3. 1969"],
        correct: 2
    },
    {
        question: "Какое из этих веществ является самым твердым?",
        options: ["1. Золото", "2. Алмаз", "3. Железо"],
        correct: 2
    }
];

let ball = 0;

for(let i = 0; i < questions.length; i++){
    let variant = questions[i];

    let userAnswer = parseInt(prompt(`Вопрос номер ${i+1}: ` + 
        `${variant.question}\n` + 
        `${variant.options.join(`\n`)}\n` + 
        `Выберите вариант ответа от 1 до 3:`));
    if(userAnswer === variant.correct){
        ball++;
    }
}

document.write(`
    <h1>Результаты викторины</h1>
    <p>Вы ответили правильно на ${ball} из ${questions.length} вопросов!</p>`);