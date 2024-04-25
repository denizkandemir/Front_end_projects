/*Bir fonksiyonu her çağırdığımızda, içindekş değişkenin sıfırlanmasını istemiyorsak kullanırız.
 Mesela like sayısı gibi her butona tıklandığında sayının artmasını istediğimiz şeylerde kullanılır*/

function LikeCount() {
    let numberOfLikes = 0;

    return function addLike() {
      numberOfLikes += 1;  
      return numberOfLikes;
    };
};

//Artık, içerdeki fonksiyonun içindeki numberOfLikes değişkeni her çağrıldığında sıfırlanmaz
//Galiba farklı bir fonksiyonun içinde olduğu için numberOfLikes tekrar 0'a atanmadan önceki değerinden devam ediyor.

const like = LikeCount();

for (let number = 0; number < 5; number++) {
    console.log(like)  
};

// 1, 2, 3, 4, 5 çıktısı

//Hatta sadece içerdeki fonksiyonda da parametre verebilirsin


function LikeCount() {
    let numberOfLikes = 0;

    return function addLike(step) {
      numberOfLikes += step;  
      return numberOfLikes;
    };
};

const like2 = LikeCount();

for (let number = 0; number < 5; number++) {
    console.log(like2(2))  
    //Parametreyi burda verdik, artık likelar 2şer 2şer artıcak
};

console.log(like2(8));
//8 arttırır

//Fonksiyonda default parametreleri

function convertTemprature(celcius,decimalPlaces = 1) {
    const fahrenheit = celcius*1.8+32;
    return fahrenheit.toFixed(decimalPlaces);
};

// decimalPlaces a defaul olarak 1 verdik.
// Fonksiyonu çağırırken 2.bir parametre vermediğimiz sürece 1 olarak kabul görür

console.log(convertTemprature(30));