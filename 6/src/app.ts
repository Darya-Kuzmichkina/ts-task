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

// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.

// class ArrayAnalyzer {
//     arr:number[];
//     constructor( arr:number[]){
//         this.arr=arr;
//     }
//     getAverage(){
//         return this.arr.reduce((acc,el)=> (acc+el)/this.arr.length,0)
//     }
//     getMax(){
//          return this.arr.reduce((max,el)=> el>max? el:max)
//     }
//     getMin(){
//          return this.arr.reduce((min,el)=> el<min? el:min)
//     }
// }
// const res=new ArrayAnalyzer([2,1,3,7,4,9,6]);
// console.log(res.getAverage());
// console.log(res.getMax());
// console.log(res.getMin());

// 8. Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке.

// class StringManipulator{
//     str:string;
//     reverseString(str:string){
//         return str.split('').reverse().join('');
//     }
// isPalindrome(str:string){
//     return str===str.split('').reverse().join('')? true:false;
// }
// countVowels(str: string): number {
//     const arr: string[] = ['e', 'u', 'i', 'o', 'a','y'];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i].toLowerCase(); 
//         if (arr.includes(char)) {
//             count++; 
//         }
//     }
//     return count; 
// }
// }
// const res=new StringManipulator();
// console.log(res.reverseString('qwerty'));
// console.log(res.isPalindrome('qwq'));
// console.log(res.countVowels('qwerty'));

// 9. Создайте интерфейс iPwd, который описывает метод showPwd. Реализуйте класс Pwd, который
// будет содержать метод showPwd, возвращающий случайно сгенерированный пароль из 8 цифр.
// Создайте класс Validation, который наследуется от Pwd и переопределяет метод showPwd,
// вызывая метод родительского класса через super и дополняя его выводом результата в консоль.

// interface iPwd{
// showPwd():string;
// }
// class Pwd{
// showPwd(){
//    let password:string='';
// for(let i=1;password.length<8;i++){
//   password+=Math.round(Math.random()*100+1);
// }
// return password;
// }
// }
// class Validation extends Pwd {
//     showPwd(): string {
//         const pwd = super.showPwd(); 
//         console.log(`пароль: ${pwd}`); 
//         return pwd; 
//     }
// }
// const res= new Validation();
// res.showPwd();

// 10 Создайте абстрактный класс University, который содержит:
// • абстрактный метод getStudentById(id: number),
// • поле students — массив объектов студентов.
// Реализуйте класс Student, который наследуется от University и реализует метод getStudentById,
// возвращающий объект студента по его ID.

// abstract class University {
//     students: { id: number; name: string }[];

//     constructor(students: { id: number; name: string }[]) {
//         this.students = students;
//     }

//     abstract getStudentById(id: number): { id: number; name: string } | undefined;
// }
// class Student extends University {
//     constructor(students: { id: number; name: string }[]) {
//         super(students); 
//     }

//     getStudentById(id: number): { id: number; name: string } | undefined {
//         return this.students.find(student => student.id === id); 
//     }
// }
// const students = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// const university = new Student(students);
// console.log(university.getStudentById(1));
// console.log(university.getStudentById(3)); 

// 11. Создайте класс Counter и интерфейс класса iCounter. У класса должно быть:
// • Приватное свойство count.
// • Публичный Метод increment — увеличивает значение счётчика на 1 и возвращает .
// • Публичный Метод decrement — уменьшает значение счётчика на 1 и возвращает .

// interface iCounter{
// increment():number;
// decrement():number;
// }
// class Counter{
//     private count=0;
//     public increment(){
// return this.count++;
//     }
//     public decrement(){
// return this.count--;
//     }

// }
// const res=new Counter();
// console.log(res.increment());
// console.log(res.decrement());

// 12. Необходимо реализовать класс QuoteGenerator, добавить интерфейс класса iQuoteGenerator,
// который содержит список приватных цитат arr и публичный метод getRandomQuote() для
// получения случайной цитаты из массива.

//  interface iQuoteGenerator{
//     getRandomQuote():string;
//  }
//  class QuoteGenerator implements iQuoteGenerator{
// private quotes :string[]= [
//  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
//  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
//  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
//  "Believe you can and you're halfway there. — Theodore Roosevelt",
//  "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
//  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
//  "It does not matter how slowly you go as long as you do not stop. — Confucius",
//  "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
//  "The best way to predict the future is to create it. — Peter Drucker",
//  "You miss 100% of the shots you don't take. — Wayne Gretzky"
//  ];
//  getRandomQuote(): string {
//      const res= Math.round(Math.random()* (this.quotes.length-1));
//      return this.quotes[res]
//  }
//  }
//  const result= new QuoteGenerator();
//  console.log(result.getRandomQuote());

