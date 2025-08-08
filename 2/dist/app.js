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
const arr = [1, 12, 93, 84, 5];
let value = 0;
let max = 0;
for (let i = 1; i < arr.length; i++) {
    value = arr[i] - arr[i - 1];
    if (value > max)
        max = value;
}
console.log(max);
