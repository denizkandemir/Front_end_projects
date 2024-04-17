const products_container = document.querySelector("#products-container");
const navbar_search = document.querySelector("#navbar-search");


let allProducts = [];

/*async fonksiyonda, apıdan gelen ürünleri bu diziye atıyoruzz
Dizi içinde olmazsa filter çalışmıo*/

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
   button.addEventListener("click", () => {
      const categoryProducts = allProducts.filter((anyProduct) => anyProduct.category === button.name);
      ShowProducts(categoryProducts);
   });
});

/*querySelectorAll kullanarak, sınıfı category-btn olan tüm butonları seçtik. Bu durumda, 
4 butonumuz olduğu için categoryButtons bir dizidir. Foreach ile içindeki her bir butonu dönüp,
o butonlara tıklandığında ne olcağını belirleyebiliriz.
filter ile, butonun adı ile API dan gelen categorysi aynı olan ürünleri categoryProducts'a atayp,
sonra ShowProducts(categoryProducts) yaparsak, istediğmiz filtreleme oluşur.*/



navbar_search.addEventListener("keyup", () => {
   const filteredProducts = allProducts.filter((anyProduct) => {
      return anyProduct.title.toLowerCase().includes(navbar_search.value.toLowerCase());
   });
   ShowProducts(filteredProducts);

   /*keyup, yazılanları algılar
   filter ile yazdığımız kısımda, allproducts dizisinin içindeki bir nesnenin titleına bakıyoruz, 
   eğer title, inputa giren harfler ile eşleşiyorsa, eşleşmeyi filteredProducts değişkenine atıyoruz.
   Sonra, filtrelediğimiz ürünün bize gözükebilmesi için, ShowProducts fonksiyonumuzu kullanıyoruz.*/
});

async function GetProducts() {
   const response = await fetch("https://fakestoreapi.com/products");
   const products = await response.json();
   allProducts = products;
   ShowProducts(products);

   /*apılardan gelen bilgilerin gelme süresini beklememizden dolayı async fonksiyon ile await
   keyword ü kullanırız. Await, istenen bilgi gelene kadar diğer satır koda geçmez. 
   fetch ile bilgileri alırız apıdan. 
   json gelen bilgileri kod olarak çalışabiliir hale getirmek için lazım*/

};

function ShowProducts(products) {
   products_container.innerHTML = products.map((item) => {
      return `<div> 
                <img src="${item.image}"/>
                <h3> ${item.title}</h3>
                <s>${item.price}</s>
                <p>${MakeDiscount(item.price, 30)}</p>
                <p>${item.description}</p>
                <button class="wishlist-button" onclick="addToWishlist(${item.id})">
                  Add To Wishlist 
                </button>
             </div>`;
   }).join("");

   /*Apı dan productlar bir nesne array'i olarak gelir.
   Map keyword'ü bu arrayin tüm elemanlarının özelliklerine erişmemizi sağlar.
   Map in içine yazdığımız (item) foreach içine yazdığımız item ile aynı mantık, her bir elemanı temsil ediyor.
   Yukarda map ile eriştiğimiz nesnelerin istediğimiz özelliklerini html taglarıyla yazıyoruz ki
   Siteye ekleyebilelim.
   Join kodu array olarak gelen nesnelerin arasının neyle ayrılcağını belirler.
   Mesela join(3) yazarsan her bir dizi elemanının arasında 0 yazar.
   Biz bir şey yazmasını istemediğimiz için boş bıraktı yoksa default olarak , yazıyor*/
};

function addToWishlist(anyProduct) {
   console.log("added to wishlist");
   const wishlist_products = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
   const productToAdd = allProducts.find((item) => item.id === anyProduct);

   const isProductInWishlist = wishlist_products.some(
      (item) => item.id === anyProduct
   );

   if (!isProductInWishlist) {
      localStorage.setItem("wishlistProducts", JSON.stringify([...wishlist_products, productToAdd]));
   } 
   else {
      alert("This products is already in your wishlist");
   };
};


function MakeDiscount(price, discount) {
   return price - ((price * discount) / 100).toFixed(2);
};

GetProducts();