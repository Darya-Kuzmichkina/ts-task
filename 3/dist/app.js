// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
// interface Iobj {
//  id: number; title: string; count: number; price: number;
// }
// const obj : Iobj[] =[
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// const res: Iobj[]=obj.filter((el:Iobj) => el.count>10);
// console.log(res);
const obj = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const newArr = obj.map((el) => ({ ...el, result: el.count * el.price }));
const res = newArr.reduce((max, el) => el > max ? el : max);
console.log(res);
