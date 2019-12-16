let start = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName(
  "optionalexpenses-value"
)[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingValue = document.getElementsByClassName("monthsavings-value")[0];
let yearSavingValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.getElementsByClassName("expenses-item");
let confirmExpenses = document.getElementsByTagName("button")[0];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
let confirmOptionalExpenses = document.getElementsByTagName("button")[1];

let countBudget = document.getElementsByTagName("button")[2];

let incomeItem = document.querySelector("#income");
let checkSavings = document.querySelector("#savings");
let sumValue = document.querySelector("#sum");
let percentValue = document.querySelector("#percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let money, time;
confirmExpenses.disabled = true;
confirmOptionalExpenses.disabled = true;
countBudget.disabled = true;

start.addEventListener("click", function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");
  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  confirmExpenses.disabled = false;
  confirmOptionalExpenses.disabled = false;
  countBudget.disabled = false;
});

confirmExpenses.addEventListener("click", function() {
  let amountExpenses = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let expenseItem = expensesItem[i].value;
    let priceExpenseItem = expensesItem[++i].value;
    if (
      typeof expenseItem === "string" &&
      typeof expenseItem != null &&
      typeof priceExpenseItem != null &&
      expenseItem != "" &&
      priceExpenseItem != "" &&
      expenseItem.length < 50
    ) {
      appData.expenses[expenseItem] = priceExpenseItem;
      amountExpenses += +priceExpenseItem;
    } else {
      i--;
    }
  }
  expensesValue.textContent = amountExpenses;
});

confirmOptionalExpenses.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let optExpensesItem = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = optExpensesItem;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudget.addEventListener("click", function() {
  let amountExpenses=0;
  for (let key in appData.expenses) {
    amountExpenses += +appData.expenses[key];
  }

  if (appData.budget !== undefined) {
    const numberOfDaysInMonth = 30;
    appData.moneyPerDay = Math.round((+appData.budget - amountExpenses) / numberOfDaysInMonth);
    dayBudgetValue.textContent = appData.moneyPerDay;
    console.log(appData.budget);
    console.log(appData.expenses);
    console.log(appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener("input", function() {
  let items = income.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
  console.log(appData);
});

checkSavings.addEventListener("click", function() {
  appData.savings = !appData.savings;
  console.log(appData);
});

sumValue.addEventListener("input", function() {
  if (appData.savings) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncore = (sum / 100 / 12) * percent;
    appData.yearIncore = (sum / 100) * percent;

    monthSavingValue.textContent = appData.monthIncore.toFixed(1);
    yearSavingValue.textContent = appData.yearIncore;
  }
});

percentValue.addEventListener("input", function() {
  if (appData.savings) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncore = (sum / 100 / 12) * percent;
    appData.yearIncore = (sum / 100) * percent;

    monthSavingValue.textContent = appData.monthIncore.toFixed(1);
    yearSavingValue.textContent = appData.yearIncore;
  }
});

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
