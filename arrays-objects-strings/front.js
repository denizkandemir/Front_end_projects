console.log("anan ama")

//Değişkenler

for(var i = 0; i < 1; i++)
{
    var number = 69   //var her yerde geçerli 
    var word = "yeuh"  //for un dışında da ulaşırsın
    
    let number2 = 89  //let sadece for içinde geçerli
    let word2 = "yiahh" //for un dışından ulaşılamaz
    
    const number3 = 99 //const değiştirilemez
    const word3 = "yahuuh" //for un dışından ulaşılamaz
    
    
    
    console.log(number,word,number2,word2,number3,word3)              
}

console.warn("Bu br uyarı amk")
console.error("Bu bir hata amk!!")

const persons = 
[
  { 
    name:'Deno', //Boşluk olursa çalışmıo nie inan bilmiyorum
    surname:'Kandemir',
    age:19 
  },

  { 
    name:'Peloo',
    surname:'Duman',
    age:19 
  },

  { 
    name:'Timo',
    surname:'Orhan',
    age:20 
  }
]

console.table(persons)//Console.table bu bilgileri, tablo olarak yazdırmamızı sağlar
console.log("anan")

console.assert(4>5,"4, 5ten büyük değildir amk") //ilk ifade true ise bişi yapmaz,yanlış işe 2. ifadeyi yazdırır 

console.group("meyveler")
console.log("elma")
console.log("armut")     
console.log("muz")
console.groupEnd() //Bir liste görğnümü verir

console.time("deneme")
for(var j = 0; j < 100; j++) {
  console.log(i)
} 
console.timeEnd("deneme")  //console.time ile time.end arasında uygulanan kodun, 
                            //çalışma süresini hesaplar


//iç içe ternary operatörü

let number4 = 2;
let value = number4 > 3 ? "Positive" : number4 > -1 ? //Bu şekilde iç içe ternany operatçrü kullanılarbilir
"Positive" : number < 1 ?  //Her seferinde, true ya da false durumuna bakıp, uygun duruma göre işlem gerçekleştiri
"Number is smaller than 1" :  "Number is bigger than 1"
console.log(value);

//or ve and in kısa kullanımları

let anything = true;
let something = false;

const verify = anything || something;
//Hangisi doğruysa onu verify a atıycak


//javasal saçmalık

if(2==2){
  console.log("They are equal")
}
if(2=="2"){   //Veri tipini değil, veriyi karşılaştırdığı için birbirlerine eşitler
  console.log("They are equal")
}

//javasal saçmalığın çözümü

if(2==="2"){   //Bu arkadaş veri tipini de karşılaştırır işte
  console.log("They are equal")
}
else{ 
  console.log("They are not equal")
}

console.log(2!="2") //false verir çünkü eşitlermiş amk
console.log(2!=="2") //True verir çünkü eşit değiller amk