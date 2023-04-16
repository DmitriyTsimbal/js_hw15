//Розробити клас MultChecker для перевірки таблиці множення
// Поля:
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи:
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран


class MultChecker {
    constructor(number) {
        this.number = number;
        this.rightAnswers = 0;
        this.wrongAnswers = 0;
    }
    getRandomNumber(){
        return Math.floor(Math.random() * 9);
    }
    generateExercise() {
        const randomNumber = this.getRandomNumber();
        const answer = this.number * randomNumber;
        const userInput = parseInt(prompt(`${this.number} • ${randomNumber}`));
        return {answer, userInput}
    }
    checkResult() {
        do {
            const {answer, userInput} = this.generateExercise()
            answer === userInput ? this.rightAnswers++ : this.wrongAnswers++
        } while (confirm('Do you want to continue?'))
    }

    render(){
        document.write(`Number of correct answers: ${ this.rightAnswers }<br>
        Number of wrong answers: ${ this.wrongAnswers }
`)
    }
}

let mulCheck = new MultChecker(4)
mulCheck.checkResult()
mulCheck.render()