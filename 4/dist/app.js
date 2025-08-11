// 1. Напиши функцию wrapInArray<T>, которая принимает значение любого типа и возвращает массив, содержащий это значение.
// wrapInArray(5) // [5]
// wrapInArray("hi") // ["hi"]
// function wrapInArray<T>(value:T){
//     return [value];
// }
// console.log(wrapInArray<number>(5));
// console.log(wrapInArray<string>('hi'));
// 2. Напиши функцию printKey<T, K extends keyof T>, которая принимает объект и ключ, и выводит значение этого ключа.
// printKey({name: "Alex", age: 25}, "name") // Alex
// function printKey<T, K extends keyof T>(obj:T,str:K){
// if(typeof obj==="object" && typeof str==='string') obj[str]
// }
// interface IObj{
//     name: string;
//     age: number;
// }
// console.log( printKey<IObj,any>({name: "Alex", age: 25}, "name"));
// 3. Напиши функцию mergeObjects<T, U>, которая объединяет два объекта в один.
// mergeObjects({a: 1}, {b: 2}) // {a: 1, b: 2}
// function mergeObjects<T, U>(obj1: T, odj2: U) {
// return {...obj1,...odj2}
// }
// interface Iobj1 {
//     a: number;
// }
// interface Iobj2 {
//     b: number;
// }
// console.log( mergeObjects<Iobj1,Iobj2>({a: 1}, {b: 2}) );
// 4. Напиши функцию doubleOrRepeat<T>, которая:
//  • Если T — число, возвращает число, умноженное на 2
//  • Если T — строка, возвращает строку, повторённую дважды
// doubleOrRepeat(5) // 10
// doubleOrRepeat("Hi") // "HiHi"
// function doubleOrRepeat<T>(value:T){
//     if(typeof value === "number") return value*2;
//     else if (typeof value === "string") return value.repeat(2);
// }
// console.log(doubleOrRepeat<number>(5));
// console.log(doubleOrRepeat<string>("hi"));
// 5. Функция transformArray<T>:
//  • Если массив чисел — возводит каждый элемент в квадрат
//  • Если массив строк — переводит в верхний регистр
// transformArray([2, 3]) // [4, 9]
// transformArray(["hi", "go"]) // ["HI", "GO"]
// function transformArray<T>(arr:T):void{
//     if(Array.isArray(arr)){
//         const res= arr.map((el)=>{
//             return typeof el == 'string'? el.toUpperCase(): el**2;
//         });
//         console.log(res);
//     }
// }
// console.log(transformArray<Array<string>>(["hi", "go"]));
// console.log(transformArray<Array<number>>([2, 3]));
// 6. Функция maxOrLongest<T>:
//  • Если числа — возвращает максимальное
//  • Если строки — возвращает самую длинную
// maxOrLongest([3, 8, 5]) // 8
// maxOrLongest(["a", "hello", "hi"]) // "hello"
function maxOrLongest(arr) {
    if (Array.isArray(arr)) {
        if (typeof arr[0] === 'number') {
            const max = Math.max(...arr);
            console.log(max);
        }
        if (typeof arr[0] === 'string') {
            const longest = arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
            console.log(longest);
        }
    }
}
maxOrLongest(["a", "hello", "hi"]);
maxOrLongest([3, 8, 5]);
