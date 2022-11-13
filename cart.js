import {Navbar,CategoryPanel,footer} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
document.getElementById("footer").innerHTML=footer();
document.getElementById(`Continue-Shopping-Button`).onclick=()=>{
    window.location.href="index.html";
}
document.getElementById(`User`).onclick=()=>{
    window.location.href=`login.html`;
}
document.getElementById(`Checkout-Button`).onclick=()=>{
    window.location.href=`checkout.html`;
}
document.getElementById(`Profile`).textContent=` ${JSON.parse(localStorage.getItem(`Profile`))}`;
if(JSON.parse(localStorage.getItem(`Profile`))==null){
    document.getElementById(`Profile`).textContent=` Login`;
}
const CartProducts=(Data)=>{
    let CartProducts=document.getElementById(`Cart-Products`);
    CartProducts.innerHTML=null;
    document.getElementById(`Empty-Cart`).innerHTML=null;
    document.getElementById(`Empty-Cart-Statement`).innerHTML=null;
    document.getElementById(`Continue-Shopping`).innerHTML=null;
    Data.forEach((element)=>{
        let Image=document.createElement(`img`);
        Image.src=element.imageURL;
        let Imagediv=document.createElement(`div`);
        Imagediv.setAttribute(`class`,`Imagediv`)
        Imagediv.append(Image)
        let Title=document.createElement(`p`);
        Title.innerText=element.title;
        let Price=document.createElement(`p`);
        Price.innerText=`₹${element.price}`;
        let Remove=document.createElement(`button`);
        Remove.setAttribute(`class`,`Remove`)
        Remove.innerText=`Remove`;
        Remove.onclick=()=>{
            RemoveCartProduct(element)
            // window.location.reload();
        }
        let div=document.createElement(`div`);
        div.append(Imagediv,Title,Price,Remove)
        CartProducts.append(div)
    })
}
const GetCartProducts=async()=>{
    let Response=await fetch(`https://636df0bbb567eed48acd7f24.mockapi.io/cart-product`);
    let Data=await Response.json();
    document.getElementById(`Cart-Count`).textContent=Data.length;
    document.getElementById(`Quantity`).textContent=Data.length;
    const initialValue = 0;
    const sumWithInitial=Data.reduce((previousValue,currentValue)=>previousValue+currentValue.price,initialValue);
    document.getElementById(`Total`).textContent=sumWithInitial;
    document.getElementById(`Total-Amount`).textContent=sumWithInitial;
    CartProducts(Data)
}
GetCartProducts()
const RemoveCartProduct=async(element)=>{
    
        let res= await fetch(`https://636df0bbb567eed48acd7f24.mockapi.io/cart-product/${element.id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        });
      
        let deletedData= await res.json();
        console.log(deletedData);
      
      
        let response= await fetch(`https://636df0bbb567eed48acd7f24.mockapi.io/cart-product`);
        let data = await response.json();
        console.log(data);
        
        CartProducts(data);
}
