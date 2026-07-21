function openModal(id){
    document.getElementById(id).style.display="block";
}

function closeModal(id){
    document.getElementById(id).style.display="none";
}

function closeOutside(event){
    if(event.target.classList.contains("modal")){
        event.target.style.display="none";
    }
}

function openContact(){

    alert("شماره تماس:09138137176");

}
document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        let modals=document.querySelectorAll(".modal");

        modals.forEach(function(modal){
            modal.style.display="none";
        });

    }

});


let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("محصول به سبد خرید اضافه شد");
}



function updateCartCount(){

    let count = document.getElementById("cart-count");

    if(count){

        count.innerHTML = cart.length;

    }

}


updateCartCount();
// نمایش سبد خرید

function showCart(){

    let cartBox = document.getElementById("cart-items");

    if(!cartBox) return;


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if(cart.length === 0){

        cartBox.innerHTML="<h3>سبد خرید شما خالی است</h3>";

        document.getElementById("total-price").innerHTML="";

        return;

    }


    let html="";

    let total=0;


    cart.forEach(function(item,index){


        total += item.price;


        html += `

        <div class="product-card">

        <h3>${item.name}</h3>

        <p class="price">
        ${item.price.toLocaleString()} تومان
        </p>


        <button class="buy-btn"
        onclick="removeCart(${index})">

        حذف

        </button>


        </div>

        `;


    });


    cartBox.innerHTML=html;


    document.getElementById("total-price").innerHTML=

    "مبلغ کل: "+total.toLocaleString()+" تومان";

}



function removeCart(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.splice(index,1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    showCart();

    updateCartCount();

}



function clearCart(){

    cart = [];

    localStorage.removeItem("cart");

    showCart();

    updateCartCount();

}
