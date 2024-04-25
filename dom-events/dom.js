const paragraph = document.createElement("p");

paragraph.innerText = "AAAAAAA";
paragraph.style.backgroundColor = "crimson";

document.body.appendChild(paragraph);
//Bu şekilde de, innerHTML tarzı bir sayfaya ekleme yapabilirsin

const post4 = document.createElement("div");
//Yeni bir div yarattk
//post4.className = "top-post";
//div e class verdik
post4.innerHTML = "<strong> This is a new post </strong>";
//div in içine strong elemanı ekledik

const mainElement = document.querySelector("#main");
mainElement.prepend(post4);
//Oluşturduğumuz div'i, main div'in içine attık
//prepen methodu bir elemanı en üste eklememizi sağlar. Şu an main divinin en üstü elemanı post4 oldu
//appendChild ise en sona ekler

const displayBtn = document.createElement("button");
displayBtn.innerText = "Show Post";
document.body.prepend(displayBtn);
//Buton yaratıp, sayfanın en tepesine koyduk

displayBtn.addEventListener("click" , () => {
    post4.classList.toggle("invincible");
});
//toggle bir tıklayınca classlist e ekleme yapar, tekrar tıklayınca çıkarır.
//classList.add ya da classList.remove da kullanabilirsin duruma göre

/*///////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////*/

const titleInput = document.querySelector("#titleInput");

titleInput.addEventListener("change", (event) => {
    addNewPostTitle(event.target.value);
});

//change, input a her farklı bir cümle vs girildiğinde fonksiyonu çalıştırcak
//event.target, olayın gerçekleştiği elementtir. Bunun value'sini yani, inputa girilen cümleyi ya da kelimeyi alıyoruz
//Fonksiyona yolluyoz sonra

function addNewPostTitle (any_title) {
   const newPostTitle = document.createElement("h2");
   newPostTitle.textContent = any_title;
   document.body.prepend(newPostTitle);
};

//Na bu fonksiyonda, inputtan gelen cümleyi h2 elemanına atayıp, o elemanı da sayfanın en tepesine atıyor