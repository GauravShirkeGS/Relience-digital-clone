import {Navbar,CategoryPanel,footer} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
let Carousel=document.getElementById(`Carousel`);
const Slideshow=()=>{
    let Images=[`https://www.reliancedigital.in/medias/LG-Friday-Carausel-Banner-09-11-202-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDhkLzk5MTkxODcyMjI1NTguanBnfDZjYTc5ZjUwZDY3YzZiNjMwODgwOTMyMzBiZDE4OGVhZGEzMDAyNTUyNWNkYjAyYjljNzM2MTU0OTBiZDM1MjU`,
    `https://www.reliancedigital.in/medias/Audio-Fest-Carousel-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NzQyN3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDc2Lzk5MTgyMDE0MzAwNDYuanBnfDgyOGRjYjJiN2E2MTgxM2ZmNGM1YTk5YmRmNzQ3YjFkMTZiMTQxNmJjN2U1NGY4ZTk1MGZjYzI2YzU3OTU4NWQ`,
    `https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2g4OS85OTE2MTg4MDAwMjg2LmpwZ3xlZGFlYjkxOTc2MTFiZDkzYTkwZDllNGU0YTYxYmNmM2UxNjRkMTZjMDQwMWM1ZGE3Yjk0M2E4MmI1OWI2MjM0`,
    `https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE`,
    `https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI`,
    `https://www.reliancedigital.in/medias/Laptops-Carousel-Banner-09-11-2022-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjU0NXxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDQ2Lzk5MTkwODgzOTQyNzAuanBnfDE3OWVkMmI2OWI3NzA5MTIyNWNhNjdkNTI4OTU5NmNkN2UzMDM2ZWEwNWZlNzQxNzhmODEwMmIxNTA1NmY2ZTg`];
    let Image=document.createElement("img");
    Image.src=Images[0];
    Carousel.append(Image);
    let i=1;
    setInterval(()=>{
        if(i==Images.length)
    {
        i=0;
    }
    Image.src=Images[i];
    Carousel.append(Image);
    i++;
    },3000);
}
Slideshow()
let  api_key="https://636d5048b567eed48abef381.mockapi.io/musicProduct";


const get_headphones_data=async()=>{
    
    try{
        let res=await fetch(api_key);
        let data=await res.json();
        appendslider(data);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
get_headphones_data();

const get_tv_data=async()=>{
    
    try{
        let res=await fetch(`https://636d5048b567eed48abef381.mockapi.io/tv`);
        let data=await res.json();
        tvappend(data);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
get_tv_data();


const appendslider=(data)=>{
let div=document.querySelector(".slider");

div.innerHTML=null;
data.forEach((el)=>{
    let card=document.createElement("div");
    card.onclick=()=>{
        
        showcarddetails(el);
    }
    card.style.padding="10px"
    card.setAttribute("id","slidercard");
    
    let img=document.createElement("img");
    img.src=el.imageURL;
    let name=document.createElement("h3");
    name.innerText=el.title;
    name.setAttribute("class","sliderDescription");
    let cost=document.createElement("h4");
    cost.style.marginTop="5px";
    cost.style.marginBottom="8px";
    cost.innerHTML="Offer Price &nbsp;"+el.price;
    let offer=document.createElement("span");
    offer.innerText="OFFER AVAILABLE";
    offer.style.color="#91bf93";
    offer.style.border="1px solid #91bf93";
    offer.style.borderRadius="20px";
    offer.style.padding="2px";
    offer.style.fontSize="10px";
    
    
    
    card.append(img,name,cost,offer);
    div.append(card);
});
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -=300

})

next.addEventListener('click', () => {
    slider.scrollLeft +=300
});

const showcarddetails=async(data)=>{
let arr=[];
arr.push(data);    
    localStorage.setItem("showdetails",JSON.stringify(arr));

    window.location.href="./showcarddetails.html";
}





const tvappend=(data)=>{
let div=document.querySelector(".slider2");

div.innerHTML=null;
data.forEach((el)=>{
    let card=document.createElement("div");
    card.onclick=()=>{
        
        tvshowcarddetails(el);
    }
    card.style.padding="10px"
    card.setAttribute("id","slidercard");
    
    let img=document.createElement("img");
    img.src=el.imageURL;
    let name=document.createElement("h3");
    name.innerText=el.title;
    name.setAttribute("class","sliderDescription");
    let cost=document.createElement("h4");
    cost.style.marginTop="5px";
    cost.style.marginBottom="8px";
    cost.innerHTML="Offer Price &nbsp;"+el.price;
    let offer=document.createElement("span");
    offer.innerText="OFFER AVAILABLE";
    offer.style.color="#91bf93";
    offer.style.border="1px solid #91bf93";
    offer.style.borderRadius="20px";
    offer.style.padding="2px";
    offer.style.fontSize="10px";
    
    
    
    card.append(img,name,cost,offer);
    div.append(card);
});
}

const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')
const slider2 = document.querySelector('.slider2')

prev2.addEventListener('click', () => {
    slider2.scrollLeft -=300

})

next2.addEventListener('click', () => {
    slider2.scrollLeft +=300
});

const tvshowcarddetails=async(data)=>{
let arr=[];
arr.push(data);    
    localStorage.setItem("showdetails",JSON.stringify(arr));

    window.location.href="./showcarddetails.html";
}







