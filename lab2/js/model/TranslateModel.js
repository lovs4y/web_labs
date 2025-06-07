class TranslateModel {
    constructor() {
        this.dictionary = {
            "some": "якийсь, просто",
            "test": "тест, тестування",
            "for": "для",
            "translation": "перекладу",
        };
    }

    translate(word) {
        return this.dictionary[word.toLowerCase().replace(/[.,!?;:]/g, "")] || null;
    }
}