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
// i = 0;
// while (i < 2) {
//   i++;
//   let expenseItem = prompt(
//     "Введите обязательную статью расходов в этом месяце",
//     ""
//   );
//   let priceExpenseItem = prompt("Во сколько обойдется", "");
//   if (
//     typeof expenseItem === "string" &&
//     typeof expenseItem != null &&
//     typeof priceExpenseItem != null &&
//     expenseItem != "" &&
//     priceExpenseItem != "" &&
//     expenseItem.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[expenseItem] = priceExpenseItem;
//   } else {
//     console.log("error");
//     i--;
//   }
// }
// i = 0;
// do {
//   i++;
//   let expenseItem = prompt(
//     "Введите обязательную статью расходов в этом месяце",
//     ""
//   );
//   let priceExpenseItem = prompt("Во сколько обойдется", "");
//   if (
//     typeof expenseItem === "string" &&
//     typeof expenseItem != null &&
//     typeof priceExpenseItem != null &&
//     expenseItem != "" &&
//     priceExpenseItem != "" &&
//     expenseItem.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[expenseItem] = priceExpenseItem;
//   } else {
//     console.log("error");
//     i--;
//   }
// } while (i < 2);

console.log(appData);
const numberOfDaysInMonth = 30;
appData.dailyBudget = +appData.budget / numberOfDaysInMonth;
console.log(appData.dailyBudget);

if (appData.dailyBudget < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.dailyBudget < 2000 && appData.dailyBudget > 100) {
  console.log("Средний уровень достатка");
} else if (dailyBudget > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

