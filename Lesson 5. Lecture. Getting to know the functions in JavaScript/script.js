// function helloName(name) {
//     console.log(name);
// }

// helloName('alex')

// let count = 5;

// function couner() {
//     return count++
// }

// couner();
// console.log(count);



// let age = Number(prompt('сколько вам лет'));

// function upAge() {
//     return age + 5;
// }

// console.log(`через пять лет вам будет ${age}`);


// function hello() {
//     console.log('Hello function');
// }

// hello()

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// const result = sum(2, 5);
// console.log(result);

// const userMoney = Number(prompt('Сколько ты зарабатываешь'))

// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }

// console.log(salary(userMoney));



// function sayHello() {
//     alert('Привет')
//     alert('Нажми на кнопку')
// }


// const userAnswer = prompt('Зимой и летом одноим цветом')

// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }




function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }
}

// askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает')
// askQuestion('елка', 'Зимой и летом одноим цветом')

function puzzle() {
    askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает')
    askQuestion('елка', 'Зимой и летом одноим цветом')
}