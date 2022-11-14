import {Navbar,CategoryPanel,footer} from "./components.js"
document.getElementById(`Navbar`).innerHTML=Navbar();
document.getElementById(`Category-Panel`).innerHTML=CategoryPanel();
document.getElementById("footer").innerHTML=footer();
document.getElementById(`Profile`).textContent=` ${JSON.parse(localStorage.getItem(`Profile`))}`;


const post_data = async () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let  warranty= document.getElementById('description').value;
    let features = document.getElementById('delivery').value;
    let image = document.getElementById('image').value;
   

    let select = document.getElementById('typeof');

   let category= select.value;
   
    if(category=="musicProduct"||category=="tv"){
 
        let product_data = {
            title : name,
            price,
            warranty,
            features,
            imageURL: image
        }
        let res = await fetch (`https://636d5048b567eed48abef381.mockapi.io/${category}`,{
            method: 'POST',
            body : JSON.stringify(product_data),
            headers : {
                'Content-type': 'application/json'
            }
        })
        
        let data = await res.json();
        window.location.reload(); 
        
        


      
    } else{
  
        let product_data = {
            name,
            price,
            warranty,
            features,
            image
        }
    


    let res = await fetch (`https://636e114fb567eed48ad1f04d.mockapi.io/${category}`,{
        method: 'POST',
        body : JSON.stringify(product_data),
        headers : {
            'Content-type': 'application/json'
        }
    })
    
    let data = await res.json();
    // window.location.reload();
    
    append_added (data,category);
}
    
    }

 document.getElementById('add_product').onclick = () => {

    post_data();
 }

 const append_added = async (data,category) => {
 
    let tbody = document.getElementById('tbody');
    

    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerText= data.image;

    let td2 = document.createElement('td');
    td2.innerText=data.name;

    let td3 = document.createElement('td');
    td3.innerText= category;

    let td4 = document.createElement('td');
    td4.innerText= data.price;

    let td5 = document.createElement('td');
    td5.innerText = "Change";
    td5.onclick = () => {
        changefun (data.id,category);
    }

    let td6 = document.createElement('td');
    td6.innerHTML="Delete";
    td6.onclick = (event) => {
        event.target.parentNode.remove();
        deletefun (data.id,category);
    }

    tr.append(td2,td3,td4,td5,td6);

    tbody.append(tr);
   

 }


 const changefun = async (id) => {
 
//   let res = document.getElementById



 }


 const deletefun = async (id,category) => {

let res = await fetch (`https://636e114fb567eed48ad1f04d.mockapi.io/${category}/${id}`,{
    method: 'DELETE'
})

 }

 document.getElementById('apple_iphone').onclick = () => {
    let g =document.getElementById('apple_iphone').value;
    get_data(g)
 }

 
 document.getElementById('tv').onclick = () => {
    let tv =document.getElementById('tv').value;
    get_data(tv)
 }

 
 document.getElementById('musicProduct').onclick = () => {
    let musicProduct =document.getElementById('musicProduct').value;
    get_data(musicProduct)
 }

 
 document.getElementById('watches').onclick = () => {
    let watches =document.getElementById('watches').value;
    get_data(watches)
 }

 
 document.getElementById('other').onclick = () => {
    let other =document.getElementById('other').value;
    get_data(other)
 }



 const get_data = async (key) => {
   
    
  
    // window.location.reload();
    if(key=="tv"||key=="musicProduct"){
        let res = await fetch (`https://636d5048b567eed48abef381.mockapi.io/${key}`)
    
        let data = await res.json();
         console.log('data:', data)
        append_data(data);
    }else{
        let res = await fetch (`https://636e114fb567eed48ad1f04d.mockapi.io/${key}`)
    
        let data = await res.json();
    append_cards (data);
    }

 }




 
 const append_cards = async (data) => {
  
    let added = document.getElementById('added');
    added.innerHTML= null;

    data.forEach((el) => {

        let div= document.createElement('div');
        div.setAttribute('class','item');
        div.onclick = () => {
             cardfun(el);
        }

        let img= document.createElement('img');
        img.src = el.image;

        let name= document.createElement('p');
        name.innerText = el.name;
        name.setAttribute('class','name');


        let price= document.createElement('p');
        price.innerText= `Rs: ${el.price}`
        

        let delete_btn= document.createElement('button');
        delete_btn.setAttribute('class','offers');
        delete_btn.innerText="Delete"
      
         let change = document.createElement('div');

         let input = document.createElement('input');
         input.placeholder = "Update price";

        let change_btn = document.createElement('button');
        change_btn.innerText= 'Update'

        change.append(input,change_btn);
 
        let btn_div = document.createElement('div');
        btn_div.append(change,delete_btn);

        let name_div = document.createElement('div');
        name_div.append(name,price)
        name_div.setAttribute('class','name_dev')

        div.append(img,name_div,btn_div)

       added.append(div);


        
    });


 }


 
 const append_data = async (data) => {
  
    let added = document.getElementById('added');
    added.innerHTML= null;

    data.forEach((el) => {

        let div= document.createElement('div');
        div.setAttribute('class','item');
        div.onclick = () => {
             cardfun(el);
        }

        let img= document.createElement('img');
        img.src = el.imageURL;

        let name= document.createElement('p');
        name.innerText = el.title;
        name.setAttribute('class','name');


        let price= document.createElement('p');
        price.innerText= `Rs: ${el.price}`
        

        let delete_btn= document.createElement('button');
        delete_btn.setAttribute('class','offers');
        delete_btn.innerText="Delete"
      
         let change = document.createElement('div');

         let input = document.createElement('input');
         input.placeholder = "Update price";

        let change_btn = document.createElement('button');
        change_btn.innerText= 'Update'

        change.append(input,change_btn);
 
        let btn_div = document.createElement('div');
        btn_div.append(change,delete_btn);

        let name_div = document.createElement('div');
        name_div.append(name,price)
        name_div.setAttribute('class','name_dev')

        div.append(img,name_div,btn_div)

       added.append(div);


        
    });


 }

 get_data ('apple_iphone')