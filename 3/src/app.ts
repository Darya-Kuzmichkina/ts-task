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
// interface Iobj {
//  id: number; title: string; count: number; price: number; result? :number;
// }
// const obj : Iobj[] =[
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// const newArr: Iobj[]= obj.map((el:Iobj)=>({...el,result:el.count*el.price}))
// const res:Iobj=newArr.reduce((max:Iobj,el:Iobj) => el.result > max.result ? el: max );

// console.log(res);

// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
// const mail:string[] = [
//   "nikita_123@mail.ru",
//   "hanna_123@mail.ru",
//   "artem_123@mail.ru",
//   "sergey_123@mail.ru",
//   "nikita_123@mail.ru",
//   "artem_123@mail.ru",
//   "darya_123@mail.ru",
// ];

// function check():void| string[] {
//     const newArr : string[]=[]
// try{
//     for (let i:number = 0; i < mail.length; i++) {
//     if(typeof mail[i]!== 'string') throw new Error("error type");
//     if(!/[A-Za-z0-9\.\-\@]+/gm.test(mail[i])) throw new Error("error mail");
//         if(!newArr.includes(mail[i])) newArr.push(mail[i])
//         }
//         return newArr
// }
//     catch(error){
// console.log(error.message);

//     }
// }
// console.log(check());


// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

// interface Iobj {
//     name: string;
//     value: number;
// }
// interface IobjNew {
//     width: number;
//     height: number;
// }
// const arr: Iobj[]=[ {name: 'width', value: 10}, {name: 'height', value: 20} ];
// const newObj:IobjNew[]=[];
// function res() {
//     arr.forEach((el):void => {
//         newObj[el.name]=el.value;
//     });
//     console.log(newObj);
    
// }
// res();

// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function f(a: number): (b: number) => number {
    return function(b: number): number {
        return a + b;
    };
}


function fSecond(a: number, b: number): number {
    return f(a)(b); 
}


const res1 = fSecond(2, 3); 


const res2 = f(2)(3); 

console.log(res1); 
console.log(res2); 