import {Navbar,CategoryPanel} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
let Carousel=document.getElementById(`Carousel`);
const Slideshow=()=>{
    let Images=[`https://www.reliancedigital.in/medias/Audio-Fest-Carousel-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NzQyN3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDc2Lzk5MTgyMDE0MzAwNDYuanBnfDgyOGRjYjJiN2E2MTgxM2ZmNGM1YTk5YmRmNzQ3YjFkMTZiMTQxNmJjN2U1NGY4ZTk1MGZjYzI2YzU3OTU4NWQ`,
    `https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2g4OS85OTE2MTg4MDAwMjg2LmpwZ3xlZGFlYjkxOTc2MTFiZDkzYTkwZDllNGU0YTYxYmNmM2UxNjRkMTZjMDQwMWM1ZGE3Yjk0M2E4MmI1OWI2MjM0`,
    `https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE`,
    `https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI`]
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


const get_headphones_data=async()=>{
    
    try{
        let res=await fetch(`http://localhost:3000/musicProduct`);
        let data=await res.json();
        appendslider(data);
    }
    catch(err){
        console.log(err);
    }
}
get_headphones_data();



const appendslider=(data)=>{
    let div=document.getElementById("headphones");
    data.forEach((el)=>{
        let card=document.createElement("div");
        card.setAttribute("class","card");
        
        let img=document.createElement("img");
        img.src=el.imageURL;
        let name=document.createElement("h3");
        name.innerText=el.title;
        let cost=document.createElement("h3");
        cost.innerHTML=el.price;
        card.append(img,name,cost);
        div.append(card);
    });
}
