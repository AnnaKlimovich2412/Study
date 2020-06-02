'use strict'

let money = prompt("Ваш бюджет на месяц?",''),
    time = prompt("Введите дату в формате YYYY.MM.DD",'');



let appData = {
    budget:money, // здесь уброл скобки. Тут переменная а не текст
    timeData:time,// здесь уброл скобки. Тут переменная а не текст
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце",''),
    a2 = prompt("Во сколько обойдется?",''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце",''),
    a4 = prompt("Во сколько обойдется?",'');

appData.expenses.a1=a2;
appData.expenses.a3=a4;

alert(appData.budget/30);