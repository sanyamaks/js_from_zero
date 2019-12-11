let menu = document.getElementsByClassName("menu")[0];
let menuItem = menu.getElementsByClassName("menu-item");
menu.insertBefore(menuItem[2], menuItem[1]);

let body = document.querySelectorAll("body")[0];
body.style.background = "url(../img/apple_true.jpg) center no-repeat";

let column = document.querySelectorAll(".column")[1];
let title = column.querySelectorAll(".title")[0];
title.textContent = "Мы продаем только подлинную технику Apple";

let adv = document.querySelectorAll(".adv")[0];
column.removeChild(adv);

let question = prompt("Каково Ваше отношение к технике apple?", "");
let  promptDiv = document.querySelectorAll(".prompt")[0];
promptDiv.textContent = question;