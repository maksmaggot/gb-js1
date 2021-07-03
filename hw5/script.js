/* 
1. Создать функцию, генерирующую шахматную доску.
Можно использовать любые html - теги.
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8,
столбцы — латинскими буквами A, B, C, D, E, F, G, H. */
function generateBoard() {
    const chessBoard = document.getElementById('chess-board');

    const table = document.createElement('table');
    table.style.border = 'solid 1px black';
    table.style.borderCollapse = 'collapse';

    addTableHeader(table);

    for (i = 1; i < 9; i++) {
        const row = document.createElement('tr');

        for (j = 0; j < 9; j++) {
            const tableElement = document.createElement('td');
            tableElement.style.border = 'solid 1px black';

            if (j == 0) {
                tableElement.textContent = i;
            } else {
                if ((j + i) % 2) {
                    tableElement.style.backgroundColor = 'black';
                }
            }
            row.appendChild(tableElement);
        }
        table.appendChild(row);
    }


    chessBoard.appendChild(table);

}

function addTableHeader(table) {
    const tableHeader = document.createElement('thead');

    let boardHead = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    boardHead.forEach(function (element) {
        const columnHeader = document.createElement('th');
        columnHeader.textContent = element;
        columnHeader.style.border = 'solid 1px black'
        tableHeader.appendChild(columnHeader);
    });
    table.appendChild(tableHeader);
}

document.addEventListener('DOMContentLoaded', generateBoard);
/* 
2.Сделать генерацию корзины динамической: 
верстка корзины не должна находиться в HTML - структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */


class ProductsBasket {

    constructor(items) {
        this.items = items;
    }

    countPrice() {
        let totalPrice = 0;
        this.items.forEach(function (element) {
            totalPrice += element.price
        });
        return totalPrice;
    }

    renderPrice() {
        if (this.items.length == 0) {
            return '«Корзина пуста»'
        }

        return `«В корзине: ${this.items.length} товаров на сумму ${this.countPrice()} рублей»`;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Presenter {
    renderBasketPrice(basket) {
        let card = document.getElementById('product-card-price');
        const cardPrice = document.createElement('p');
        cardPrice.textContent = basket.renderPrice();
        card.appendChild(cardPrice);
    }
}

let presenter = new Presenter();
let emptyBasket = new ProductsBasket([]);
document.addEventListener('DOMContentLoaded', function () {
    return presenter.renderBasketPrice(emptyBasket);
});


let basket = new ProductsBasket([
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
    new Product('ProductName', 10),
]);

//document.addEventListener('DOMContentLoaded', presenter.renderBasketPrice(basket));
document.addEventListener('DOMContentLoaded', function () {
    return presenter.renderBasketPrice(basket);
});

/* * Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров(сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него.
HTML - код должен содержать только div id =”catalog” без вложенного кода.
Весь вид каталога генерируется JS.
 */

let products = [
    new Product('ProductName1', 10),
    new Product('ProductName2', 15),
    new Product('ProductName3', 20),
    new Product('ProductName4', 30),
    new Product('ProductName5', 40),
];

class Catalog {
    constructor(items) {
        this.items = items;
    }

    renderItems() {
        let catalog = document.getElementById("catalog");
        this.items.forEach(function (element) {
            let itemContainer = document.createElement('div');
            itemContainer.textContent = `Продукт ${element.name} с ценой ${element.price}`;
            catalog.appendChild(itemContainer);
        });
    }
}

let productsCatalog = new Catalog(products);

document.addEventListener('DOMContentLoaded', function(){
    productsCatalog.renderItems();
});