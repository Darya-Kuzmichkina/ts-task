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

