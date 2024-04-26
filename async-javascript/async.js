const articleWriting = {
    title: "Bury The Light",
    body:   "Conten of this writing...",
    userId: 44
};

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    headers: {"Content-Type" : "application/json;"},
    body: JSON.stringify(articleWriting)
})     .then(response => response.json())
       .then((data) => console.log(data));


//Fetch methodu ile aldığımız sayfaya, post yöntemi ile veri yolladık
/* Apılarda post yeni veri yüklemek için kullanılır.
   Put ise zaten var olan veriyi güncellemek için kullanılır.
   Burdaki thenlerin yaptığı olay, async fonksiyonla apıdan veri almakla aynı
   fetch ile, serverı aldıktan sonra, post ile yeni veri yüklemesi yapıyoruz, bu yüklemenin içeriği ise
   body'e verdiğimiz articleWriting objesidir.İnternet serverlarına yollama yaparken json formatına çevirmemiz gerektiği için JSON.stringfy ekliyoz başına
   Aynı şekilde, internetten aldığımız veriyi, jsde kullanabilmek için, response un sonuna .json() methodunnu ekliyoruz.
   .then de await gibi, verinin gelmesini beklyor, then bunu yap işte fln filan*/

async function getPost(any_id) {
   const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${any_id}`);
   const data2 = await response2.json();
   console.log(data2);
}

getPost(5);

//fetch metodunun içindeki serverın sonundaki birimi, parametre olarak değiştirdik
//sondaki methodun zaten id olduğunu biliyoz, ondan dolayı beklediğimizden farklı bir değer gelmez
//Fonksiyonu artık hangi sayı ile çağırırsak, o id deki objeyi alıcaz.