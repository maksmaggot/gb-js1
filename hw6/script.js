// Продолжаем реализовывать модуль корзины:
// Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.


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