const toDoList = [];

const toDo1 = {
    mission: "Learn Javascript",
    completed: false
};

const toDo2 = {
    text: "Learn CSS",
    completed: true
};

toDoList.push(toDo1,toDo2);
//Bu şekilde arraye objeler ekleyebilirsin
toDoList.pop();
//son elemanı siler
toDoList.shift();
//ilk elemanı siler
toDoList.unshift(toDo1);
//toDo1 i  en başa ekler

let randomNumber = Math.random()
console.log(randomNumber);
//math random, 0 ile 1 arası bir sayı verir.Bu yüzden çarparak kullnamamız lazım

let anotherRandomNumber = Math.random()*100;
//artık, 1 ile 100 arası vericek

function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1 // 1-13 arası vermesi için +1 ekledik
}

const tempratures = [
    {
        degrees: 72, 
        isRecordTemp: false
    },

    {
        degrees:84,
        isRecordTemp:true
    },
    
    {
        degrees: 55, 
        isRecordTemp: false
    },

    {
        degrees: 67, 
        isRecordTemp: false
    },
];

const result = tempratures.some((data) => data.degrees == 84);
//Dizinin içindeki herhangi bir objenin, degrees değerini kontrol eder,
//içlerinde 84 e eşit olan varsa true döner

console.log(result);

const recordCheck = tempratures.some((data) => data.isRecordTemp);
//Burası, ifteki gibi default olarak data.isRecordTemp === true demek
//Some fonksiyonu, istenen şartı dizinin bir elemanı bile sağlasa bize true döner
//Mesela, recordCheck bize true olarak döner ancak, tempratures dizisinin sadece bir elemanın isRecordTemp özelliği truedur

//Eğer tüm elemanları karşılaştırmak istersek, every fonksiyonu kullanmamız gerekiyor


const everyRecordCheck = tempratures.every((data) => data.isRecordTemp);
//Bu fonksiyon bize false dönücek çünkü tempratures in sadece 1 elemanının isRecordTemp'i true'a eşit.

const newTemperatures = tempratures.map((temperature) => 
  temperature.degrees >= 70 ? {...temperature, isHigh: true} : {...temperature, isLow:true}
);

//map methodu,tüm diziyi dönüp içinde bir şeyleri değiştirmemize yarar. 
//Bu örnekte,dizinin herhangi bir objesinin temperature'u 70 dereceden büyük ise, o objenin tüm elemanlarını yazdırır ve yeni bir isHigh elemanını değeri ile ekler.
//Eğer 70 dereceden küçük ise, objenin tüm değerlerini yazdırır ve isLow = true elemanını ekler.

//map gibi başka bir elemana atamalı arrow fonksiyonları kullanırken, => den sonra {} koyarsan değer return etmen gerekir.Koymazsan gerekmez!!

console.log(newTemperatures);

newTemperatures.forEach((temperature) => {
  if(temperature.isHigh) {
    console.log(`Temperature of outside is ${temperature.degrees}. Stay in HOME!`)
  }
});

//Filter ve find methodları

const restaurants = [
    {
      name: "Cap City Diner",
      kmAway: 2.2
    },

    {
        name: "Chop Shop",
        kmAway: 4.2
    },

    {
        name: "Northstar Cafe",
        kmAway: 0.9
    },

    {
        name: "City Tavern",
        kmAway: 0.5
    },
];

const cRestaurants = restaurants.filter((item) => {
   return item.name.startsWith("C")
});

//Adı üstünde filtreleme yapar. Bu durumda, c ile başlayan restauranları bulup verir
//Filter bize array dönerken , find tek bir eleman döner.

const specificRestaurant = restaurants.find((item) =>{
    return item.name.toLocaleLowerCase().includes("north")
});

console.log(cRestaurants);
console.log(specificRestaurant);

//reduce methodu

