
let parameter = localStorage.getItem('parameter');

const cards = async () => {

 let res = await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/${parameter}`);

 let data = await res.json();

 append_cards( data);
   
}

cards();

 const append_cards = async (data) => {
  
    let card_div = document.getElementById('cards');
    card_div.innerHTML= null;

    data.forEach((el) => {

        let div= document.createElement('div');
        div.setAttribute('class','item');
        div.onclick = () => {
             cardfun(el);
        }

        let img= document.createElement('img');
        img.src = el.image;

        let nameof= document.createElement('p');
        nameof.innerText = el.name;
        nameof.setAttribute('class','name');


        let priceof= document.createElement('p');
        priceof.innerText= el.price;
        priceof.style.color="black";

        let btn= document.createElement('button');
        btn.setAttribute('class','offers');
        btn.innerText="Offers Available"

        div.append(img,nameof,priceof,btn)

       card_div.append(div);


        
    });


 }

        //   sorting 

 let relevanc = document.getElementById('relevance');
relevanc.onclick= () => {
    cards();
}

let low = document.getElementById('low');
low.onclick = async () => {

    let res = await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/${parameter}`)
    let data = await res.json();
    data.sort((a,b) => a.price-b.price)
    append_cards(data);
}

let high = document.getElementById('high');
high.onclick = async () => {

    let res = await fetch(`https://636e114fb567eed48ad1f04d.mockapi.io/${parameter}`)
    let data = await res.json();
    data.sort((a,b) => b.price-a.price)
    append_cards(data);
}


const cardfun = (data) => {
 
    
  
        let jsdata= JSON.stringify(data)
        // console.log(jsdata);
       localStorage.setItem("showdetailes",jsdata);
       window.location.href= "card_details.html";
      
       
}