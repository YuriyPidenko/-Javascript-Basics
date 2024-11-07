//Задание 1
// function erectsCube(num) {
//     let result = num * num * num
//     return result
// }

// console.log(erectsCube(5));

//Задание 2

// let salary = Number(prompt('Введите вашу зарплату'))
// function deductionЕaxes(num) {
//     if (typeof salary === "number") {
//         num = num * 0.87
//         console.log(`Размер заработной платы за вычетом налогов равен ${num}`);
//     } else {
//         console.log('вы вели текст');
//     }
// }

// deductionЕaxes(salary)

//Задание 3

// function minMaxNumber(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }

// console.log(minMaxNumber(1, 10, 54));


// Задание 4

const addition = (num1, num2) => num1 + num2;
const difference = (num1, num2) => {
    if (num1 === num2) return 0;
    return (num1 > num2) ? num1 - num2 : num2 - num1;
}
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

console.log(addition(2, 7));
console.log(difference(2, 7));
console.log(difference(7, 2));
console.log(difference(7, 7));
console.log(multiplication(2, 7));
console.log(division(10, 5));