// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const products = [
    {
        name: "Хлеб",
        price: 30,
        quantity: 2
    },
    {
        name: "Молоко",
        price: 60,
        quantity: 3
    },
    {
        name: "Яблоки",
        price: 120,
        quantity: 1
    },
    {
        name: "Сыр",
        price: 250,
        quantity: 2
    },
    {
        name: "Мясо",
        price: 400,
        quantity: 1
    }
];
const res = products.reduce((sum, el) => sum + (el.price * el.quantity), 0);
console.log(res);
