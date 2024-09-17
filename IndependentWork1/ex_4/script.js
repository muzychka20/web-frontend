// Завдання 4: Обчислення факторіалу числа (користувач вводить число через prompt)

function factorial(n) {    
    return n == 1 ? n : n * factorial(n - 1);
}

n = parseInt(prompt("n = "));
console.log(factorial(n));