// Задание 1
// let num1 = Number(prompt(' Введите первое число'))
// let num2 = Number(prompt(' Введите второе число'))

// if (num1 <= 1) {
//     console.log(`${num1} меньше или равно 1`);
// } else {
//     console.log('Больше');
// }


// if (num2 >= 3) {
//     console.log(`${num2} Больше или равно 3`);
// } else {
//     console.log('Меньше');
// }



// Задание 2
// let test = true;
// console.log((test === true) ? '+++' : '---');


//Задание 3
// let day = 16
// if (day >= 0 && day <= 10) {
//     console.log('первая декада месяца');
// } else if (day >= 11 && day <= 20) {
//     console.log('вторая декада месяца');
// } else if (day >= 21 && day <= 31) {
//     console.log('третья декада месяца');
// } else {
//     console.log('упс что то не то');
// }


//Задание 4
let n = prompt('Введите число');

if (n.length >= 3) {
    let m = String(n).slice(n.length - 3, n.length);
    alert("В числе " + n + " количество сотен: " + m[0] + ", десятков: " + m[1] + ", единиц: " + m[2]);
} else if (n.length == 2) {
    alert("В числе " + n + " количество сотен: 0, десятков: " + n[0] + ", единиц: " + n[1]);
} else if (n.length == 1) {
    alert("В числе " + n + " количество сотен: 0, десятков: 0, единиц: " + n);
} else {
    alert("Ошибка!");
}