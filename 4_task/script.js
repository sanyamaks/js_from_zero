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
    for (let i = 0; i < 1; i++) {
      let items = prompt(
        "Что принесет дополнительный доход? (Перечисли через запятую)",
        ""
      );
      if (typeof items !== "string" || items === "" || !items) {
        i--;
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