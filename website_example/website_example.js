const title = document.querySelector("#title");

title.innerHTML = "<h1>PELUU ÇAY İÇUU</h1>";
//İNNERHTML olarak atadığımız eleman, websitesinde, verdiğimiz html tagına dönüşür

/*title.innerText = "Helllo There";
innertext ise, html elemanı olarak değil normal yazı olarak yazar*/

const count = document.querySelector("#count");
const increaseBtn = document.querySelector("#increaseBtn");

let countValue = 0;
increaseBtn.addEventListener("click", () => { 
  countValue++;
  count.innerText= countValue;
});//eventlistener ile, ilk parametrede ne olunca ikinci parametreye geçilceği verilir.
