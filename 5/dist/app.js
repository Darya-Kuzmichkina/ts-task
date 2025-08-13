// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
class NumberOperations {
    arr;
    constructor(arr) {
        this.arr = arr;
    }
    getMax() {
        return this.arr.reduce((acc, el) => el > acc ? acc = el : acc, 0);
    }
    getMin() {
        return this.arr.reduce((acc, el) => el < acc ? acc = el : acc);
    }
    getSum() {
        return this.arr.reduce((sum, el) => sum + el, 0);
    }
    getAverage() {
        return this.arr.reduce((sum, el) => (sum + el) / this.arr.length, 0);
    }
    getAboveAverage() {
        return this.arr.filter(el => el > this.getAverage());
    }
    sortAscending() {
        return [...this.arr].sort((a, b) => a - b);
    }
    getMsortDescendingax() {
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
