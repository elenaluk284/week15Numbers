// Создаем пустой массив с именем numbers
let numbers = [];

// Заполняем массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

// Удаляем все отрицательные числа из массива
numbers = numbers.filter(num => num >= 0);

// Возводим каждое число в квадрат
numbers = numbers.map(num => num ** 2);

// Отсортировываем числа в порядке убывания
numbers.sort((a, b) => b - a);

// Выводим полученный массив numbers в консоль
console.log(numbers);