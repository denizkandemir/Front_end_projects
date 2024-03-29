const products_container = document.querySelector("#products-container");

async function GetProducts() {
   const response = await fetch("https://fakestoreapi.com/products");
   const products = await response.json();

   /*apılardan gelen bilgilerin gelme süresini beklememizden dolayı async fonksiyon ile await
   keyword ü kullanırız. Await, istenen bilgi gelene kadar diğer satır koda geçmez. 
   fetch ile bilgileri alırız apıdan. 
   json gelen bilgileri kod olarak çalışabiliir hale getirmek için lazım*/

   const productWebsite = products.map((item) => {
      return `<div> 
                <img src="${item.image}"/>
                <h3> ${item.title}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
             </div>`;
   }).join("");
   
   products_container.innerHTML =  productWebsite;

   /*Apı dan productlar bir nesne array i olarak gelir.
   Map keyword ü bu arrayin tüm elemanlarının özelliklerine erişmemizi sağlar.
   Map in içine yazdığımız (item) foreach içine yazdığımız item ile aynı mantık, her bir elemanı temsil ediyor.
   Yukarda map ile eriştiğimiz nesnelerin istediğimiz özelliklerini html taglarıyla yazıyoruz ki
   Siteye ekleyebilelim.
   Join kodu array olarak gelen nesnelerin arasının neyle ayrılcağını belirler.
   Mesela join(3) yazarsan her bir dizi elemanının arasında 0 yazar.
   Biz bir şey yazmasını istemediğimiz için boş bıraktı yoksa default olarak , yazıyor*/

};

GetProducts();