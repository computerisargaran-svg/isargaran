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
