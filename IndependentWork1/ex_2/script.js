// Завдання 2: Перевірка парних чисел значень масиву (вивести тільки парні та їх загальну кількість)

function displayEven(array) {
    amount = 0;
    array.forEach((element) => {
        if (element % 2 == 0) {
            console.log(element);
            amount++;
        }
    });
    console.log("Amount of even:" + amount);
}

displayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
