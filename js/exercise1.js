//Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості): Масив, у якому зберігається поле з зайцями
// Методи (дії): Метод пострілу (задається позиція пострілу); Виведення ігрового поля

let shootingRange = {
    fieldWithHares: new Array(20),
    haresNumber: 4,

    fillHaresField() {
        this.fieldWithHares.fill(0);
        const arrLength = this.fieldWithHares.length;
        for (let i = 0; i < this.haresNumber;) {
            const idx = Math.floor(Math.random() * arrLength);
            if (this.fieldWithHares[idx] === 0) {
                this.fieldWithHares[idx] = 1;
                i++;
            }
        }
    },
    shootingRangeGame() {
        let userInput;
        let shootNumber = 0;
        alert(`Yoy need to hit ${this.haresNumber} rabbits!`)
        while (shootNumber < this.haresNumber){
            userInput = parseInt(prompt(`Select the sector where you want to shoot(1-${this.fieldWithHares.length})`));
            if (this.fieldWithHares[userInput-1] === 1){
                this.fieldWithHares[userInput-1] = 0;
                shootNumber++;
                alert('You hit the hare!');
            } else alert('You missed the hare!');
            if (shootNumber === this.haresNumber) alert('You hit the all hares. You won!');
        }
    },
}

shootingRange.fillHaresField()

shootingRange.shootingRangeGame()