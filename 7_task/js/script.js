let infoHeaderTab = document.getElementsByClassName("info-header-tab");
let infoHeader = document.getElementsByClassName("info-header")[0];
let infoTabcontent = document.getElementsByClassName("info-tabcontent");

hideTabContent(1);

function hideTabContent(a) {
  for (let id = a; id < infoTabcontent.length; id++) {
    infoTabcontent[id].classList.remove("show");
    infoTabcontent[id].classList.add("hide");
  }
}

function showTabContent(id) {
  if (infoTabcontent[id].classList.contains("hide")) {
    infoTabcontent[id].classList.remove("hide");
    infoTabcontent[id].classList.add("show");
  }
}

infoHeader.addEventListener("click", function() {
  let target = event.target;
  if (target && target.classList.contains("info-header-tab")) {
    for (let i = 0; i < infoHeaderTab.length; i++) {
      if (target === infoHeaderTab[i]) {
        hideTabContent(0);
        showTabContent(i);
      }
    }
  }
});

let deadline = new Date(1576689800000); //hardcode
getTimeRemaining(deadline);

function changeTimeFormat(time) {
  time = time < 10 ? "0" + time : "" + time;
  return time;
}

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds =
    t > 0 ? changeTimeFormat(Math.floor((t / 1000) % 60)) : changeTimeFormat(0);
  let minutes =
    t > 0
      ? changeTimeFormat(Math.floor((t / 1000 / 60) % 60))
      : changeTimeFormat(0);
  let hours =
    t > 0
      ? changeTimeFormat(Math.floor(t / 1000 / 60 / 60))
      : changeTimeFormat(0);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function setClock(id, endtime) {
  let timer = document.getElementById(id);
  let hours = timer.querySelector(".hours");
  let minutes = timer.querySelector(".minutes");
  let seconds = timer.querySelector(".seconds");

  let timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let timeRemaining = getTimeRemaining(endtime);
    hours.textContent = timeRemaining.hours;
    minutes.textContent = timeRemaining.minutes;
    seconds.textContent = timeRemaining.seconds;

    if (timeRemaining.total < 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock("timer", deadline);

//popup

let more = document.querySelector(".more");
let overlay = document.querySelector(".overlay");
let closeButton = document.querySelector(".popup-close");

function openPopup (){
  overlay.style.display = "block";
  more.classList.add("more-splash");
  document.body.style.overflow = "hidden";
}

function closePopup(){
  overlay.style.display = "none";
  more.classList.remove("more-splash");
  document.body.style.overflow = "";
}

more.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);

let descriptionButton = document.querySelectorAll(".description-btn");

descriptionButton.forEach(function(index) {
  index.addEventListener("click", openPopup);
});
