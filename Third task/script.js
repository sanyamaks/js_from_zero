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
  savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

console.log(appData);

function detectDayBudget() {
  const numberOfDaysInMonth = 30;
  appData.moneyPerDay = Math.round(+appData.budget / numberOfDaysInMonth);
  console.log(appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.dailyBudget < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.dailyBudget < 2000 && appData.dailyBudget > 100) {
    console.log("Средний уровень достатка");
  } else if (appData.dailyBudget > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений? ", "");
    let percent = +prompt("Под какой процент?", "");
    appData.monthIncore = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита " + appData.monthIncore);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let id=0; id<3; id++){
    let optExpensesItem = prompt("Статья необязательный расходов?", "");
    appData.optionalExpenses.id = optExpensesItem;
  }
}

chooseOptExpenses();