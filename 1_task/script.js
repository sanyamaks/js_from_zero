let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

console.log(appData);

function addExpenseItem () {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    let priceExpenseItem = prompt("Во сколько обойдется", "");

    appData.expenses[expenseItem] = priceExpenseItem;
}
addExpenseItem();
addExpenseItem();

const numberOfDaysInMonth = 30;
let dailyBudget = (+appData.budget)/numberOfDaysInMonth;
alert (dailyBudget);