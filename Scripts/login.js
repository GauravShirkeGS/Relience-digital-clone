import {Navbar,CategoryPanel} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
document.getElementById(`Cart`).onclick=()=>{
    window.location.href=`cart.html`;
}
document.getElementById(`Login`).onclick=()=>{
    GetData()
}
document.getElementById(`Register`).onclick=()=>{
    Register()
}
const Register=async()=>{
    let Name=document.getElementById(`Register-Name`).value;
    let Mobile=document.getElementById(`Register-Mobile`).value;
    let Email=document.getElementById(`Register-Email`).value;
    let Password=document.getElementById(`Register-Password`).value;
    let SendData={Name,Mobile,Email,Password};
    let Response=await fetch(`http://localhost:3000/User`,{
        method:"POST",
        body:JSON.stringify(SendData),
        headers:{
            "Content-Type":"application/json"
        }
    });
}
const GetData=async()=>{
    let Response=await fetch(`http://localhost:3000/User`);
    let User=await Response.json();
    Login(User)
}
const Login=(Data)=>{
    let Form={Email:document.getElementById(`Login-Email`).value,Password:document.getElementById(`Login-Password`).value}
    if(Form.Email==""||Form.Password==""){
        alert(`Please enter your credentials`)
    }
    else{
        let Flag=false;
        Data.forEach((element)=>{
            if(element.Email==Form.Email&&element.Password==Form.Password){
                Flag=true;
            }
        })
        if(Flag){
            alert(`Welcome to Go Shop`)
            window.location.href=`index.html`;
        }
        else{
            alert(`Please enter correct credentials`)
        }
    }
}