const menuItems = [
    {
      name: "Salad",
      price: 9
    },

    {
        name: "Pita",
        price: 16
    },

    {
        name: "Steak",
        price: 23
    },

    {
        name: "Chicken",
        price: 35
    },
];

const total = menuItems.reduce((accumulator, item) => {
    console.log(`Accumulator : ${accumulator} , item price : ${item.price}`)
    return accumulator + item.price;
}, 0);

//Burda accumulator, toplanan değerlerdir.Accumulator ın ilk değerini aşağıda veririz biz burda 0 verdik. Total gibi düşün
//Sondaki 0 accumulator ın alacağı ilk değer.
console.log(total);

//Bu başlangıç değerini değiştirelim

const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.reduce((accumulator, number) => {
    accumulator.push(number*2);
    console.log("accumulator is : " , accumulator ,"number is : " , number)
    return accumulator
}, []);

//Başlangıç değerimiz yani accumulator dediğimiz değer bir dizidir. Yani elemanlar 2 ile çarpılıp tek tek yeni bir diziye atılacak
//return accumulator dememizin sebebi de elemanlarğın dizi olması. Her reduce döngüsü döndüğünde accumulator bir eleman daha kazanır
// 2,4 sonra 2,4,6 gibi accumulator ın elemanları artar, biz de bunları yeni bri diziye atarız.
console.log(evenNumbers);

//Spread operatörü
//Javascriptsel başka bir saçmalık

const dinnerIdeas = ["Lahmacun" , "Pide"];

/*
const allDinnerIdeas = dinnerIdeas;
allDinnerIdeas.push("Pizza");

Bu kodu böyle yazdığında , öyle gözükmese bile, elindeki ilk array e hiçbir işlem yapmamana rağmen o da değişiyor.
Yani dinnerIdeas arrayine de pizza ekleniyor. Ama biz bunu istemiyoruz o array e bir şey yapmadık sonuçta.
Bunu engellemek için şunu yapabiliriz*/

const allDinnerIdeas = [...dinnerIdeas];

//Şimdi ise , önce yeni bir array oluşturmuş olduk na bunun sayesinde []
//Sonra ise o yeni array in içinde ...dinnerIdeas ile dinnerIdeas dizisinin tümm elemanlarını koyduk
//Böylece , allDinnerIdeas dizisinde yapacağımız değişiklikler , dinnerIdeas dizisini etkilemiycek

allDinnerIdeas.push("Pizza");

console.log(dinnerIdeas);
console.log(allDinnerIdeas);

//Array destruction

const foods = [
    "Cheeseburger",
    "Chicken",
    "Steak"
];

const [food1 ,food2, food3] =  foods;
//Sırayla atanırlar
console.log(food1,food2,food3);

//Şimdik bu şurda işe yarar.Bir dizinin en tepesine kazananı koyup sonra , kaybedenleri kolayca yazdırırsın

const tournument = [
    "Italy",
    "France",
    "Englan"
];

const [winner , ...losers] = tournument;

//Artık, ilk eleman = winner oldu, kalan hepsi =  losers oldu

console.log(winner, losers);

//Setler

//Unique elemanlar içerirler, unique olmayan setten saylmaz

const setNumbers =  new Set([1,3,1]);
//new set denerek oluşturulur, unuque olmayan eleman atılır.

console.log(setNumbers);

const randomDishes = [
    "Cheeseburger",
    "Chicken",
    "Steak",
    "Lahmacun" , 
    "Pide",
    "Cheeseburger",
    "Steak",
    "Pide",
    "çiğköfte"
];

const uniqueDishes = [...new Set(randomDishes), "french fries"];
//Yeni bir dizi oluşturup içine , unique olabilmeleri için set şeklinde randomDishes dizisinin elemanlarını koyduk, fazladan french fries ı da ekledik.
//... kullanmayı unutma sonra hepsi ayrı elemanmış gibi davranıo


console.log(uniqueDishes);
