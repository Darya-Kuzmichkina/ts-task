//                                                  НАСЛЕДОВАНИЕ И ПОЛИМОРФИЗМ
class TextAnalyzer {
    str;
    constructor(str) {
        this.str = str;
    }
    getUniqueWords() {
        const words = this.str
            .toLowerCase()
            .split(/\s+/)
            .map(word => word.replace(/[^a-zA-Z0-9]/g, ''));
        const uniqueWords = [];
        for (const word of words) {
            if (word && !uniqueWords.includes(word)) {
                uniqueWords.push(word);
            }
        }
        return uniqueWords.sort();
    }
    getWordFrequency() {
        const words = this.str
            .toLowerCase()
            .split(/\s+/)
            .map(word => word.replace(/[^a-zA-Z0-9]/g, ''));
        const frequency = {};
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
