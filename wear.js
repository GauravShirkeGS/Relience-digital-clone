let display=document.getElementById('Slide')
function slideshowWsmartwear(){
 let imageShow=['https://www.reliancedigital.in/medias/Apple-Watch-Series-8-Buy-now-CLP-Banner-15-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDk1MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDdmL2gzYi85OTA3NTA0Njc2ODk0LmpwZ3w0ODM3ZmJlNDZhNTVjZWNlMzJjNWI4ZjMxYWUyMDVmMTFmZjU1OTdlOTcwN2Q4M2IxNzVkOTk1OWEwN2ZiYWIy','https://www.reliancedigital.in/medias/Boat-Watch-CLP-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ1MjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2hjMC85OTE2OTExODc4MTc0LmpwZ3wwMWVkZjIwNTI1NWMzN2U0NTc0Yjc2YWUyOTU3OWU1ODUzMTA1Y2Y1MDQzYWEyNmZiNzg0ZGMxNjViYTk4NDIw','https://www.reliancedigital.in/medias/Apple-Watch-SE-Buy-now-CLP-Banner-15-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDIzMzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDcyL2hhOS85OTA3NTA0ODA3OTY2LmpwZ3xlZTc5ZDdlMzIwMDA5MzhkYzdhNmNmODJiMGJlYTQwM2I1YTRjYjhjNjQyZDA0Nzc1OGVkZjdhZjc0MmM0ZDA1','https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDIxNDl8aW1hZ2UvanBlZ3xpbWFnZXMvaGZiL2g3MC85ODk2MzAxNTkyNjA2LmpwZ3w4MGQ3MmY2NmI1MDU0OTAyNmMzMjlkZGU4YWNkYjBkOWIxZTVjNGZiZDE5ZjhkMGVkMDgwNmE5YmM2NDU2OWI3','https://www.reliancedigital.in/medias/ptron-Pulsefit-F21-CLP-Banner-22-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDIzNjN8aW1hZ2UvanBlZ3xpbWFnZXMvaGIxL2g3Yi85ODk2MzAxMTk5MzkwLmpwZ3xlNDE0YzU3OGIwODljZmVkNjY5Y2Q3ZDhmMTY5MTM2ZWQ1ODE2NmJiYTEwZmJlNWEyNDcyNDc0ZmY3YmZlNzFj']
    let pic=document.createElement('img')
    pic.src=imageShow[0]
    display.append(pic)
    let i=1;
    setInterval(function(){
    if(i===imageShow.length){
        i=0;
    }
    pic.src=imageShow[i]
    display.append(pic)
    i++
    },5000)
}
slideshowWsmartwear()

