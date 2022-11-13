 import {Navbar,CategoryPanel} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();


let data=JSON.parse(localStorage.getItem("showdetailes"));
let container=document.getElementById("container");
console.log('data:', data)

let div1=document.createElement("div");
div1.setAttribute("class","imgdiv");
let image=document.createElement("img");
image.src=data.image;

let div2=document.createElement("div");
div2.setAttribute("class","detailsdiv");



let div2_1=document.createElement("div");
div2_1.setAttribute("class","div2_1");
div2_1.innerText=data.name;

let div2_2=document.createElement("div");
div2_2.setAttribute("class","div2_2");



let div2_2_1=document.createElement("div");
let h4=document.createElement("h4");
h4.innerText="Gain more with offers (2)";
let ul=document.createElement("ul");
let p1=document.createElement("p");
p1.innerText="Shop for Rs.50,000 & above and Get Instant Discount Up To Rs.20,000.";
let p2=document.createElement("p");
p2.innerText="Get Cashback upto Rs. 1,000 on Mobikwik Wallet.";

let warrenty=document.createElement("h4");
warrenty.innerText="WARRANTY";
warrenty.style.marginTop="50px";
let warrentytext=document.createElement("p");
warrentytext.innerText=`Warrenty : ${data.warranty}`;


let returnpolicy=document.createElement("h4");
returnpolicy.innerText="Return Policy";
returnpolicy.style.marginTop="50px";
let returnpolicytext1=document.createElement("p");
returnpolicytext1.innerText="Items are eligible for return within 7 Days of Delivery.";
let returnpolicytext2=document.createElement("p");
returnpolicytext2.innerText="All accessories, product & packaging need to be returned in original condition.";


ul.append(p1,p2);
div2_2_1.append(h4,ul,warrenty,warrentytext,returnpolicy,returnpolicytext1,returnpolicytext2);



div2_2_1.setAttribute("class","div2_2_1");

let div2_2_2=document.createElement("div");
div2_2_2.setAttribute("class","div2_2_2");
div2_2_2.style.margin="10px";


let price=document.createElement("h2");
price.innerText="Offer Price: "+data.price;
price.style.color="green";
let limited=document.createElement("p");
limited.innerText="'LIMITED OFFER' GRAB THE DEAL";
limited.style.margin="10px";



div2_2_2.append(price,limited);

let cartbutton=document.createElement("button");
cartbutton.innerText="ADD TO CART";
cartbutton.style.color="white";
cartbutton.style.backgroundColor="#e42529";
cartbutton.style.border="none";
cartbutton.style.padding="4px";
cartbutton.style.borderRadius="20px";
cartbutton.style.width="50%";
cartbutton.style.marginLeft="25%";
cartbutton.style.height="30px";

div2_2.append(div2_2_1,div2_2_2);
div2.append(div2_1,div2_2,cartbutton);
div1.append(image);
container.append(div1,div2);


cartbutton.onclick = async () => {

    let obj={
        imageURL : data.image,
        title : data.name,
        price : Number(data.price)
    }

    let res = await fetch(`https://636df0bbb567eed48acd7f24.mockapi.io/cart-product`,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        }
    });




    window.location.href= 'cart.html'
}
