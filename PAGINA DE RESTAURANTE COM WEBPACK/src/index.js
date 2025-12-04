import './styles/styles.css'; 
import loadHome from './home';
import loadMenu from './menu';
import loadContact from "./contact";

const contactButton = document.getElementById("contact-btn");
const content = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", ()=> {
    document.getElementById("content").innerHTML = "";
    loadHome();
});

menuBtn.addEventListener("click", ()=>{
    document.getElementById("content").innerHTML = "";
    loadMenu();
});

contactButton.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(loadContact());
});

loadHome();