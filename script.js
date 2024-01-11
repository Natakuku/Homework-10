'use strict';
//1.
//let numbers = '';
//for (let i = 10; i <= 20; i++){
//    numbers += i;
//    if (i < 20) {
//        numbers += ', ';
//    }
//}
//console.log(numbers)

//2.
//for (let i = 10; i <= 20; i++) {
//    let square = i * i;
//
//    console.log(`Квадрат числа ${i}: ${square}`);
//}

//3.
//let mult = 7;
//for (let i = 1; i <= 10; i++) {
//    let result = mult * i; 
//    console.log(`${mult} * ${i} = ${result}`);
//
//}

//4.
//let sum = 0; 
//for (let i = 1; i <= 15; i++) {
//    sum += i;    
//}
//console.log(`Сумма чисел від 1 до 15: ${sum}`)

//5.
//let mult = 1;
//for (let i = 15; i <= 35; i++) {
//    mult *= i;
//}
//console.log(`Добуток чисел від 15 до 35: ${mult}`)//

//6.
//let sum = 0;
//let count = 0;
//for (let i = 1; i <= 500; i++) {
//    sum += i;
//    count++;
//}
//let average = sum / count;
//
//console.log(`Середнє арифметичне чисел від 1 до 500: ${average}`);
//

//7.
//for (let i = 30; i <= 80; i++) {
//  if (i % 2 == 0) {
//    console.log('Cума парних чисел ' + i );
//  }
//}

//8.
//for (let i = 100; i <= 200; i++) {
//    if (i % 3 === 0) {
//        console.log(i)
//    }
//}

//9,10,11
//let userNum = prompt('Введіть будь яке натуральне число' + ' ');
//alert(`Ви ввели  ${userNum}`);
//let number = parseInt(userNum);
//if (Number.isInteger(number) && number > 0) {
//    alert(`Дільники числа ${number}: `);
//
//    let sum = 0;
//    let count = 0;
//
//    for (let i = 1; i <= number; i++) {
//        if (number % i === 0) {
//            alert(`${i} `);
//
//            if (i % 2 === 0) {
//                sum += i;
//                count++;
//            }
//        }
//    }
//    alert(`Кількість парних дільників: ${count}`);
//    alert(`Сума парних дільників: ${sum}`);
//} else {
//    alert("Введено некоректне число. Будь ласка, введіть натуральне число більше за 0.");
//}

//12.
//for (let i = 1; i <= 10; i++) {
//    console.log(`Таблиця множення на: ${i}`);
//    for (let j = 1; j <= 10; j++){
//        let result = i * j;
//        console.log(`${i} * ${j} = ${result}`)
//    }
//}