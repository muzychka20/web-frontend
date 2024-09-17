// Завдання 1: Обчислення середнього арифметичного значення масиву

function getAverage(array) {
    let sum = array.reduce((accumulator, current) => accumulator + current);
    return (sum / array.length).toFixed(2);;
}

console.log("Average: " + getAverage([4, 5, 9]));
