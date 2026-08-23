import { menuItems } from './menuItems.js';
const getcartIds = localStorage.getItem('cartIds');
let cartIds = JSON.parse(getcartIds);
//console.log(cartIds.length); 
const cartCards= document.getElementById('cartItems');
const cartcontainer= document.getElementById('cart-container');
const orderTotalSection= document.getElementById('orderTotalSection');
if(cartIds.length==0){
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = '<h1 class="my-10 text-[#FF5A4F]">Your cart is feeling lonely! Start adding items!</h1> <a href="menu.html" class="my-10 border py-4 px-5 rounded bg-[#FF5A4F] text-white" >Continue Shopping</a>';
        cartcontainer.append(infoDiv);
        orderTotalSection.classList.add('hidden');
            // alert('empty cart');
        
}else if(cartIds.length>0){
menuItems.forEach((item) => {
    cartIds.forEach((cartItemId) => {
       
         
        if (item.id == cartItemId) {
            //alert('items available');
            const cartDiv = document.createElement('div');
            cartDiv.innerHTML = `
      <div class="cart-item" id="${item.id}"  data-price="149">

                <img src="${item.image}"
                     alt="Cheesy Chicken Burger"
                     class="food-image">

                <div class="item-details">
                    <h5 id="burger" class="text-sm md:text-md font-medium mb-2">${item.name}</h5>
                    <p class="text-#E9FAF5 mb-2 text-xs line-clamp-2 hidden md:block">${item.desc}</p>
                    <p class="price-details">₹${item.price}</p>
                </div>

                <div class="quantity-control md:px-2">
                    <button class="remove-cart">-</button>
                    <span class="cart-value">1</span>
                    <button class="add-cart">+</button>
                </div>

                <div class="delete-btn">
                <button id="${item.id}" class="delete-btn text-[#FF5A4F]">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                </div>
            </div>
  `;
  cartCards.append(cartDiv);
        }
    })
});
}

const cartitems = document.querySelectorAll(".cart-item");
const subtotalAmount = document.getElementById("subtotalAmount");

cartitems.forEach(function (items) {

    const addItems = items.querySelector(".add-cart");
    const removeItems = items.querySelector(".remove-cart");
    const cartValue = items.querySelector(".cart-value");
    const price = items.querySelector(".price-details");
    const deleteBtn = items.querySelector(".delete-btn");

    let priceVal = Number(items.dataset.price);

    let sum = Number(cartValue.textContent);


    // ADD
    addItems.addEventListener("click", function () {

        sum++;

        const totalprice = priceVal * sum;

        price.textContent = "₹" + totalprice;
        cartValue.textContent = sum;

        calculate();  // ⭐ update subtotal

    });


    // REMOVE
    removeItems.addEventListener("click", function () {

        if (sum > 1) {

            sum--;

            const totalprice = priceVal * sum;

            price.textContent = "₹" + totalprice;
            cartValue.textContent = sum;

            calculate();  // ⭐ update subtotal
        }

    });


    // DELETE
    deleteBtn.addEventListener("click", function () {

        items.style.display = "none";
        calculate(items);  // ⭐ update subtotal
        //console.log(items.id);
        cartIds = cartIds.filter((cid) => cid != items.id);
       // console.log(cartIds);
       if(cartIds.length==0){
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = '<h1 class="my-10 text-[#FF5A4F]">Your cart is feeling lonely! Start adding items!</h1> <a href="menu.html" class="my-10 border py-4 px-5 rounded bg-[#FF5A4F] text-white" >Continue Shopping</a>';
        cartcontainer.append(infoDiv);
        orderTotalSection.classList.add('hidden');
            // alert('empty cart');
        
}      
       localStorage.setItem('cartIds', JSON.stringify(cartIds));
    });

});


function calculate() {

    let total = 0;

    cartitems.forEach(function (items) {

        if (items.style.display !== "none") {

            const price = items.querySelector(".price-details");

            const priceValue = Number(
                price.textContent.replace("₹", "")
            );

            total += priceValue;
            console.log(total)
        }

    });


    subtotalAmount.textContent = "₹" + total;
    const delAmount = document.getElementById("deliveryAmount");
    const disAmount = document.getElementById("disAmount");
    const totalAmount = document.getElementById("totalVal")

    //Delivery Amount
    let delivery = 0;
    if (total > 200) {
        delivery = 0;
        delAmount.textContent = "Free";
    } else if(total >0){
        delivery = 40;
        delAmount.textContent = "₹40";
    }
    else{
         delivery = 0;
        delAmount.textContent = "₹0";

    }

    let discount = 0;

    const coupon = localStorage.getItem("coupon");

    if (coupon === "CAMPUS20") {

        discount = 40;
        disAmount.textContent = "-₹40";

    } else {

        discount = 0;
        disAmount.textContent = "₹0";
    }



    const totalPri = total + delivery - discount;

    totalAmount.textContent = "₹" + totalPri;




}
calculate();

const couponInput = document.getElementById("couponInput");
const couponBtn = document.getElementById("couponBtn");


if (couponBtn) {

    couponBtn.addEventListener("click", function () {

        const couponCode = couponInput.value.trim().toUpperCase();

        if (couponCode === "CAMPUS20") {

            couponBtn.textContent = "Applied";
            couponBtn.style.background = "green";
            couponBtn.style.color = "white";

            // Save coupon
            localStorage.setItem("coupon", "CAMPUS20");
            localStorage.setItem("couponDiscount", "40");

            calculate();

        } else {

            couponBtn.textContent = "Invalid";
            couponBtn.style.background = "red";
            couponBtn.style.color = "white";

            localStorage.removeItem("coupon");
            localStorage.removeItem("couponDiscount");

            calculate();
        }

    });

}


const checkout=document.querySelector(".checkout-btn");
checkout.addEventListener("click",function(){
    window.location.href = "checkout.html";
})





