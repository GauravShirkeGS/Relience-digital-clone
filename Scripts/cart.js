import {Navbar,CategoryPanel} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
document.getElementById(`Continue-Shopping-Button`).onclick=()=>{
    window.location.href="index.html";
}
document.getElementById(`User`).onclick=()=>{
    window.location.href=`login.html`;
}
document.getElementById(`Profile`).textContent=` ${JSON.parse(localStorage.getItem(`Profile`))}`;
if(JSON.parse(localStorage.getItem(`Profile`))==null){
    document.getElementById(`Profile`).textContent=` Login`;
}