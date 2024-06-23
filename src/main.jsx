import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ederken ./ koymayı unutma sakın!
import { useState, useEffect } from 'react'
//aynı sayfadan 1den fazla import ederken böyle yazabilirsin


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// //React JSX elemanı
// const texts = (
//   <>
//     <h1>A Lonely Road</h1>
//     <p>Miles Away From Those I loveeee...</p>
//   </>
// );

// //String olarak, "" içine almadan değişkene HTML elemanları atayabilirsin Reactta.
// //<></>, 1den fazla HTML elemanı atarken ve div kullanmak istemiosan kullnılır.
// //Direkt div içine alsan da olur, inan fark etmez.

const container =  document.getElementById("root");
// const pageNavbar =  document.getElementById("navbar");

// // ReactDOM.createRoot(container).render(texts);


// function user(age) {
//   if (age => 18) {
//     return <h1>Welcom</h1>
//   } else {
//     return <h1> Your age is under 18, you can not login </h1>
//   }
// }

// const userLogin = user(15);
// //Bu şekilde, HTML elemanı return eden bir fonksiyon ile de JSX elemanı ataybiliriz


// //Components
// //JSX elemanı döndüren fonksiyonlardır.

// function Header() {
//   const textStyle = {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "20px", 
//   }

//   //js objesi olarak, style içerikleri oluşturup inline style olarak atayabiliyoruz

//   const myHeader = (
//     <div className='header-container'>
//        <p style={textStyle}>Main Page</p>
//        <p>Help</p>
//        <p>About Us</p>
//        <a href=""> Cart </a>
//     </div>
//   );

//   return myHeader;
// };

// //artık, Header fonksiyonunu <Header/> olarak yazabiliriz ve fonksiyonun içindeki HTML kodları gelir

// const navbar = (
//   <>
//     <Header/> 
//     <h1>Bad Omens</h1>
//     <p>It's Hard To Say, Where It went So Wrong</p>
//   </>
// );

// // ReactDOM.createRoot(pageNavbar).render(navbar);

// //Props//
// //Props, componentslerin parametresi gibi bir şey
// //Ama propslar obje

// // function ProductCard(product) {
  
// //   return (
// //     <div className="product-card">
// //       <h3>{product.name}</h3>
// //       <p>{product.price}</p>
// //     </div>
// //   );
// // };

// // // const products = (
// // //   <div>
// // //      <ProductCard name="PC" price={100}/>
// // //      <ProductCard name="Phone" price={200}/>
// // //   </div>
// // // );

// // const productContainer =  document.getElementById("products");

// // // ReactDOM.createRoot(container).render(products);

// // //states
// // //statesleri kullanarak, herhangi bir elementte değişiklik olduğunda sayfanın kendi kendini tekrar renderlayarak o değişikliği yapmasını sağlarız


// // function ProductCard({name,price}) {
   
// //   //parametreleri objec destruction yaparak atadık
   
// //   // const statePrice = useState(price);

// //   // Şimdik, bizim import ettiğimiz statein kendi default halinden dolayı, stateprice bir dizi oldu
// //   // ilk elemanı, bizim verceğimiz yeni fiyat olur, 2. elemanı ise o fiyatın değişmesinde rol oynayan fonksiyon

// //   // statePrice[0] = 20;
// //   // olarak verirsek, fiyatın değişince 20 olmasını sağlarız
// //   //Bu bir dizi olduğu için buna da array destruction uygulayabiliriz

// //   const [statePrice, setStatePrice] = useState(price);
// //   //ilk yazdığımız statePrice[0] ,ikinci yazdığımız statePrice[1]
// //   //statePrice direkt parametre olarak gelen price a eşit şu an.
// //   //ama, setStatePrice fonksiyonu ile bunu değiştirebiliriz.
   
// //   //ikinci yazdığımız zaten bir fonksiyon, direkt ona değer atayalım

// //    function changePrice() {
// //     setStatePrice(5);
// //    };

