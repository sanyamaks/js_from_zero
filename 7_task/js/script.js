let infoHeaderTab = document.getElementsByClassName("info-header-tab");
let infoHeader = document.getElementsByClassName("info-header")[0];
let infoTabcontent = document.getElementsByClassName("info-tabcontent");

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
