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

//2 У вас есть массив объектов вида приведенного в приложении. Необходимо
//вывести все товары в обратном порядке
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

// console.log(obj.reverse());

//3 У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
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
//  const res: Iobj[]=obj.filter((el:Iobj) => el.count%3===0);
// console.log(res);

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.

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
//  const res: number=obj.reduce((sum:number,el:Iobj) => sum+el.count*el.price,0);
// console.log(res);

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
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
//  const res: number| Iobj=obj.reduce((max:Iobj,el:Iobj) => el.price> max.price ? el: max );
// console.log(res);

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

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
//  const res: number| Iobj=obj.reduce((sum:number,el:Iobj) => sum+el.price,0);
// console.log(res/obj.length);

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
interface Iobj {
 id: number; title: string; count: number; price: number;
}
const obj : Iobj[] =[
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const newArr: Iobj[]= obj.map((el:Iobj)=>({...el,result:el.count*el.price}))
const res: number| Iobj=newArr.reduce((max:Iobj,el:Iobj) => el> max ? el: max );

console.log(res);
//1.17.37