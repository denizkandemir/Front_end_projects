let name = "deno"
console.log(`Welcome again ${name}`)

let word = "HELLO THERE   "
console.log(word.trim()) // Sondaki Boşlukları siler

let name2 = "Denız kırırırı"

console.log(name2.toUpperCase()) // Büyük harfle yazar
console.log(name2.toLowerCase()) // Küçük harfle yazar
console.log(name2.toLocaleUpperCase('tr-TR')); //Türkçeye gçre büyütüp yazar. i ler ile bu durumda
console.log(name2.indexOf('e'))  //ilk e nin indexsini verir
console.log(name2.lastIndexOf('ı'))  //Son e nin yerini verir
console.log(name2.indexOf("kırırırı")) //There kelimesinin kaçıncı indexten başladığını verir
console.log(name2.indexOf("anan")) //Olmayan bir kelimeyi ararsan , -1 verir 
console.log(name2.indexof('ı' , 4)) //4. elemandan sonraki ı nın index ini verir

console.log(name2.substring(3)) //3. elemandan sonraki elemanları verir
console.log(name2.substring(3,10)) //3. eleman ile 10.eleman arasını verir 

let word2 = "General Kenobi"
let word3 = "You are shorter than I have expected"

console.log(word2.concat(word3,word3,name2)); //Yan yana yazdırır bu değişkenleri
console.log(word2.charAt(3)) //3. elemanı verir , word2[2] ile aynı olayı yapar
console.log(wor2.charAt(15))//word2[15] bize undefined dönüp hata oluştururken, charat boiluk verir , hata olmaz


console.log(word2.charCodeAt(2)) //2.elemanın , unicode değerini verir
console.log(word2.startsWith('G')) //Bakar, true ya da false döner
console.log(word2.endsWith('b'))

let names = "Deno,Pelo,Timo,Usman"
let names_array = []
names_array = names.split(',') //, den ayırarak diziye çevirir
console.log(word2.slice(0,8)) //0.elemandan 8.elemana kadar yazar , 8 dahil değil

var word4 = "Hello from the other sideee , Hello too all of youu"
console.log(word4.replace("Hello" , "ANAN"))//Bulduğu ilk Hello yu anan ile değiştirir
//Sadece ilk hello değişir
console.log(word4.replaceAll("Hello","Anan"))//Bulduğu tüm helloları anan ile değiştirir

var word5 = "Helloo"
console.log(word5.padEnd(10 ,'!')) //Kelimenin uzunluğu 10 olana kadar sonuna ! ekler
console.log(word5.padStart(10 , '!')) //Kelimenin uzunluğu 10 olana kadar başına ! ekler
console.log(word5.repeat(5)) //5 kere word5 ı yazdırır