let logoData=[
  {imG:'https://www.reliancedigital.in/medias/Category-Landing-Pages-150-x-80.jpg?context=bWFzdGVyfGltYWdlc3wyMjM4fGltYWdlL2pwZWd8aW1hZ2VzL2hkNy9oZGMvOTMxMTYwNjA3OTUxOC5qcGd8YzE5ZTY1MDg0MTJiNzk4ZjFjNGUwYjg2Y2EzNjllZWFlYThmZWY2M2IzNWUzMWQzMDVhZjdmNDc3YzNjYWQ5NQ'}
  ,{imG:'https://www.reliancedigital.in/medias/noise-logo.png?context=bWFzdGVyfGltYWdlc3wxOTUzfGltYWdlL3BuZ3xpbWFnZXMvaGY5L2gwNy85MzgyMjkzNzk4OTQyLnBuZ3w5Mjc1MzBkMjkyYTJkMWFlODE2NmYyZWRkOGE5Y2JhNmVjYzVkZDAzZjdiNDIzMzk1Njg2ZTZkN2FkMjRkNmVj'},
{imG:'https://www.reliancedigital.in/medias/Logo-Boat.jpg?context=bWFzdGVyfGltYWdlc3w0MTQ2fGltYWdlL2pwZWd8aW1hZ2VzL2hlZC9oMjUvOTQ5MTMzOTI4MDQxNC5qcGd8OGJjYTViMTNiMmUzODAyNmFhZTgyZTQzNDVkYWY2NGNmNDQ1Y2NhNjk0MGYxNjUwZDIzNDJiYWM3MWMxODhmZA'},
{imG:"https://www.reliancedigital.in/medias/Category-Landing-Pages-150-x-80-2.jpg?context=bWFzdGVyfGltYWdlc3w1NDM3fGltYWdlL2pwZWd8aW1hZ2VzL2gzYy9oYTQvOTMxMTYwOTk3ODkxMC5qcGd8NWUzMzdlNDk0Yzg4YzE0M2Q4OTA0YzQ3ZDcyMmE4MTM5NjA5MDMyMTU5YjRlMjI3YjAzOGFiOTY4MWI1N2YzOQ"},
{imG:'https://www.reliancedigital.in/medias/Category-Landing-Pages-150-x-80-3.jpg?context=bWFzdGVyfGltYWdlc3wzNDMyfGltYWdlL2pwZWd8aW1hZ2VzL2g1OS9oMGEvOTMxMTYxMDkyOTE4Mi5qcGd8YmMzMjdjNDdhYjcxMzJhZTZlYzliMmI4MTA5ZWNmYjJlZDhkNWRlODlkMzVlYTNhNTg3ZTYwMGU4YzlkNTgxNA'},
{imG:'https://www.reliancedigital.in/medias/Wearable-Shop-By-Brands-Fire-Boltt.jpg?context=bWFzdGVyfGltYWdlc3wzODI5fGltYWdlL2pwZWd8aW1hZ2VzL2gyOC9oNGEvOTU1NDY3NTAwNzUxOC5qcGd8YmJiZmM5ZGZhYWI3MTYzNGE5OWU4MmU4MDBhMDg2YjM2M2EzMDliMDhhNWY3N2FjZGNkNDExZDFkYzAxOTlhOA'},
{imG:'https://www.reliancedigital.in/medias/Category-Landing-Pages-150-x-80-5.jpg?context=bWFzdGVyfGltYWdlc3wzODA2fGltYWdlL2pwZWd8aW1hZ2VzL2hlZi9oMGEvOTMxMTYxNDY2NDczNC5qcGd8YjFlM2ZkMTQ3ZDYwMGI4NWQyNDQzMjcwOTk0ZDFmZTA0YzViYmFlZWQwN2ZiOGEzZDVhMmU1N2U5MzY3NjIxYw'},
{imG:'https://www.reliancedigital.in/medias/Category-Landing-Pages-150-x-80-4.jpg?context=bWFzdGVyfGltYWdlc3wzNTE4fGltYWdlL2pwZWd8aW1hZ2VzL2g1NS9oZWMvOTMxMTYxMjY2NTg4Ni5qcGd8MTkyNTlmMDNlYjQ4OTQyOTA5MWMxYWExZTcxNTJiZGRmYjBmMWJlMTdmMDdjYTE2Y2VmNTYwYTU5Y2UxYWVkYg'}
       
    ]
    let brands=document.getElementById('brand')
    const displayBrand=(data)=>{
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.class="ind"
        let img=document.createElement("img")
        img.src=el.imG
    
        div.append(img)
        brands.append(div)
    })
    }
    displayBrand(logoData)


    let wearData=[
        {img:"https://www.reliancedigital.in/medias/boAt-Storm-Smart-Watches-491946955-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzY5OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2gyNC85NDgzMTMzMDkxODcwLmpwZ3xiMTE1NjMwNTUzZWE0YTY5MzgyNWNhZGIxMDVmY2MyYzUxNWM0NjQyMjllY2VmMzUxNWE5YTAxMDkxY2E3MDVh",name:"boAt Smart Watch Storm RTL Active Black",
        rating:4,orignalPrice:'₹3,299.00 ',stickPrice:'₹5,999.00'},
        {img:'https://www.reliancedigital.in/medias/Apple-SE-Smart-Watches-491901145-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTYwNjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGJiL2g1My85Mzg2Mjg1NzYwNTQyLmpwZ3w4MGY4YmQzOTU1MjEwYWI2NDc0YTU5Y2M4NDA5Y2EyNmRiNThhMmI0ZWQ4YzdjYWJkZGMzMjhkODJlOGQ2MmJm',name:'Apple Watch SE GPS - 40 mm Space Gray Aluminium Case with Black Sport Band',rating:4,orignalPrice:'₹29,900.00',stickPrice:'₹32,499.00'},
        {name:'Noise ColorFit Qube O2 Smart Watch with IP68 Waterproof, 8 Sports Mode (Charcoal Grey)',img:'https://www.reliancedigital.in/medias/Noise-COLORFITQUBEOXY-Smart-Watch-492849346-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oZjQvaGIxLzk4MTY0ODA5NzI4MzAuanBnfGRlMmJjNDU1OTI2NGIyMTBmYzEyMjQ2NzIxYzRhNTg4NGM3MmRkZGYxYmY1ZThiY2QwZGU3OWJmYjEyOTU1ZjY',rating:3,orignalPrice:'₹1,999.00',stickPrice:'₹4,999.00'}
        ,{name:'Noise NoiseFit Endure Smart Watch, Charcoal Black',img:'https://www.reliancedigital.in/medias/Noise-NoiseFit-Endure-Smart-Watch-491900989-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTUyMTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGYwL2gyMy85NTkxODM4MjQ0ODk0LmpwZ3w4YTU0MDI1MDQ3MTE0ZDJjZTAxMTRlN2EwYmJmYmRiODE5YmVkMzg5MTk0ZWRiOTY5ZDU0ZDk3MTE4MTE2MzI5',rating:4,orignalPrice:'₹2,499.00',stickPrice:'₹5,699.00'},
{img:'https://www.reliancedigital.in/medias/Fitbit-Sense-Smart-Watches-491947356-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Mzc4NXxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDgyLzk1NzM2OTA0NDE3NTguanBnfGY5MzJmM2NlOTZlNzVkN2NmMGIxMGEwY2NjNjcwODliNmFhMzJkZmY4YjUyNGQ4ODk5NTE4YjQ0YmVmMzg3Mzk',name:'Fitbit Sense Smart Watch with 6+ Day Battery Life, Lunar White/Soft Gold',rating:5,orignalPrice:'₹21,849.00',stickPrice:'₹24,999.00'},
{img:'https://www.reliancedigital.in/medias/Fitbit-Inspire-2-Fitness-Bands-and-Trackers-491947351-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTYyMDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDgyL2g2MC85NTU5NDc2NjAwODYyLmpwZ3wyMDUzNDczZjJiNjhjN2NmOTUxOGIzNjIyYmZjZjYyYjQ5MTE0MjMxZmZiYTlmNmNjNzA4OTczNzRiYzAzNWRm',name:'Fitbit Inspire 2 Fitness Band with Upto 10 Day Battery Life, Black',rating:3,orignalPrice:'₹7,999.00',stickPrice:'₹10,999.00'},
{img:'https://www.reliancedigital.in/medias/Amazfit-A1936-Sports-Fitness-Watches-493178738-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTc3NnxpbWFnZS9qcGVnfGltYWdlcy9oMWYvaGNkLzk5MTg4NjkwNzgwNDYuanBnfDFjMzRiMjFiZjI4OWQ3ZWI5NjdmMjMwYjgxYTE3YTBjZmRlZmUzMzgyNjNjZDU1ODgyMjViYTRmMWNkOWZlY2U',name:'Amazfit Zepp E (Round) Smart Watch, Polar Night Black',rating:4,orignalPrice:'₹8,999.00',stickPrice:'₹12,999.00'}
 ,{img:'https://www.reliancedigital.in/medias/Amazfit-A1914-Smart-Watches-491615209-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDg4NnxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaDllLzkyMjE4MDA1MjU4NTQuanBnfDIyMTMyODNhMjVmNWE2NjczZjM0YjRhNzU5YmNhNDNlM2Y5Mjc4NWVhMzg2NjdhOWFmOTRlZjFiZjkxOTZhNTk',name:'FOSSIL Gen 5 Carlyle HR FTW4024 Smart Watch, Smoke Stainless Steel',rating:3,orignalPrice:'₹5,999.00',stickPrice:'₹7,999.00'}   ,
 {img:'https://www.reliancedigital.in/medias/FOSSIL-FTW5039-Smart-Watches-491550756-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NTgyMXxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGM3LzkyNTAyMTk2ODc5NjYuanBnfGYwZWEzOGUxMTRkY2RmMTI0MDY5NzA1MGQyYTk1NjdkMzQwNWE5MzQ4YTQ4ZmM4M2YwZTI3YTY0ZmQ4ZjQyZmI',name:'FOSSIL Carlie FTW5039 Smart Watch, Beige',rating:5,orignalPrice:'₹11,995.00',stickPrice:'₹16,895.00'}
]

    
let container=document.getElementById('container')
const displayProd=(data)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        
        let div=document.createElement('div')
        let img=document.createElement("img")
        img.src=el.img;
        let name=document.createElement("p")
        name.id="name";
        name.style.fontWeight="bold"
        name.style.color="#4267B2"
        name.innerText=el.name;
        let rating=document.createElement("p")
        rating.innerText=`Rating:${el.rating}`
        rating.style.color="#E60023"
        let DealPrice=document.createElement('p')
        DealPrice.innerText=`Deal Price :${el.orignalPrice}`
        DealPrice.style.fontWeight="bold"
        let offerprice=document.createElement("p")
        offerprice.innerText=`M.R.P: ${el.stickPrice}`
        offerprice.style.color="grey"
        offerprice.style.paddingBottom="10px"
        offerprice.id="offPrice"
        let btn=document.createElement('button')
        btn.textContent='WishList'
        btn.id='wiSH'
        

        div.append(img,name,rating,DealPrice,offerprice,btn)
  container.append(div)
    })
}
displayProd(wearData)

 