// //    //Direkt, setStatePrice fonksiyonunu kullanarak, fiyatı değiştirmeyi denersek, sayfa sonsuz döngüye girer
// //    //Bir event içinde 1 kerede gerçekleşmesi lazım.
// //    //O yüzden butona fonksiyon atayarak kullanabilirz

// //    function increasePrice() {
// //     setStatePrice(statePrice + 5)
// //    };

// //    //useEffect
   
// //    useEffect(() => {
// //     console.log("useEffect applied succesfully");
// //    }, [statePrice]);

// //    //2.değer olarak bir dizi alır.
// //    // Diziyi Boş bırakırsan sadece sayfa renderlandığında bir kere çalışır.
// //    // Dizi dolu ise, dizideki eleman her değiştiğinde, useEffect uygulanır
// //    //Bu durumda, statePrice her değiştiğinde, useEffect
    
// //    //En önemli kullanımı: useState asenkron değildir, asenkron bir şekilde kullanabilmek için,her değişiminde istediğimiz şey olsun diye useEffect in içinde kullanabilirz
   
   
// //   return (
// //     <div className="product-card">
// //       <h3>{name}</h3>
// //       <p>{statePrice}</p>
// //       <button onClick={changePrice}>Change Price</button>
// //       <button onClick={increasePrice}>İncrease Price</button>
// //     </div>
// //   );
// // };

// // const products = (
// //   <div>
// //      <ProductCard name="PC" price={100}/>
// //      <ProductCard name="Phone" price={200}/>
// //   </div>
// // );

// // ReactDOM.createRoot(container).render(products);


// //input valuesü alma
// //js deki gibi eventListener kullanmayıp, onclick ile fonksiyon çağırddığımız için, işler biraz daha farklı

// function İnputDisplayer() {
//    const [value, setValue] = useState("");
//    //değeri boş olan bir useState elemanı yarattık
 
//    function handleInputChange(anyEvent) {
//     setValue(anyEvent.target.value);
//    };
//    //Bu arkadaş, inputtan gelen value her değiştiğinde, yani her yeni bir harf yazıldğında, o yeni yazılanı value'e atıyacak

//   return (
//    <>
//       <input type='text' onKeyUp={(event) => handleInputChange(event)}/>
//       <p>Input Value : {value}</p> 
//    </> 
//   ); //Her değişimde, return kısmı tekrar renderlanıcak ve istediğimiz değerler gözükücek.
//      //onKeyUp, eventListenerdaki keyUp ile aynı olay. 
// };

// const input = (
//   <>
//    <İnputDisplayer/>
//   </>
// );

// //  ReactDOM.createRoot(container).render(input);


//Props ve map kullanımı, BAYYAA ÖNEMLİİİ!!!

 function HandleProducts({product}) { //abi parametre obje olduğu için, {} içinde yaz yoksa çalışmıo
   return (
     <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
     </div>
   );
 };

 const products2 = [
   {
    id:1,
    name:"PC",
    price: 500,
   },

   {
    id:2,
    name:"Phone",
    price: 400,
   },

   {
    id:3,
    name:"Mouse",
    price: 100,
   },

   {
    id:4,
    name:"Headphon",
    price: 200,
   },

   {
    id:5,
    name:"Table",
    price: 50,
   },
 ];


 function displayProducts() {
  return (
    <>
      <div className='products-cards-container'>
        {products2.map((product) => {
          return <HandleProducts key={product.id} product={product}/>
        })}
      </div>
    </>
  );//map mantığıyla tek tek ürünleri fonksiyona yollayıp render ettirdik
}; // <HandleProducts key={product.id} product={product}/> , her bir ürüne özel farklı bir key olmak zorunda yoksa çalışmıyor
  // product = {product} dediğimiz yer zaten, HandleProducts fonksiyonunun parametresini, products2.map'in parametresine eşitliyoruz! 

const allProducts = displayProducts();

ReactDOM.createRoot(container).render(allProducts);



