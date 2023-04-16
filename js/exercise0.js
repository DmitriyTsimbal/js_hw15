// Дано два об'єкти. Обидва містять масив цілих чисел.
// При цьому в одному з них є функція знаходження суми, а в іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значеннях.
// Використати обидва методи стосовно обидвох об'єктів (використати call, apply)



const numsObj1 = {
    numbers: [438, 826, 117, 971, 238, 506, 789, 651, 939, 725, 124, 708, 357, 809, 600, 842, 905, 393, 288, 608, 626, 216, 820, 863, 487, 869, 605, 292, 176, 723],
    getSum(startRange, endRange) {
        return this.numbers.slice(startRange, endRange + 1).reduce((a, b) => a + b, 0);
    },
};

const numsObj2 = {
    numbers: [189, 701, 827, 429, 967, 127, 929, 534, 563, 451, 241, 398, 764, 476, 121, 427, 642, 338, 763, 955, 122, 851, 822, 462, 703, 759, 624, 434, 175, 982],
    getProduct(startRange, endRange) {
        return this.numbers.slice(startRange, endRange + 1).reduce((a, b) => a * b, 1);
    },
};

document.write(`Product of numbers in range 2 - 5 in object 1 using call method: ${numsObj2.getProduct.call(numsObj1,2,5)}<hr>`);
document.write(`Sum of numbers in range 2 - 5 in object 2 using apply method: ${numsObj1.getSum.apply(numsObj2,[2,5])}`);
