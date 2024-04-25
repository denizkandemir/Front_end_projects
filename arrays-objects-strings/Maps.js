const myMap1 = new Map([
    ["age", 20],
    ["verified",true]
]);

//Mapler, dictionary gibi key ve value değerleri alırlar.
//[age,20] age=>20 dir. age =  key , 20 = value

myMap1.set("amount",10);
//Bu şekilde yeni key ve value atayabilirsin

console.log(myMap1);

myMap1.forEach((key) => {
  console.log(key);
});

//Foreach ile böyle bilgileri dönebilirsin

myMap1.forEach((key,value) => {
    console.log(key,value);
});

console.log(myMap1.get("amount"));
//Böyle de keylere ulaşarak, valueleri yazdırabilirsin
  
const userData = {
    username:"denokado4",
    title:"student",
    getBio() {
        console.log(`User ${this.username} is a ${this.title}`);
        //Aynı objenin içinde ulaşmaya çalıştığın bilgilerde this kullanman lazım
    },
    askToAFriend() {
        setTimeout(() => {
            console.log(`Do you want to be friends with ${this.username}`);
        }, 4000);
        //Settimeout, fonksiyonun ne kadar süre bekledikten sonra işleme başlayacağını belirler.
        //Bu örnekte 4000 milisaniye yani 4 saniye sonra başlıyor
    }
    //Aynı objenin içindeki, içi içe fonksşyonların iç tarafındaki fonksiyonu arrow fonksiyon olmalı ki,
    //objenin değerlerine ulaşabilsin
};

userData.askToAFriend();
userData.getBio();