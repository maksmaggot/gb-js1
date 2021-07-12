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

    renderBasketPrice() {
        let card = document.getElementById('product-card-price');
        const cardPrice = document.createElement('p');
        card.innerHTML = this.renderPrice();
    }

    addProduct() {
        this.items.push(new Product('product name', getRandomIntInclusive(1, 15)));
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let basket = new ProductsBasket([]);

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll(".add_product");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            basket.addProduct();
            basket.renderBasketPrice();
        })
    }
    return basket.renderBasketPrice();
});