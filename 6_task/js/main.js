let start = document.getElementById("start");
// console.log(start);

let budjetValue = document.getElementsByClassName("budget-value");
let dayBudjetValue = document.getElementsByClassName("daybudget-value");
let levelValue = document.getElementsByClassName("level-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName("income-value");
let monthSavingValue = document.getElementsByClassName("monthsavings-value");
let yearSavingValue = document.getElementsByClassName("yearsavings-value");
// console.log(budjetValue, dayBudjetValue, levelValue, expensesValue, optionalExpensesValue, incomeValue, monthSavingValue, yearSavingValue);

let expensesItem1 = document.getElementsByClassName("expenses-item")[0];
let expensesItem2 = document.getElementsByClassName("expenses-item")[1];
let expensesItem3 = document.getElementsByClassName("expenses-item")[2];
let confirmExpenses = document.getElementsByTagName("button")[0];
// console.log(expensesItem1, expensesItem2, expensesItem3, confirmExpenses);

let optionalExpensesItem1 = document.querySelectorAll(".optionalexpenses-item")[0];
let optionalExpensesItem2 = document.querySelectorAll(".optionalexpenses-item")[1];
let optionalExpensesItem3 = document.querySelectorAll(".optionalexpenses-item")[2];
let confirmOptionalExpenses = document.getElementsByTagName("button")[1];
// console.log(optionalExpensesItem1, optionalExpensesItem2, optionalExpensesItem3, confirmOptionalExpenses);

let countBudget = document.getElementsByTagName("button")[2];
// console.log(countBudget);

let income = document.querySelector("#income");
let savings = document.querySelector("#savings");
let sum = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");
// console.log(income, savings, sum, percent, yearValue, monthValue, dayValue);

let money, time;
function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}

start();

appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expenseItem = prompt(
                "Введите обязательную статью расходов в этом месяце",
                ""
            );
            let priceExpenseItem = prompt("Во сколько обойдется", "");
            if (
                typeof expenseItem === "string" &&
                typeof expenseItem != null &&
                typeof priceExpenseItem != null &&
                expenseItem != "" &&
                priceExpenseItem != "" &&
                expenseItem.length < 50
            ) {
                console.log("done");
                appData.expenses[expenseItem] = priceExpenseItem;
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        const numberOfDaysInMonth = 30;
        appData.moneyPerDay = Math.round(+appData.budget / numberOfDaysInMonth);
        console.log(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.dailyBudget < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.dailyBudget < 2000 && appData.dailyBudget > 100) {
            console.log("Средний уровень достатка");
        } else if (appData.dailyBudget > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений? ", "");
            let percent = +prompt("Под какой процент?", "");
            appData.monthIncore = (save / 100 / 12) * percent;
            alert("Доход в месяц с вашего депозита " + appData.monthIncore);
        }
    },
    chooseOptExpenses: function() {
        for (let id = 0; id < 3; id++) {
            let optExpensesItem = prompt("Статья необязательный расходов?", "");
            appData.optionalExpenses.id = optExpensesItem;
        }
    },
    chooseIncome: function(callbackfn, thisArg) {
        let items = prompt(
            "Что принесет дополнительный доход? (Перечисли через запятую)",
            ""
        );
        if (typeof items !== "string" || items === "" || !items) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
            let messageText = "Способы доп.заработка: \n";
            appData.income.forEach(function(item, i) {
                messageText += `${i + 1}: ${item}\n`;
            });
            alert(messageText);
        }
    },
    showObjectProperties: function() {
        let messageText = "Наша программа включает в себя данные: \n";
        function searchObjectProprtiers() {
            for (let prop in appData) {
                messageText += `${prop},\n`;
            }
            return messageText;
        }
        searchObjectProprtiers();
        alert(messageText);
    }
};

appData.showObjectProperties();