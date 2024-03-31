const wishlist_products_container = document.querySelector("#products-container");

function ShowWishlist() {
    const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts")) || [];

    wishlist_products_container.innerHTML = wishlistProducts.map((item) => {
        return `<div> 
                   <img src="${item.image}"/>
                   <h3> ${item.title}</h3>
                   <s>${item.price}</s>
                   <p>${MakeDiscount(item.price, 30)}</p>
                   <p>${item.description}</p>
                </div>`;
    });
};


function MakeDiscount(price,discount) {
    return price - ((price*discount)/100).toFixed(2);
 };

 ShowWishlist();