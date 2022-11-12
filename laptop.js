let display=document.getElementById('Slide')
function slideshowLaptop(){
imageShow=[
    "https://www.reliancedigital.in/medias/intel-12th-Gen-Gaming-Laptop-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzc2Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM2L2hiZS85ODU5OTMzNjAxODIyLmpwZ3xjNGFmMmY1OWNlZWJiMmE0N2Y1OGIyMDc2YjBkYjllOWFkMWYzYWMyZTUyMTVkZTY3MTMyOTQ0YzFlZWYxMWVj"
    ,"https://www.reliancedigital.in/medias/HP-Internet-VM-Laptop-cc-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDA4NDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hlMC85ODY3MjgwODQyNzgyLmpwZ3wwODJjNGRmZDc3YTZhYWQ0YjRmNDViZGY4YzJhNGU4NmU1MjU3Y2QyOTRiNmQ1NzNiNTQ4ZTUwYmExY2UxMTM5",
"https://www.reliancedigital.in/medias/HP-Spectre-01-RD-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5ODk2NXxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaGQwLzk4NjcyNzkyNjk5MTguanBnfDRhN2Y2YjJkNDVlODNjYTEzYjFjODU3NDY0YjYyY2YxMDUzZTM5NWI0MjIyMzczNjNkYjRkNTZiMzc0YmFlNGE",
"https://www.reliancedigital.in/medias/MSI-Laptops-at-never-before-prices-14-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjI0NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2gwYS85ODYyMjA2OTE0NTkwLmpwZ3w4ODcwMGM2MmY2ZmFjMGQ0YmYxZGYwNWY5OGY4ZDE4YjI2NGI0NzNjMGRlZjZmMjczYTk3MzRlODVmOTMwYjA5",
"https://www.reliancedigital.in/medias/Laptops-D-CLP-Banner-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMDk1NTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYwL2g5NC85ODYyMjA2NzgzNTE4LmpwZ3xmMWMwYzdlNjA2MWUzZDA4MTJiYjAzYmMyMDA1NjdhOTgyY2Q3MGQwMWViYjMyNmQxMjNjZmRmNWU5ODVhNjM1"]
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
slideshowLaptop()

let logoData=[
    {imG:"https://www.reliancedigital.in/medias/HP-Logo.jpg?context=bWFzdGVyfGltYWdlc3w3MDE0fGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oN2YvOTExNzQyMTE0MjA0Ni5qcGd8NmJiNTU2N2FlZGQ5ZGFmMTU1NzNhMzRmNmU1NmVkNTA1MjNjYjE4MjQxMmZhZGRkOGZhNDliNDU3ZWFiODdjZg"},
    {imG:"https://www.reliancedigital.in/medias/Lenovo-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2ODM5fGltYWdlL2pwZWd8aW1hZ2VzL2gxOS9oN2EvOTExNzQyMTMzODY1NC5qcGd8YTRiNzM0MzE5MDliMmRkYjVmMmUzZGYzZjNlYTJiZjIzODJjODFhNzVlMjgyMDRlNTlhM2MzNDg3NGQxNzZlMg"},
    {imG:"https://www.reliancedigital.in/medias/Dell-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2NDU1fGltYWdlL2pwZWd8aW1hZ2VzL2gyZi9oZjQvOTExNzQyMTIwNzU4Mi5qcGd8OGQ0YWQ0NzFmZGEwNjAyNWRjODVmMmI0MTk1NGNkM2U4MDg2ZTYyMDRkN2U0MmZlOTEzNWE2M2U4ZWQ2NDZkOA"},
    {imG:"https://www.reliancedigital.in/medias/Acer.jpg?context=bWFzdGVyfGltYWdlc3w2Mzk1fGltYWdlL2pwZWd8aW1hZ2VzL2gxOS9oOWIvOTg1NzUxNDAxMjcwMi5qcGd8YjY5NTFmNmE4NWY1NjYwNDY1ZTc0MmNlZmQwYThkYTE2NTEyZGY4YzNmZjIxMGJlNTk2MDJjY2ZkN2YxMGU4Nw"},
    {imG:"https://www.reliancedigital.in/medias/Apple-Logo-1.jpg?context=bWFzdGVyfGltYWdlc3wyMjc2fGltYWdlL2pwZWd8aW1hZ2VzL2g3Ny9oMTIvOTExNzQyMTI3MzExOC5qcGd8MzZiYjcyM2E4MzNlZWFmY2I1MDFkMjczYzBlOGQwNTE5ZThhNTRiZTZmNTYxODllNDk3NWQ2YmQ4ZDE3YWQ2NQ"},
    {imG:"https://www.reliancedigital.in/medias/Asus-Logo.jpg?context=bWFzdGVyfGltYWdlc3w2MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g5ZS9oMTcvOTExNzQyMTQ2OTcyNi5qcGd8MzM0ZTA3M2Q5M2NhYzlmNGM2MGNkZWIzNGE2OTA1M2EyYjkxYWNhM2NhOTk5MDI3Mjk5YzdiYTg5ZjY4NDAyNw"},
    {imG:"https://www.reliancedigital.in/medias/Laptops-Shop-By-Brands-Avita.jpg?context=bWFzdGVyfGltYWdlc3w3MTk1fGltYWdlL2pwZWd8aW1hZ2VzL2g2OS9oMTUvOTU4NTU4NDgzMjU0Mi5qcGd8ZmNkMmI3YmEzZjZkNjc2ZGY0ZDBkMzU3NWYxMGJiOGNkY2Q3YjMzZDVmZDgyYmQyZGI3NTA3NGJiYjZhODgxOQ"},
    {imG:"https://www.reliancedigital.in/medias/Laptops-Shop-By-Brands-VAIO.jpg?context=bWFzdGVyfGltYWdlc3wzMjEwfGltYWdlL2pwZWd8aW1hZ2VzL2hiZS9oNDkvOTU4NTU4NDg5ODA3OC5qcGd8YmMyNWNjNTViNzg1Mzg1OGU4ZDNjYTcxYzA5ZDA4MGNiNjM4YTM3MTJhYTYxODQ5YmI0ZmY0ZjlhZTYzYWUwMw"}
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

let laptopData=[
    {img:"https://www.reliancedigital.in/medias/HP-FQ4021TU-High-End-Laptops-492575363-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjM5NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDMxL2gwMS85ODAxMzU0MDg0MzgyLmpwZ3w0MDVmMTU1ZWM5ZDZlMGIxYjAxNjlhMTIzZGY2ZjE3NGI3Yzg4MDFlYzIxODkzOWIyM2MyM2U2OWUyNzVlNTI2",name:"HP 15S-FQ4021TU Laptop",
    rating:5,orignalPrice:'₹56,999.00',stickPrice:'₹59,999.00'},
    {img:"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",name:"Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina)",
    rating:5,orignalPrice:'₹89,490.00',stickPrice:'₹99,900.00'},
    {img:"https://www.reliancedigital.in/medias/Asus-FX506LHB-HN356W-Laptops-492850463-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjY0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2hhMS85ODQ3NjgwNTMyNTEwLmpwZ3wwOWQwNmU4ODBlZGM2OGQwYzc4NDAzNTRmYTllYzUxYTEyODE2ODc3ZTc3ZTI1MGNiY2U4OTZkMTVmODc1ZDI3",name:"Asus HN356W TUF F15 Gaming Laptop (10th Gen Intel Core i5-10300H/16 GB/512 GB SSD/4GB)",
    rating:4,orignalPrice:'₹61,990.00',stickPrice:'₹64,999.00'},
    {img:"https://www.reliancedigital.in/medias/HP-FQ4021TU-High-End-Laptops-492575363-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjM5NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDMxL2gwMS85ODAxMzU0MDg0MzgyLmpwZ3w0MDVmMTU1ZWM5ZDZlMGIxYjAxNjlhMTIzZGY2ZjE3NGI3Yzg4MDFlYzIxODkzOWIyM2MyM2U2OWUyNzVlNTI2",name:"HP 15S-FQ4021TU Laptop (11th Gen Intel Core i5-1155G7/8GB/512GB SSD)",
    rating:4,orignalPrice:'₹56,999.00',stickPrice:'₹58,999.00'},
    {img:"https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjA1MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhYi85ODQ5MjM4MTI2NjIyLmpwZ3xhYmVkMDA2OGU1ZmM4ODYzNTdhNzU1NzJmMzIxOTk5NDNkN2RmMDhjNzQ3YzYwOTczYTAyODRiMDVmOTg4ODE5",name:"Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD)",
    rating:3,orignalPrice:'₹35,500.00',stickPrice:'₹55,500.00'},
    {img:"https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzA0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g3NS85ODQxMjI3MzAwODk0LmpwZ3xmZWFjMjg5NzlhMTY5OTZmNDZkYTczZjlmNWY1YmY5YTRhMDVjN2RiZjhiYmM1YTNjNWI1N2QzNmMyNjRlZWYz",name:"Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon",
    rating:4,orignalPrice:'₹29,490.00',stickPrice:'₹30,999.00'},
    {name:"HP 15s-fq5111TU Laptop (12th Gen Intel Core i5-1235U/8 GB RAM/512 GB SSD/Windows 11",img:"https://www.reliancedigital.in/medias/Hp-6P129PA-ACJ-Laptop-493177598-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDM5MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2hmYy85ODgyMjg5NjY4MTI2LmpwZ3w1YjJiYjNlMDAwNWM2NGU1ODYyNThlMmI5MGYxZjc1M2Y5ZmNlNDg5NWY1MzBkMzQ3NWY4ZGQ2ODU5MGIxNzBh",
    rating:5,orignalPrice:' ₹59,999.00',stickPrice:' ₹66,990.00'},
    {img:"https://www.reliancedigital.in/medias/JioBook-NB2112QB-Laptop-492337972-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjU5NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2g0Ni85OTEwNzMwMjI3NzQyLmpwZ3wyYjA4MWZlMGUzNGY1YzY2YTFlYmZiNGQyMDFlNTYxYzE3ZDYyNWNiMWIwNjAzMGJmYWQ4NTY3YTkyMmNhZGQw",name:"JioBook ",
    rating:2,orignalPrice:'₹15,799.00',stickPrice:'₹16,799.00'},
    {img:"https://www.reliancedigital.in/medias/Lenovo-LJIN-Laptops-492574616-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDEzMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2g3OS85NzQxNTYzMTk5NTE4LmpwZ3xhMGU2NTcyYTdjMmZhNmYxMDg2ZGY2MDMzOWMwMmI3NDczZjNlNGU3MTU1N2U5OTEzMDI4MmFhNTI0YTkwZTgw",name:"Lenovo LJIN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4/8GB/512GB SSD/Intel UHD",
    rating:4,orignalPrice:'₹41,499.00',stickPrice:'MRP: ₹65,690.00'},
    {img:"https://www.reliancedigital.in/medias/HP-6Q121PA-ACJ-High-End-Laptops-492850685-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MTM4ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaGM3L2g1ZS85ODYwMzg3NzMzNTM0LmpwZ3wzNzZhZDU2NDc1NzQyYTcwYjFiYzNjNTZlMjA0YzUzMTk2ZTllMDc4Y2NjMGY0OGUyYWU5ODFlNmI1MDhkODQ3",name:"HP 14s-ef1002TU Laptop (11th Gen-Intel Core i3-1115G4/8 GB/512 GB SSD)",
    rating:4,orignalPrice:'₹46,499.00',stickPrice:'₹55,499.00'},
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
displayProd(laptopData)

