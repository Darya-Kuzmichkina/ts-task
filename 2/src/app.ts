// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

// const num: number[]=[1,2,3,4,5,6,7,8,9];
// const addSum = num.filter(n=>n%2 !==0).reduce((sum,el)=> sum+el,0);
// console.log(addSum);

// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

// const str:string[]=['apple','banana','cherry'];
// const strA=str.filter(el=> el.includes('a'));
// console.log(strA);

// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

// const arr:number[]=[];

// for (let i = 0; i < 5; i++) {
//    arr.push(+prompt());
// }
// console.log(arr.reduce((sum,el)=> sum+el,0));

// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

// const str:string[]=[];

//  for (let i = 0; i < 5; i++) {
//     str.push(prompt());}
//     console.log(str.some(el=>el.length>5));

// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2

// const num: number[]=[1,2,3,4,5,6,7,8,9];
// const addSum = num.filter(n=>n%3===0 && n%2 !==0) ;
// console.log(addSum);

//6. Создайте массив строк и объедините все элементы в одну строку без пробелов

// const str:string[]=['apple','banana','cherry'];
// const newStr=str.join('')
// console.log(newStr);

//7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
//заполняет массив. Необходимо создать массив только из чисел.

// const arr: number[] = [];

// for (let i = 0; i < 5; i++) {
//     const input = prompt(); 
//     const num = Number(input); 
//     if (!isNaN(num)) { 
//         arr.push(num); 
//     } else {
//         console.log("Это не число, попробуйте снова.");
//         i--; 
//     }
// }

// console.log(arr);

//8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
// const str:string[]=['apple','banana','cherry'];

//     console.log(str.some(el=>el===el.split('').reverse().join('')));

// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

// const arr: (number | string)[] = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(prompt());
// }
// let res:(number | string)[]=[]
// for (let i = 0; i < arr.length; i++) {
// if(!res.includes(arr[i])) res.push(arr[i])

// }

// console.log(res);

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

// const arr: string[] = [];
// const str: string[] = ['a', 'e', 'i', 'o', 'u'];

// for (let i = 0; i < 3; i++) {
//     arr.push(prompt());
// }
// const res: string[] = [];
// for (let i = 0; i < arr.length; i++) {
//     const result = arr[i].split('').filter(el => str.includes(el))
//     res.push(result.join(''));
// }

// console.log(res);

// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// const emailArray: string[] = ["test@example.com", "invalid-email", "user@domain.com"];
// const allValidEmails: boolean = emailArray.every(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
// console.log(allValidEmails);

// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

// const numberArray: number[] = [10, 20, 30, 40, 50];
// const oddIndexSum: number = numberArray.reduce((acc, curr, index) => index % 2 !== 0 ? acc + curr : acc, 0);
// console.log(oddIndexSum);

// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// const numsArray: number[] = [1, 2, 3, 4, 5, 6];
// const parityArray: string[] = numsArray.map(num => (num % 2 === 0 ? "чет" : "нечет"));
// console.log(parityArray);

// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// const str: string = "hello world";
// const obj={}

// for (let i = 0; i < str.length; i++) {
//    if(!obj[str[i]])
//    {
//     obj[str[i]]=1
//    } else{
//      obj[str[i]]+=1
//    }


// }
// console.log(obj);

// let count:number=0;
// let value: string="";
// for(let key in obj){
//     if(obj[key]>count){
//         count = obj[key];
//         value=key;
//     }
// }
// console.log(count);
// console.log(value);

//15 На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const arr: string[]= ['hschool', 'company'];
// const newArr: string[]=[];
// arr.forEach(el=> newArr.push(`!${el}`));
// console.log(newArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const arr:number[]=[1,2,3,4,5];
// let res:boolean=arr.every((value,i)=> {
// if (i === 0) return true; 
//     return value > arr[i - 1];

// },0)
// console.log(res);

// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами

// const arr:number[]=[1,12,93,84,5];
// let value:number=0;
// let max:number=0;
// for (let i = 1; i < arr.length; i++) {
//    value=arr[i]-arr[i-1];
//    if(value>max) max=value;

// }
// console.log(max);

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// interface iBooks  {
//         title: string;
//         author: string;
//         year: number;
//     }

// const books: iBooks[] = [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         year: 1869
//     },
//     {
//         title: "Преступление и наказание", 
//         author: "Достоевский",
//         year: 1866
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         year: 1967
//     },
//     {
//         title: "Собачье сердце",
//         author: "Булгаков", 
//         year: 1925
//     },
//     {
//         title: "Мёртвые души",
//         author: "Гоголь",
//         year: 1842
//     }
// ];

// const res: iBooks[]= books.filter(el=> el.author==='Булгаков');
// console.log(res);

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// interface iBooks {
//     title: string;
//         author: string;
//         price: number;
// }
// const books = [
//     {
//         title: "Гарри Поттер и философский камень",
//         author: "Роулинг",
//         price: 65
//     },
//     {
//         title: "Властелин колец", 
//         author: "Толкин",
//         price: 80
//     },
//     {
//         title: "1984",
//         author: "Оруэлл",
//         price: 45
//     },
//     {
//         title: "Три товарища",
//         author: "Ремарк", 
//         price: 55
//     },
//     {
//         title: "Маленький принц",
//         author: "Сент-Экзюпери",
//         price: 30
//     },
//     {
//         title: "Атлант расправил плечи",
//         author: "Рэнд",
//         price: 120
//     },
//     {
//         title: "Шерлок Холмс",
//         author: "Дойл",
//         price: 42
//     }
// ];

// const res: iBooks[]= books.filter(el=> el.price>50);
// console.log(res);

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// interface iBooks {
//     title: string;
//     author: string;
//     count: number;
// }
// const books = [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         count: 1225
//     },
//     {
//         title: "Преступление и наказание",
//         author: "Достоевский",
//         count: 671
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         count: 470
//     },
//     {
//         title: "Анна Каренина",
//         author: "Толстой",
//         count: 864
//     },
//     {
//         title: "Братья Карамазовы",
//         author: "Достоевский",
//         count: 796
//     },
//     {
//         title: "Тихий Дон",
//         author: "Шолохов",
//         count: 1500
//     }
// ];


// const res: iBooks | undefined = books.reduce((prev, current) => {
//     return (prev.count > current.count) ? prev : current;
// });
// console.log(res);

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const text = "Программирование это очень увлекательная и интересная деятельность";
// const arr:Array<string>=text.split(' ');
// let maxLength=0;
// for (let i = 0; i < arr.length; i++) {
//    arr[i].length-1>maxLength? maxLength=arr[i].length-1: arr[i].length-1;

// }
// console.log(maxLength);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// interface iemployees{
//     name: string;
//     salary:number;
// }
// const employees = [
//     {
//         name: "Алексей",
//         salary: 50000
//     },
//     {
//         name: "Мария",
//         salary: 65000
//     },
//     {
//         name: "Петр",
//         salary: 45000
//     },
//     {
//         name: "Елена",
//         salary: 70000
//     },
//     {
//         name: "Дмитрий",
//         salary: 55000
//     },
//     {
//         name: "Анна",
//         salary: 60000
//     }
// ];
// const res: number = employees.reduce((sum,el) => sum+=el.salary,0);

// console.log(res/employees.length);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iproducts {
    name: string;
    price: number;
    quantity: number;
}
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
const res: number= products.reduce((sum,el)=> sum+(el.price*el.quantity),0);
console.log(res);
