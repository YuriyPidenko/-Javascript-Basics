//Задание 1

// function userNameAge(userName, lastName, userAge) {
//     console.log(`Привет ${userName} ${lastName} с возрастом ${userAge} `);
// }

// userNameAge('Юра', 'Пиденко', '29')


// let number = Number(prompt('Ведите число для возвидение в квадрат'))
// function namberKvadro(number) {
//     number = number * number;
//     return number
// }

// console.log(namberKvadro(number));


// function checkNumber(num) {
//     if (num > 0) {
//         console.log('+++');
//     } else if (num < 0) {
//         console.log('---');
//     } else {
//         console.log('Ноль');
//     }
// }

// checkNumber(-5)

// Задание 2
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function sumNumbers(num1, num2, num3) {
//     let result = num1 + num2 + num3
//     return result
// }

// console.log(sumNumbers(param1, param2, param3));


// function func(num = 5) {
//     console.log(num * num);
// }
// func(2);
// func(3);
// func();

//Задание 3


function squareRoot(number) {
    return Math.sqrt(number);
}

const rootOf3 = squareRoot(3);
const rootOf4 = squareRoot(4);
const sum = rootOf3 + rootOf4;

console.log(sum);

function minMaxNumber(num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

minMaxNumber(1, 2)




//Задание 4 
function weeks(day) {
    if (day === 1) {
        console.log('Пн');
    } else if (day === 2) {
        console.log('Вт');
    } else if (day === 3) {
        console.log('Ср');
    } else if (day === 4) {
        console.log('Чт')
    } else if (day === 5) {
        console.log('Пт');
    } else if (day === 6) {
        console.log('Сб');
    } else if (day === 7) {
        console.log('Вс');
    } else {
        console.log('Вывели не то число ')
    }
}

let day = Number(prompt('Ведите день недели числом'))
weeks(day)



function setTime(name, time) {
    if (12 > time >= 4) {
        console.log(`Доброе утро ${name}`);
    } else if (20 > time >= 12) {
        console.log(`Добрый день ${name}`);
    } else if (23 > time >= 20) {
        console.log(`Добрый вечер ${name}`);
    } else {
        console.log(`Доброй ночи ${name}`);
    }
}