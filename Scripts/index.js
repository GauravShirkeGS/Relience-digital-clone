import {Navbar,CategoryPanel} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
document.getElementById(`User`).onclick=()=>{
    window.location.href=`login.html`;
}
document.getElementById(`Cart`).onclick=()=>{
    window.location.href=`cart.html`;
}
let Carousel=document.getElementById(`Carousel`);
const Slideshow=()=>{
    let Images=[`https://www.reliancedigital.in/medias/PS5-Combo-Offer-Reliance-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNDY5NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2gyMS85OTE5MTg1OTQ0NjA2LmpwZ3xkYzI1YjAzOTBjYzE5MmRiOWYxMjMwMjBhMDcyYjRhODAwODI5OGNiMjdlOWRkMDIwZmI0NmI4NThiYTAwYmU3`,
    `https://www.reliancedigital.in/medias/LG-Friday-Carausel-Banner-09-11-202-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDhkLzk5MTkxODcyMjI1NTguanBnfDZjYTc5ZjUwZDY3YzZiNjMwODgwOTMyMzBiZDE4OGVhZGEzMDAyNTUyNWNkYjAyYjljNzM2MTU0OTBiZDM1MjU`,
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