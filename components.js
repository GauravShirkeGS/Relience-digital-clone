const Navbar=()=>{
    return `<div id="allnavbar">
    <a href="./index.html">
    <div id="Logo">
        <img src="https://i.ibb.co/WvkVDSz/2.png" alt="">
        <span id="logo_text">GO SHOP</span>
    </div>
</a>
<div id="Search-Bar">
    <input type="text" placeholder="Find your favorite products" id="Search-Input">
    <button id="Search-Icon"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
</div>
<div id="CartLogin">
<a href="cart.html"><div id="Cart"><i class="fa-solid fa-cart-shopping"></i><cart-count id="Cart-Count">0</cart-count><span> Cart</span></div></a>
<a href="login.html"><div id="User"><i class="fa-solid fa-user"></i><span id="Profile"></span></div></a>
</div>
</div>`
}
const CategoryPanel=()=>{
    return `
    <a href="#"> <div id="MobilesTablets">MOBILES & TABLETS <i class="fa-sharp fa-solid fa-angle-down"></i></div></a>
<a href="./tv.html"><div id="Televisions">TELEVISIONS <i class="fa-sharp fa-solid fa-angle-down"></i></div></a>
<a href="./audio.html"> <div id="Audio">AUDIO <i class="fa-sharp fa-solid fa-angle-down"></i></div></a> 
 <div id="HomeAppliances">HOME APPLIANCES <i class="fa-sharp fa-solid fa-angle-down"></i></div>
 <div id="Computers">COMPUTERS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
 <div id="Cameras">CAMERAS <i class="fa-sharp fa-solid fa-angle-down"></i></div>
 <div id="KitchenAppliances">KITCHEN APPLIANCES <i class="fa-sharp fa-solid fa-angle-down"></i></div>
 <div id="PersonalCare">PERSONAL CARE <i class="fa-sharp fa-solid fa-angle-down"></i></div>
 <div id="Accessories">ACCESSORIES <i class="fa-sharp fa-solid fa-angle-down"></i></div>
    `
}

const footer=()=>{
    return `
    <div id="inform">
        <div id="fst">
            <div>
                <h4>PRODUCT CATEGORIES</h4>
                <a href="#"><p>Smartphones</p></a>
                <a href="#"><p>Laptops</p></a>
                <a href="#"><p>DSLR</p></a>
                <a href="#"><p>Television</p></a>
                <a href="#"><p>Air Conditioners</p></a>
                <a href="#"><p>Refrigrator</p></a>
                <a href="#"><p>Kitchen Appliances</p></a>
                <a href="#"><p>Acessories</p></a>
                <a href="#"><p>Personal Care & Grooming</p></a>
            </div>
            <div>
                <h4>SITE INFO</h4>
                <a href="#"><p>About</p></a>
                <a href="#"><p>resQ Services</p></a>
                <a href="#"><p>Site Map</p></a>
                <a href="#"><p>Gift Cards</p></a>
                <a href="#"><p>Corporate Enquires</p></a>
                <a href="#"><p>Contact Us</p></a>
            </div>
            <div>
                <h4>RESOURCE CENTRE</h4>
                <a href="#"><p>Product Review</p></a>
                <a href="#"><p>Buying Guides</p></a>
                <a href="#"><p>How Tos</p></a>
                <a href="#"><p>Featured Stories</p></a>
                <a href="#"><p>Event & Happenings</p></a>
                
            </div>
            <div>
                <h4>POLICIES</h4>
                <a href="#"><p>Terms of Use</p></a>
                <a href="#"><p>FAQs</p></a>
                <a href="#"><p>Cancel & Returns Policy</p></a>
                <a href="#"><p>Pricing & Payment Policy</p></a>
                <a href="#"><p>Shipping & Delivery Policy</p></a>
                <a href="#"><p>Privacy Policy</p></a>
                <a href="#"><p>E-Waste Recycling Policy</p></a>
                <a href="#"><p>EMI & Additional Cashback T&C</p></a>
                <a href="#"><p>Caution Notice</p></a>
               
            </div>
        </div>
        <div id="sec">

            <div>
            <h4>FOLLOW US</h4>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>

            <div id="app">
            <h4>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h4>
          <div id="down">
            <div class="play">
                
                <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="">
                
            </div>
            <div class="play">
                <img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="">
               
            </div>
          </div>
            </div>
        </div>
    </div>
    <div id="Disclaimer">
        <p id="dis">Disclaimer</p>
        <div>
            <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual</p>
            <p>product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        </div>
    </div>
    <div id="copy">
        <p> © 2022 Go Shop All Rights Reserved.</p>
    </div>
    `
}
export {Navbar,CategoryPanel,footer};