const Navbar=()=>{
    return `<div id="Logo">
    <img src="https://i.ibb.co/WvkVDSz/2.png" alt="">
</div>
<div id="Search-Bar">
    <input type="text" placeholder="Find your favorite products" id="Search-Input">
    <button id="Search-Icon"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
</div>
<div id="CartLogin">
    <div id="Cart"><i class="fa-solid fa-cart-shopping"></i><cart-count id="Cart-Count">0</cart-count><span> Cart</span></div>
    <div id="User"><i class="fa-solid fa-user"></i><span id="Profile"></span></div>
</div>`
}
const CategoryPanel=()=>{
    return `<div id="MobilesTablets">MOBILES & TABLETS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="Televisions">TELEVISIONS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="Audio">AUDIO <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="HomeAppliances">HOME APPLIANCES <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="Computers">COMPUTERS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="Cameras">CAMERAS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="KitchenAppliances">KITCHEN APPLIANCES <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="PersonalCare">PERSONAL CARE <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    <div id="Accessories">ACCESSORIES <i class="fa-sharp fa-solid fa-angle-down"></i></div>`
}
export {Navbar,CategoryPanel}