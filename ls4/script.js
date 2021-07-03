/* 1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
    в котором в соответствующих свойствах описаны единицы, десятки и сотни.
        Например, для числа 245 мы должны получить следующий
объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function parseName(number) {
    let errorObject = new Object();
    if (isNaN(number)) {
        errorObject.errorMessage = 'Аргумент функции должен быть числом!';
        return errorObject;
    }

    if (number > 999) {
        errorObject.errorMessage = 'Число превышает 999!';
        return errorObject
    }

    let numberObject = new Object();
    numberArray = number.toString().split("");
    if (number > 100) {
        numberObject.hundreds = numberArray[0];
        numberObject.tens = numberArray[1];
        numberObject.units = numberArray[2];
        return numberObject;
    }

    if (number > 10) {
        numberObject.tens = numberArray[0];
        numberObject.units = numberArray[1];
        return numberObject;
    }

    numberObject.units = numberArray[0];
    return numberObject;
}

console.log()

/* 2.Продолжить работу с интернет - магазином:
2.1.В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
    2.2.Реализуйте такие объекты.
2.3.Перенести функционал подсчета корзины на объектно - ориентированную базу. */

class ProductsBasket {

    constructor(items) {
        this.items = items;
    }

    countPrice() {
        totalPrice = 0;
        this.items.array.forEach(function (element) {
            totalPrice += element.price
        });
    }
}

class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


let basket = new ProductsBasket([
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
])

console.log(basket.countPrice())

3. * Подумать над глобальными сущностями.К примеру,
    сущность «Продукт» в интернет - магазине актуальна не только для корзины,
        но и для каталога.Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
            но в разных местах давал возможность вызывать разные методы.