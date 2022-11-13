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