//  13. Создайте интерфейс INumberStats, который описывает следующие методы:
// • getEvenNumbers(): number[] — возвращает массив всех чётных чисел.
// • getAverage(): number — возвращает среднее значение всех чисел.
// • getPositiveNumbersCount(): number — возвращает количество положительных чисел в
// массиве.
// Создайте класс NumberStats, который реализует интерфейс INumberStats.
// Класс должен принимать массив чисел number[] в конструкторе и реализовывать все методы
// интерфейса. Также добавьте инкапсуляцию: скрывайте внутренний массив чисел, позволяя
// работать с ним только через методы класса.
 
// interface INumberStats {
//     getEvenNumbers(): number[];
//     getAverage(): number; 
//     getPositiveNumbersCount(): number;
// }
// class NumberStats implements INumberStats {
//     private numbers: number[];

//     constructor(numbers: number[]) {
//         this.numbers = numbers;
//     }

//     getEvenNumbers(): number[] {
//         return this.numbers.filter((num:number) => num % 2 === 0); 
//     }

//     getAverage(): number {
//         const total = this.numbers.reduce((sum:number, num:number) => sum + num, 0);
//         return total / this.numbers.length;
//     }

//     getPositiveNumbersCount(): number {
//         return this.numbers.filter((num:number) => num > 0).length; 
//     }
// }
// const res= new NumberStats([1,2,7,4,-3,-5,0]);
// console.log(res.getAverage());
// console.log(res.getEvenNumbers());
// console.log(res.getPositiveNumbersCount());


// 14. Создайте класс User, содержащий 1 поле массива User[], где каждый объект:
// • Name = string
// • Age = number
// • Gender = 'male' | 'female'
// Создайте класс UserFilter, наследующийся от User и реализует методы:
// • filterByAge(min: number, max: number): User[] — возвращает пользователей с возрастом от
// min до max включительно
// • filterByGender(gender: 'male' | 'female'): User[] — возвращает пользователей с заданным полом

// interface iUser{ Name: string; Age: number; Gender: 'male' | 'female' }
// class User {
//     users: iUser[]=[{Name: 'Dasha', Age: 19, Gender: 'female'},{Name: 'Sasha', Age: 20, Gender: 'male'}]

//     constructor(users: iUser[]) {
//         this.users = users;
//     }
// }
// class UserFilter extends User {
//     filterByAge(min: number, max: number): iUser[] {
//         return this.users.filter(user => user.Age >= min && user.Age <= max); 
//     }

//     filterByGender(gender: 'male' | 'female'): iUser[]{
//         return this.users.filter(user => user.Gender === gender); 
//     }
// }
// const users: iUser[] = [
//     { Name: 'Dasha', Age: 19, Gender: 'female' },
//     { Name: 'Sasha', Age: 20, Gender: 'male' }
// ];

// const userFilter = new UserFilter(users);
// console.log(userFilter.filterByAge(15, 29)); 
// console.log(userFilter.filterByGender('female')); 

// 15. Создайте класс TextAnalyzer и интерфейс класса iTextAnalyzer, который принимает строку в
// конструкторе.
// Реализуйте методы:
// • getUniqueWords() — возвращает массив уникальных слов в заданной строке,
// отсортированных по алфавиту (метод sort)
// • getWordFrequency() — возвращает объект, в котором ключ — слово, значение — количество
// вхождений

interface iTextAnalyzer{
   
    getUniqueWords():string[];
    getWordFrequency():{ [word: string]: number };
}
class TextAnalyzer implements iTextAnalyzer {
    str: string;

    constructor(str: string) {
        this.str = str;
    }

    getUniqueWords(): string[] {
        const words = this.str
            .toLowerCase() 
            .split(/\s+/) 
            .map(word => word.replace(/[^a-zA-Z0-9]/g, '')); 
        
        const uniqueWords: string[] = [];
        for (const word of words) {
            if (word && !uniqueWords.includes(word)) {
                uniqueWords.push(word); 
            }
        }

        return uniqueWords.sort(); 
    }

    getWordFrequency(): { [word: string]: number } {
        const words = this.str
            .toLowerCase()
            .split(/\s+/)
            .map(word => word.replace(/[^a-zA-Z0-9]/g, '')); 
        
        const frequency: { [word: string]: number } = {};
        
        for (const word of words) {
            if (word) { 
                frequency[word] = (frequency[word] || 0) + 1; 
            }
        }

        return frequency;
    }
}
const text = "Hello world! Hello everyone. Welcome to the world of TypeScript.";
const analyzer = new TextAnalyzer(text);

console.log(analyzer.getUniqueWords()); 
console.log(analyzer.getWordFrequency()); 

// 16. Создайте интерфейс IChecker, описывающий методы:
// • hasNumbers(): boolean — строка содержит хотя бы одну цифру
// • hasUpperCase(): boolean — строка содержит хотя бы одну заглавную букву
// • hasSymbols(): boolean — строка содержит хотя бы один специальный символ (!@#$%^&*())
// Создайте класс StringChecker, который реализует интерфейс и принимает строку в
// конструкторе.
// Каждый метод должен использовать регулярные выражения для выполнения проверок

