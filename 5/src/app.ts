// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.

// interface IObj {
//     width: number;
//     heigth: number;
//     getArea(): number
// }
// class Rectangle implements IObj {
//     width: number;
//     heigth: number;

//     constructor(width: number, heigth: number) {
//         this.width = width;
//         this.heigth = heigth;
//     }
//     getArea(): number {
//         return this.width * this.heigth;
//     }
// }
// const res= new Rectangle(5,10);
// console.log(res.getArea());

// 2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.

// interface ICalculator {
//     add(a: number, b: number): number;
//     subtract(a: number, b: number): number;
//     multiply(a: number, b: number): number;
//     divide(a: number, b: number): number;
// }

// class Calculator implements ICalculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }

//     subtract(a: number, b: number): number {
//         return a - b;
//     }

//     multiply(a: number, b: number): number {
//         return a * b;
//     }

//     divide(a: number, b: number): number {
//         if (b === 0) throw new Error("Division by zero");
//         return a / b;
//     }
// }

// const calculator = new Calculator();
// console.log(calculator.add(5, 3)); 
// console.log(calculator.subtract(5, 3)); 

// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2
// interface IObj {
//     radius: number;
//     getArea(): number;
// }
// class CircleR implements IObj {
//     radius:number;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     getArea() {
//         return (3.14 * Math.pow(this.radius,2))
//     }
// }
// const res= new CircleR(3);
// console.log(res.getArea());

// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
// продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
// displayProductInfo().

// interface IProduct {
//     title: string;
//     price: number;
// }

// class Product implements IProduct {
//    title: string;
//     price: number;
//     products: IProduct[];

//     constructor() {
//         this.products = [];
//     }

//     addProduct(title: string, price: number) {
//         this.products.push({ title, price });
//     }

//     displayProductInfo(): void {
//         const filteredProducts = this.products.filter(product => product.price > 20);
//         console.log(filteredProducts);
//     }
// }

// const product = new Product();
// product.addProduct("Яблоко", 15);
// product.addProduct("Груша", 25);
// product.displayProductInfo(); 

// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.

// interface IBook {
//     title: string;
//     author: string;
//     year: number;
//     genre: string;
// }

// class Library  implements IBook{
//     title: string;
//     author: string;
//     year: number;
//     genre: string;
//     books: IBook[];

//     constructor() {
//         this.books = [
//             { title: "Война и мир", author: "Толстой", year: 1225, genre: 'роман' },
//             { title: "Преступление и наказание", author: "Достоевский", year: 1671, genre: 'роман' },
//             { title: "Мастер и Маргарита", author: "Булгаков", year: 1970, genre: 'повесть' },
//             { title: "Анна Каренина", author: "Толстой", year: 1864, genre: 'драма' },
//             { title: "Братья Карамазовы", author: "Достоевский", year: 1996, genre: 'рассказ' },
//             { title: "Тихий Дон", author: "Шолохов", year: 1900, genre: 'роман' }
//         ];
//     }

//     addBook(book: IBook): void {
//         this.books.push(book);
//     }

//     removeBookByTitle(title: string): void {
//         this.books = this.books.filter(book => book.title !== title);
//     }

//     getBooksByAuthor(author: string): IBook[] {
//         return this.books.filter(book => book.author === author);
//     }

//     getBooksByYear(year: number) {
//         return this.books.filter(book => book.year === year);
//     }

//     getBooksByGenre(genre: string) {
//         return this.books.filter(book => book.genre === genre);
//     }
// }


// const library = new Library();
// console.log(library.getBooksByAuthor("Толстой"));
// library.removeBookByTitle("Анна Каренина");
// console.log(library.books); 

// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число)

// interface INumberStats {
//     numbers: number[];
//     getMode(): number | undefined;
// }

// class NumberStats implements INumberStats {
//     numbers: number[];

//     constructor(numbers: number[]) {
//         this.numbers = numbers;
//     }

//     getMode(): number | undefined {
//         const frequency: { [key: number]: number } = {};
//         let maxCount = 0;
//         let mode: number | undefined;

//         for (const num of this.numbers) {
//             frequency[num] = (frequency[num] || 0) + 1;
//             if (frequency[num] > maxCount) {
//                 maxCount = frequency[num];
//                 mode = num;
//             }
//         }
//         return mode;
//     }
// }
// const res=new NumberStats([1,2,2,3,3,5,3]);
// console.log(res.getMode());


// 7. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.

interface IObj {
    arr: number[];
    getMax(): number;
    getMin(): number;
    getSum(): number;
    getAverage(): number;
    getAboveAverage(): number[];
    sortAscending(): number[];
    getMsortDescendingax(): number[];
}
class NumberOperations implements IObj {
    arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    getMax() {
        return this.arr.reduce((acc, el) => el > acc ? acc = el : acc, 0)
    }
    getMin() {
        return this.arr.reduce((acc, el) => el < acc ? acc = el : acc)
    }
    getSum() {
        return this.arr.reduce((sum, el) => sum + el, 0)
    }
    getAverage() {
        return this.arr.reduce((sum, el) => (sum + el)/this.arr.length, 0);
        
    }
    getAboveAverage() {
return this.arr.filter(el=> el>this.getAverage())
    }
 sortAscending(): number[] {
        return [...this.arr].sort((a, b) => a - b);
    }

    getMsortDescendingax(): number[] {
        return [...this.arr].sort((a, b) => b - a);
    }
}
const res = new NumberOperations([2, 1, 3, 7, 4, 9, 555, 7432, 6]);
console.log(res.getMax());
console.log(res.getMin());
console.log(res.getSum());
console.log(res.getAverage());
console.log(res.getAboveAverage());
console.log(res.getMsortDescendingax());
console.log(res.sortAscending());
