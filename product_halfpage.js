carousel();

function carousel() {
    let images = [
      'https://www.reliancedigital.in/medias/Boat-Watch-NPI-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDI4Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2hmOS85OTE2OTExNTgzMjYyLmpwZ3xiYTlhMmVmNjdmNzRlNGQ5Y2EyN2Q3ZTZmNjkzYjVjYjU4MjllMzU1NGUyNjIzZjJiMjNhOWMzZGE0NDE3NTEz',
      'https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2hiMy85OTE1MjAzNTE4NDk0LmpwZ3w1NzZjYjljZGY4M2E3OTMwZmFmOTExNmY3MzE4ZDczYTIxNzUyOWE3YmQyOWQ4YzA5MWRkZmU2NTY4YWMyYTUy',
      'https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk',
      'https://www.reliancedigital.in/medias/Apple-Watch-Series-8-Buy-now-CLP-Banner-30-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDE0Mjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGExL2gwNS85OTE1MjU1MzkwMjM4LmpwZ3wwMzIwY2NmMWUzODMyOTBjYTNiMDY0ZDJiN2YwMWNmMzBlMzViZGUzMGM2OGVjNzA0OTZiZGVkNWZlY2EwZjRk',
      'https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm',
      'https://www.reliancedigital.in/medias/iPhone14-Pro-Buy-now-NPI-Banner-18-10-2022.jpg?context=bWFzdGVyfGltYWdlc3w4OTEzMnxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDhkLzk5MTM2NTcxMzEwMzguanBnfDVlNjcwMmQyZjhkZmVkNTg2NzY5ZWYwODQyODI3NDllZTZiZWM5ZDUxMjZkZGIzNzI4ZTBmODdmNGYxY2EwNTU'
    ]
  
   let imgEl = document.createElement('img')
    imgEl.src =
      'https://www.reliancedigital.in/medias/Boat-Watch-NPI-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDI4Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2hmOS85OTE2OTExNTgzMjYyLmpwZ3xiYTlhMmVmNjdmNzRlNGQ5Y2EyN2Q3ZTZmNjkzYjVjYjU4MjllMzU1NGUyNjIzZjJiMjNhOWMzZGE0NDE3NTEz'
    document.getElementById('addvertise').append(imgEl)
    let i = 1
    let stop = setInterval(function () {
      if (i === images.length) {
        i = 0
      }
      imgEl.src = images[i]
      document.getElementById('addvertise').append(imgEl)
      i++
    }, 3000)
  }
  
  

//   appendind the iphone products 

const iphone_data = async () => {

 let res= await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/apple_iphone`);

 let data = await res.json();

//  console.log('data:', data);
let iphone_div= document.getElementById('iphone')
append_data(data,iphone_div);

}
iphone_data();

const watches_data = async () => {

  let res= await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/watches`);
 
  let data = await res.json();
 
 //  console.log('data:', data);
 let watches_div= document.getElementById('watches')
 append_data(data,watches_div);
 
 }
 watches_data();

 
const other_data = async () => {

  let res= await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/other`);
 
  let data = await res.json();
 
 //  console.log('data:', data);
 let other_div= document.getElementById('other')
 append_data(data,other_div);
 
 }
 other_data();

const append_data = async (el,box) => {

    for(let i=0;i<4;i++){
     
        let div= document.createElement('div');
        div.setAttribute('class','iphone-14');
        div.onclick= () => {
          showCard (el[i]);
        }

        let img= document.createElement('img');
        img.src = el[i].image;

        let name= document.createElement('p');
        name.innerText= el[i].name;
        name.setAttribute('class','name');


        let price= document.createElement('p');
        price.innerText= "Rs"+" "+el[i].price;
        price.style.color="black";

        let btn= document.createElement('button');
        btn.setAttribute('class','offers');
        btn.innerText="Offers Available"

        div.append(img,name,price,btn)

       box.append(div);

    }

} 

let apple_products = document.getElementById('apple_products');

apple_products.onclick = () => {

  localStorage.setItem('parameter','apple_iphone');

   window.location.href= "all_products.html"
};


let other_products = document.getElementById('other_products');

other_products.onclick = () => {

  localStorage.setItem('parameter','other');

   window.location.href= "all_products.html"
};


let watches_products = document.getElementById('watches_products');

watches_products.onclick = () => {

  localStorage.setItem('parameter','watches');

   window.location.href= "all_products.html"
};

 const showCard = (data) => {
  
  let jsdata= JSON.stringify(data)
  // console.log(jsdata);
 localStorage.setItem("showdetailes",jsdata);
 window.location.href= "card_details.html";

 }