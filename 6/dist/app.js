//                                                  НАСЛЕДОВАНИЕ И ПОЛИМОРФИЗМ
// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.
// class StringArray {
//     strings: string[];
//     constructor(strings: string[]) {
//         this.strings = strings;
//     }
// }
// class FilteredStringArray extends StringArray {
//     filterLong(minLength: number): string[] {
//         return this.strings.filter(str => str.length > minLength);
//     }
// }
// const filteredStrings = new FilteredStringArray(["hello", "world", "typescript"]);
// console.log(filteredStrings.filterLong(5)); 
// 2. Создать базовый класс NumberArray, который хранит массив чисел и предоставляет метод
// getArray() для его получения. Создать класс-наследник FilteredNumberArray, который добавляет
// свойство threshold и метод sumAboveThreshold() — возвращает сумму чисел из массива родителя,
// больших порога.
// [1, 2, 3, 4, 5], порог 3 → sumAboveThreshold() = 9
// [10, 20, 30], порог 15 → sumAboveThreshold() = 50
// class NumberArray{
//     num:number[];
//     constructor(num:number[]){
//         this.num=num;
//     }
//     getArray(){
// return this.num;
//     }
// }
// class FilteredNumberArray extends NumberArray{
//  threshold: number;
//     constructor(numbers: number[], threshold: number) {
//         super(numbers);
//         this.threshold = threshold;
//     }
//     sumAboveThreshold(){
//         return this.num.filter(n => n > this.threshold).reduce((acc, num) => acc + num, 0);
//     }
// }
// const filteredNumbers = new FilteredNumberArray([1, 2, 3, 4, 5], 3);
// console.log(filteredNumbers.sumAboveThreshold());
// 3. Базовый класс StringProcessor с методом process(), который возвращает строку в верхнем регистре.
// Наследник ReversedStringProcessor переопределяет process() и возвращает перевёрнутую строку
// в большом регистре.
// "hello" → "HELLO" (родитель)
// "hello" → “OLLEH" (наследник)
// class StringProcessor {
//     text: string;
//     constructor(text: string) {
//         this.text = text;
//     }
//     process(): string {
//         return this.text.toUpperCase();
//     }
// }
// class ReversedStringProcessor extends StringProcessor {
//     process(): string {
//         return this.text.toUpperCase().split('').reverse().join('');
//     }
// }
// const processor = new ReversedStringProcessor("hello");
// console.log(processor.process()); 
// 4. Создать базовый класс ObjectFilter с методом filterKeys() — возвращает все ключи объекта,
// начинающиеся с буквы "a". Создать класс-наследник FilteredObjectLength с дополнительным
// методом filterLongKeys() — возвращает ключи из родителя, длина которых больше 3.
// { age: 20, amount: 50, name: "Bob" } → ["age", "amount"] (родитель)
// { age: 20, amount: 50, name: "Bob" } → ["amount"] (наследник)
// class ObjectFilter {
//     obj: Record<string, any>;
//     constructor(obj: Record<string, any>) {
//         this.obj = obj;
//     }
//     filterKeys(): string[] {
//         return Object.keys(this.obj).filter(key => key.startsWith('a'));
//     }
// }
// class FilteredObjectLength extends ObjectFilter {
//     filterLongKeys(): string[] {
//         return this.filterKeys().filter(key => key.length > 3);
//     }
// }
// const objFilter = new FilteredObjectLength({ age: 20, amount: 50, name: "Bob" });
// console.log(objFilter.filterLongKeys()); 
// 5. Базовый класс NumberFilter с методом filterEven() — возвращает только чётные числа. Наследник
// NumberFilterDivisible переопределяет метод и возвращает числа, делящиеся на заданное число n.
// [1, 2, 3, 4, 5], n=2 → [2, 4] (родитель)
// class NumberFilter {
//     numbers: number[];
//     constructor(numbers: number[]) {
//         this.numbers = numbers;
//     }
//     filterEven(): number[] {
//         return this.numbers.filter(num => num % 2 === 0);
//     }
// }
// class NumberFilterDivisible extends NumberFilter {
//     n: number;
//     constructor(numbers: number[], n: number) {
//         super(numbers);
//         this.n = n;
//     }
//     filterEven(): number[] {
//         return this.numbers.filter(num => num % this.n === 0);
//     }
// }
// const divisibleFilter = new NumberFilterDivisible([1, 2, 3, 4, 5], 2);
// console.log(divisibleFilter.filterEven()); 
// 6. Базовый класс хранит текст. Наследник добавляет метод getWordsStartingWith(letter) —
// возвращает слова, начинающиеся с указанной буквы.
// class TextStorage {
//     text: string;
//     constructor(text: string) {
//         this.text = text;
//     }
//     getWordsStartingWith(letter: string): string[] {
//         return this.text.split(' ').filter(word => word.startsWith(letter));
//     }
// }
// class FilteredTextStorage extends TextStorage {
//     getWordsStartingWith(letter: string): string[] {
//         return this.text.split(' ').filter(word => word.startsWith(letter) && word.length > 3);
//     }
// }
// const textStorage = new FilteredTextStorage("apple banana aaaa");
// console.log(textStorage.getWordsStartingWith("a"));
// 7. Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)
// class TextFilter {
//     text: string;
//     constructor(text: string) {
//         this.text = text;
//     }
//     filterWords(): string[] {
//         return this.text.split(' ').filter(word => /^[A-Z]/.test(word));
//     }
// }
// class LongWordFilter extends TextFilter {
//     filterWords(): string[] {
//         return this.text.split(' ').filter(word => /^[A-Z]/.test(word) && word.length > 5);
//     }
// }
// const longWordFilter = new LongWordFilter("Hello World from TypeScript");
// console.log(longWordFilter.filterWords()); 
// 8. Базовый класс ArrayUpper с методом toUpperCaseArray() — возвращает все строки в верхнем
// регистре. Наследник FilteredArrayUpper переопределяет метод и возвращает только строки
// длиной больше 3.
// [“a”, “ab”, “abc”, “abcd”] → [“A”, “AB”, “ABC”, “ABCD”] (родитель)
// [“a”, “ab”, “abc”, “abcd”] → [“ABCD”] (наследник)
// class ArrayUpper {
//     strings: string[];
//     constructor(strings: string[]) {
//         this.strings = strings;
//     }
//     toUpperCaseArray(): string[] {
//         return this.strings.map(str => str.toUpperCase());
//     }
// }
// class FilteredArrayUpper extends ArrayUpper {
//     toUpperCaseArray(): string[] {
//         return this.strings.filter(str => str.length > 3).map(str => str.toUpperCase());
//     }
// }
// const filteredArray = new FilteredArrayUpper(["a", "ab", "abc", "abcd"]);
// console.log(filteredArray.toUpperCaseArray()); 
// 9. Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.
// class Multiplier {
//     numbers: number[];
//     constructor(numbers: number[]) {
//         this.numbers = numbers;
//     }
//     multiplyByTwo(): number[] {
//         return this.numbers.map(num => num * 2);
//     }
// }
// class CustomMultiplier extends Multiplier {
//     multiplyByTwo(): number[] {
//         return this.numbers.filter(num => num % 2 === 0);
//     }
// }
// const customMultiplier = new CustomMultiplier([1, 2, 3, 4, 5]);
// console.log(customMultiplier.multiplyByTwo()); 
//                                                АБСТРАКЦИЯ И ИНКАПСУЛЯЦИЯ
// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49
// abstract class Shape{
//     abstract calculateArea(): number;
// }
// class Rectangle extends Shape {
//     constructor( public length:number,public width:number){
//         super();}
//         calculateArea():number{
//             return this.length*this.width;
//     }
// }
// const res=new Rectangle(2,3);
// console.log(res.calculateArea());
// 2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// abstract class Animal {
//     abstract makeSound(): string;
// }
// class Dog extends Animal {
//     makeSound(): string {
//         return "Гав-гав";
//     }
// }
// class Cat extends Animal {
//     makeSound(): string {
//         return "Мяу";
//     }
// }
// const dog = new Dog();
// console.log(dog.makeSound()); 
// const cat = new Cat();
// console.log(cat.makeSound()); 
// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку.
// interface iAccount {
//     getBalance(): number;
//     deposit(amount: number): void;
//     withdraw(amount: number): void;
// }
// class Account implements iAccount {
//     balance: number = 50;
//     getBalance(): number {
//         return this.balance;
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//     withdraw(amount: number): void {
//         if (amount > this.balance) {
//             throw new Error("Недостаточно средств");
//         }
//         this.balance -= amount;
//     }
// }
// const account = new Account();
// account.deposit(100);
// console.log(account.getBalance()); 
// account.withdraw(50);
// console.log(account.getBalance());
// 4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).
// Входные:
// let car = new Car();
// car.start();
// → Результат: Car started
// Входные:
// let car = new Car();
// car.stop();
// → Результат: Car stopped
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.start();
// → Результат: Motorcycle started
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.stop();
// → Результат: Motorcycle stopped
// abstract class Vehicle {
//     abstract start(): void;
//     abstract stop(): void;
// }
// class Car extends Vehicle {
//     start(): void {
//         console.log("Car started");
//     }
//     stop(): void {
//         console.log("Car stopped");
//     }
// }
// class Motorcycle extends Vehicle {
//     start(): void {
//         console.log("Motorcycle started");
//     }
//     stop(): void {
//         console.log("Motorcycle stopped");
//     }
// }
// const car = new Car();
// car.start(); 
// car.stop(); 
// const motorcycle = new Motorcycle();
// motorcycle.start(); 
// motorcycle.stop();
// 5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
// возвращать информацию о яблоке из массива fruits, где title равно
// "яблоко"
// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
// 45} ]
// → Результат: {"id": 1, "title": "яблоко", "price": 50}
// Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null
// interface iFruit {
//     id: number;
//     title: string;
//     price: number;
// }
// abstract class Fruit {
//     abstract arr: iFruit[];
// }
// class Apple extends Fruit {
//     arr: iFruit[];
//     constructor(fruits: iFruit[]) {
//         super();
//         this.arr = fruits;
//     }
//     getAppleInfo(): iFruit[] {
//  return this.arr.filter(fr=> fr.title==='яблоко')
//     }
// }
// const apple= new Apple([ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
// 45} ]);
// console.log(apple.getAppleInfo());
// 6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса
// interface iValidation{
//     isValidEmail():boolean;
//     isValidDate():boolean;
//     isValidPath():boolean;
// }
// class Validation implements iValidation{
//     constructor(public email:string,public date:string,public path:string){
// this.email=email;
// this.date=date;
// this.path=path;
//     }
//     isValidEmail(): boolean {
//         const emailRegex=/^[A-Za-z0-9\.\-\_]+@[a-z]+\.[a-z]{2,3}$/gm;
//         return emailRegex.test(this.email);
//     }
//      isValidDate(){
//         const dateRegex=/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}/gm;
//         return dateRegex.test(this.date);
//      }
//      isValidPath(): boolean {
//          const pathRegex= /[A-Z]\:\\[A-Za-z]+\\[A-Za-zа-яА-Я]+\\[A-Za-zа-яА-Я]+\\[A-Za-zа-яА-Я]+/gm;
//          return pathRegex.test(this.path);
//      }
// }
// const res= new Validation('example@mail.com',
// '10.08.2025', 'C:\\Users\\ИмяПользователя\\Documents\\МояПапка');
// console.log(res.isValidDate());
// console.log(res.isValidEmail());
// console.log(res.isValidPath());
