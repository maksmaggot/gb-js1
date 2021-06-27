// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let number = 0;
while (number <= 100) {
    isSimple = true;

    divider = 2;
    while (divider < number) {
        if ((number % divider) == 0) {
            isSimple = false;
            break;
        }
        divider++;
    }

    if (isSimple) {
        //     console.log(number);
    }
    number++;
}

// С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
// в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
// Организовать такой массив для хранения товаров в корзине;
let basket = [
    { productName: 'ProductName', price: 10 },
    { productName: 'ProductName', price: 15 },
    { productName: 'ProductName', price: 10 },
    { productName: 'ProductName', price: 14 },
    { productName: 'ProductName', price: 12 },
    { productName: 'ProductName', price: 15 },
];

// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(productsBasket) {
    totalPrice = 0;

    productsBasket.forEach(element => {
        totalPrice += element.price
    });

    return totalPrice;
}

console.log(countBasketPrice(basket));

// * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(...){// здесь пусто}
for (i = 0; i < 10; console.log(i), i++) {
}

//  * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
for (i = 0; i < 20; i++) {
    generatedString = '';
    j = 0;
    for (j = 0; j <= i; j++) {
        generatedString += 'x';
    }
    console.log(generatedString);
}