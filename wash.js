let display=document.getElementById('Slide')
function slideshowWashMachine(){
 let imageShow=["https://www.reliancedigital.in/medias/RD-website-banners-Website-version-1365-X-260-px-WM.png?context=bWFzdGVyfGltYWdlc3wxNTI1OTJ8aW1hZ2UvcG5nfGltYWdlcy9oMWIvaDVlLzk4NzIzOTEzNzI4MzAucG5nfGYyZGI0YjBlODdmMGZhNGViMDhiNmZkMmI1MGM2YWFmYzI1MTViM2RjZDQ1YzRjNmQ5ZmE0OTZiN2I5MDg3MjE",
"https://www.reliancedigital.in/medias/Samsung-Washing-Machine-CLP-Banner-06-04-2021.jpg?context=bWFzdGVyfGltYWdlc3wyNzE1NTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGFiL2gyZC85NTA3MDk2ODIxNzkwLmpwZ3w3ZjEzMjU1OTdmNzhlM2FkODg2MzE0YWRkNjNhZGU4ZWM3YzEzZjI3YzFkYThkZWE0NmJkODYwNWY3M2NjOTg3","https://www.reliancedigital.in/medias/TL-Washing-machines-CLP-Banner-10-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDIxODJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGMxL2g1NS85OTA3MTI3NjgxMDU0LmpwZ3xhYjRlNDkyZTEwZWI4NzQwMmE1NGI5MzI2NTE3MGFhMzljYTQ1YWVjYzlmN2ZkNzU4NDBhZGEzMGY1YmRkZjhk"
,"https://www.reliancedigital.in/medias/Whirlpool-Bloomwash-Home-page-Banner-1365-x-260.jpg?context=bWFzdGVyfGltYWdlc3w5NTAzMXxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGNmLzkzNDE1MDMxMTExOTguanBnfDQ2ZWJhY2I3MzE4ZjI4ODg1MTE5ODliN2E2NWNkYTY1YjU2ODRlNzIwMzE4YTQ2ZDNjN2EzYWU2MWNjMTExYzE","https://www.reliancedigital.in/medias/Voltas-Beko-Twin-Tub-New-Range-Digtal-Banner.jpg?context=bWFzdGVyfGltYWdlc3wxNzgwODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hlMS85OTA0Nzk4MzY3Nzc0LmpwZ3xlYjNmZjFjZjlmM2FhYjYwYTg4MzJiMjNmMDQzODk1ZDQ1OGNjMzlmMDQ3MTlmYjAzYTY2MjFlMDQ2OWM5Y2Ex"]
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
slideshowWashMachine()

let logoData=[
{imG:"https://www.reliancedigital.in/medias/Washing-Machine-Shop-By-Brands-Samsung.jpg?context=bWFzdGVyfGltYWdlc3w0ODg2fGltYWdlL2pwZWd8aW1hZ2VzL2g2Ny9oOTMvOTg1Nzc0NDQ3MDA0Ni5qcGd8YzgyMGMwYzc2Y2ExZTBmOWE1NjI5ZjY2ZDhjY2FjMDFhOThjZGIwODI1ZmEzNjE2YTc4ZDEzYzRlZjY1Yjg4Mg"},
{imG:"https://www.reliancedigital.in/medias/Washing-Machine-Shop-By-Brands-Whirlpool.jpg?context=bWFzdGVyfGltYWdlc3w1NDIwfGltYWdlL2pwZWd8aW1hZ2VzL2g4YS9oNTEvOTg1Nzc0NDYwMTExOC5qcGd8ZjlmNGZhNDNhNjhiYTVlNWQyOGZhODBkYzM3Y2YwMTViMDY1NDgzNmI3MzljZDkyZDVjNTM3Mjc5ZWNlNzU0Zg"},
{imG:"https://www.reliancedigital.in/medias/kelvin.jpg?context=bWFzdGVyfGltYWdlc3wxODAzN3xpbWFnZS9qcGVnfGltYWdlcy9oN2YvaDFjLzkzMjI1NjI5NDUwNTQuanBnfGQ0ODYwOGE3MGIxZTQ5NjA5NGFjMzI3OWRlY2QyNjkyYmZhYjE5MDE5M2E4NDVjMjNiOGZkYTk4MmMxMDY3ZTE"},
{imG:"https://www.reliancedigital.in/medias/Washing-Machine-Shop-By-Brands-Onida.jpg?context=bWFzdGVyfGltYWdlc3w4NzIzfGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oOGUvOTg1Nzc0NDY2NjY1NC5qcGd8YzdmZGVmYjdjNmQ0ZTRhMWUzNTViMWE2ZDE0NDI4NDJhZjUyMWE1NzljM2Y3OGVkNjNiNmMyZDkxZDcyOWRhOQ"},
 {imG:"https://www.reliancedigital.in/medias/Washing-Machine-Shop-By-Brands-LG.jpg?context=bWFzdGVyfGltYWdlc3w1MjE1fGltYWdlL2pwZWd8aW1hZ2VzL2gwOC9oZTAvOTg1Nzc0NDUzNTU4Mi5qcGd8NjQ1M2UyMTY2OTVmNDk4MzY0ZjM4OTk4MmU4MDZmZjIwOGU5NGUwNWRhM2UzOTBhOTM4Nzk1NGI2ZTMwYTMyOA"},
 {imG:"https://www.reliancedigital.in/medias/ifb.jpg?context=bWFzdGVyfGltYWdlc3wxNzAxNnxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaGI3LzkzMjI1NjI4Nzk1MTguanBnfDVjOGFhZmYyNzAyMGY2YzJlZjM2Yjg4ZjU5OTBlYWIzYTQ1NmM4YmFkMmExYjAwYmI3YzkzMTg3OWFkZTIwMGY"},
 {imG:"https://www.reliancedigital.in/medias/bosch.jpg?context=bWFzdGVyfGltYWdlc3wyMDkyM3xpbWFnZS9qcGVnfGltYWdlcy9oNTAvaDU2LzkzMjI1NjI2NTAxNDIuanBnfGM2NGMzMDhjMjUwNGFiN2FjODU4OTc0ZTlkZGNhMDI4ODJlZTcxOTVmMDkzZDA1NWE4ZTVhMGYxMzgzNTBkMDE"},
 {imG:"https://www.reliancedigital.in/medias/Washing-Machine-Shop-By-Brands-Sansui.jpg?context=bWFzdGVyfGltYWdlc3w0NzUyfGltYWdlL2pwZWd8aW1hZ2VzL2hlNi9oOWQvOTg1Nzc0NDczMjE5MC5qcGd8YWRmNDljM2ZjODNlZTNmNGQ0OGQ3NzljN2RjZWU5YjY5NmQxNTNmYWIxNDJiODRiNjY3NjgzOTI2NTBmMzM1NA"}
   
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

let machineData=[
    {img:"https://www.reliancedigital.in/medias/LG-T65SPSF2Z-Washing-Machine-491959105-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTQ5NXxpbWFnZS9qcGVnfGltYWdlcy9oZGUvaDM5Lzk0OTM5NTM0Nzg2ODYuanBnfDZjMWY2ZjVkMDA4Njk3MDQ5N2ZmNzY4ZjU4N2JjN2VmNThkMzIzY2M4ZDNiZTdmNWE0YTFlNDhmMjRjNzEwYzE",name:"LG 6.5 Kg Top Loading Fully Automatic Washing Machine with Smart Inverter Technology",
    rating:5,orignalPrice:' ₹18,790.00',stickPrice:'₹21,490.00'},
    {img:"https://www.reliancedigital.in/medias/CANDY-CTL651269S-Washing-Machines-492664455-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDI1NXxpbWFnZS9qcGVnfGltYWdlcy9oNmEvaGY0Lzk4MDE4Nzk2ODMxMDIuanBnfDRmMGUxZTEwMTM2ZWUyOTZhZDI1OTRiOGMxMmIyYTQyZGYwYzM1YjA3OWJjOWVhZjM4NWQzMzg2M2Q3OGEwOTY",name:"Candy 6.5 Kg Top Loading Fully Automatic Washing Machine, CTL651269S",
    
    rating:3,orignalPrice:'₹9,490.00',stickPrice:'₹12,490.00'},
    {img:"https://www.reliancedigital.in/medias/Whirlpool-Elite-Plus-Washing-Machine-491902833-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5Mjc1N3xpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDBiLzk0MDAzMzc5NTY4OTQuanBnfGMzN2NlY2FmZTgxZmQ5NzdlMWM1YzJjZjg3MTVhZmUxNjI5NzU0NmRmZGYzZjRmZGQzY2U4MzlmYmNmZjUzM2Y",name:"Whirlpool 6.5 Kg Top Loading Fully Automatic Washing Machine with 3 Hot Water Mode",
    rating:4,orignalPrice:'₹18,490.00',stickPrice:'₹24,490.00'},
    {img:"https://www.reliancedigital.in/medias/LG-FHV1265ZFW-Fatl-492664531-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MjE1MnxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDY1Lzk4NDA1NzA5NTc4NTQuanBnfGVkOGM3YjU3ZWYyYmY1Mzc3M2NhYjVhYjhjMDdjMzc1ZDgyODY4ZTJlYjk4NDhmMTMxNDU3YmViZTE2ZGYwMDc",name:"LG 6.5 Kg Front Loading Fully Automatic Washing Machine, FHV1265ZFW",
    rating:5,orignalPrice:'₹32,990.00',stickPrice:'₹40,590.00'},
    {img:"https://www.reliancedigital.in/medias/IFB-DIVA-AQUA-SXS-6008-Washing-Machine-492910931-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NDgyNXxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaGJlLzk4NDU5NTE3OTExMzQuanBnfDQxM2Q2NzVjNzU1MjcyYTFiZTQ3MjVmMmEzZGI4ZjgxYWFjMGU5YTIyNWIyMTZiMDExM2MxOWZlYjliZDI1NWI",name:"IFB 6 Kg Front Loading Fully Automatic Washing Machine, Diva Aqua SXS 6008",
    rating:4,orignalPrice:'₹27,490.00',stickPrice:'₹30,690.00'},
    {img:"https://www.reliancedigital.in/medias/Panasonic-NA-F65C1CRB-FATL-492572967-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oMDQvaDg3Lzk4NDUwNzU3MDU4ODYuanBnfDdiZjkyZmE5MzM5N2I5YWE1YjE4YzMxYzAyMWVhMjkwN2I4YjJkMjZhOWIwODZlNDY5ZGYyOTdmNTEwZGE0OGU",name:"Panasonic 6.5 Kg Top Fully Automatic Washing Machine, NA-F65C1CRB",
    rating:5,orignalPrice:'₹15,990.00',stickPrice:'₹18,750.00'},
    {img:"https://www.reliancedigital.in/medias/Bosch-WLJ2026WIN-Washing-Machine-491959078-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzM2MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2hkYS85NTQ4NzMzNjQ0ODMwLmpwZ3w4ZGZmMTYwZWNiYmE5ODI4NmViMzlhN2U4NzI3ZDNmZjk5YzNjN2ZjMjE1YTY5Y2M3NGYzNjQ0NGM2M2JlYzlj",name:"Bosch 6 Kg Front Loading Fully Automatic Washing Machine with Ecosilence Drive",
    rating:4,orignalPrice:'₹32,990.00',stickPrice:'₹42,990.00'},
    {name:"Samsung 6 Kg Front Loading Fully Automatic Washing Machine with Ceramic Heater,",img:"https://www.reliancedigital.in/medias/Samsung-WW61R20GLMW-TL-Washing-Machine-491959198-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTU2NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2g3OS85NDkxMzc4NDA1NDA2LmpwZ3wwOWExNGNiNjA2ZjYyNWRkNWVjMDc0MmUwNWZjNTRiMzc1ZDk3OWEyMWZhNGRmZGU2MGZmNjBkOWVjNzQ2MTU1",
    rating:3,orignalPrice:'₹26,500.00',stickPrice:'₹32,500.00'},
    {img:"https://www.reliancedigital.in/medias/LG-T65SKSF1Z-Washing-Machine-491891982-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUyOTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2g1YS85Mzc4MjY3MDM3NzI2LmpwZ3wyYWZmNDM5MWE0OWRjNmUwNmQ2ZWZiMDc2OWYyZDJjODljMDY0NjE2NTkwMTU0N2VmM2I5MDMyOTI2Y2I3ZTQ4",name:"LG 6.5 Kg Top Fully Automatic Washing Machine, T65SKSF1Z Middle Free Silver",
    rating:5,orignalPrice:'₹19,490.00',stickPrice:'₹22,890.00'},
    {img:"https://www.reliancedigital.in/medias/Bosch-WLJ2026HIN-Washing-Machine-491959079-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDE0Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDliL2g2Mi85NDk0MDUwODk3OTUwLmpwZ3xjZWVkYzYyZDIxNTU2YWU1M2FlY2M0YmY5ZDY2ZjA4M2VhNTJiYWM2NjIzMmJiNGUzMmYwNWViMjc2ODA2YjVh",name:"Bosch 6.5 Kg Front Loading Fully Automatic with Washing Machine with EcoSilence Drive,",
    rating:5,orignalPrice:'₹36,990.00',stickPrice:'₹44,590.00'},

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
displayProd(machineData)

