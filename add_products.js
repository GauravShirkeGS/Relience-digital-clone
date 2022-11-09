const post_data = async () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let  warranty= document.getElementById('description').value;
    let features = document.getElementById('delivery').value;
    let image = document.getElementById('image').value;
    let product_data = {
        name,
        price,
        warranty,
        features,
        image
    }

    let select = document.getElementById('typeof');

   let category= select.value;
    
    let res = await fetch (`http://localhost:3000/${category}`,{
        method: 'POST',
        body : JSON.stringify(product_data),
        headers : {
            'Content-type': 'application/json'
        }
    })
    
    let data = await res.json();
    window.location.reload();
    
    console.log('data:', data);
    
    }
    