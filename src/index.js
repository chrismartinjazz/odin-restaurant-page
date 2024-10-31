import "./style.css"
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

const navHome = document.querySelector("#nav-home");
const navMenu = document.querySelector("#nav-menu");
const navAbout = document.querySelector("#nav-about");
const allButtons = [navHome, navMenu, navAbout];

const content = document.querySelector("#content");

navHome.addEventListener("click", function (e) {
  content.innerHTML = "";
  renderHome(content);
  selectButton(this);
})

navMenu.addEventListener("click", function (e) {
  content.innerHTML = "";
  renderMenu(content);
  selectButton(this);
})

navAbout.addEventListener("click", function (e) {
  content.innerHTML = "";
  renderAbout(content);
  selectButton(this);
})

function selectButton(selected, all = allButtons) {
  for (const button in all) {
    all[button].classList.remove("selected");
  }
  selected.classList.add("selected");
}

// renderHome(content);