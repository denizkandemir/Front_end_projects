//clasic sınıf mantığı

class car{
   constructor(color) {
    this.color = color;
    this.speed = 0;
   }
   
   speedUp() {
    this.speed += 10;
   }
}

let car1 = new car("crimson");
//constructordaki rengi, obje yaratılırken verdik

car1.speedUp();
console.log(car1);

//inheritance

class carWithEngine extends car{
    //extends car, inheritance almak için
  constructor(color,engine) {
    super(color);
    //burası, color kısmını inheritance olarak car classından alyor,
    //yani esase this.color = color geçerli oldu yine ama kodu yok
    this.engine = engine;
  }
}

let car2 = new carWithEngine("black" , "V8")


console.log(car2);