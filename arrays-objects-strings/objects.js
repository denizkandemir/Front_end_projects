const people = [
    {
      name:"Deno",
      surname:"Kandemir",
      gender:"Male",
      job:"Student"
    },
     
    {
      name:"Peloo",
      surname:"Duman",
      gender:"Female",
      job:"Student",
    },
  
    {
      name:"Timo",
      surname:"Orhan",
      gender:"Male",
      job:["Balıkçı","İnşaatçı","Garson"] //Objenin içindeki elemanın içinde dizi olabilir
      
    },
  
    function write(){
      console.log("deneme")  //Objelerin içinde fonksiyon olabilir
    },
  
  ]
  
  const colorPalette = {
    blueColor: '#00f',
    orengeColor:'#df60',
    
    show: (messageToShow) => {
      console.log(messageToShow);
    },
     
    //Objeler bu şekilde arrow fonksiyon içerebilir
  }
  
  colorPalette.show("Under Your Scars I Pray")
                            
  console.log(people[2].job[1]) //İnşaatçı yazdırır
  console.log(people[3]()) //fonksiyonu yazdırır yani deneme
  console.log(people[0].name) //Deno yazdırır
  
  colorPalette.red = 'f00'; //Color palette yenş bir değer verdik
  //red artık colorpalette ye eklendi
  
  
  function getColor(key) {
    return colorPalette[key];
    //Böyle kullanmazsan objeye erişemezsin
  };
  
  console.log(getColor("blueColor")); //parametreyi "" içinde yaz knk

  //Object Destructuring

  const user = {
    firstName: "Denoy",
    userName: "denokandemo",
    email: "denizkandemir137@gmail.com",
    
    details : {
        title: "Developer",
    }

  };

  const {firstName, email, details: {title} } = user;

  //Böyle atadığımız değerler artık, user anahtar kelimesi olmadan ulaşılabilir

  function displayUser() {
    console.log(`User : ${firstName} , User's email: ${email} , User's Title ${title}`);
  };

  displayUser();

  //Const olarak atamadan direkt fonksiyonda parametre olarakta kullanılabilir

  function displayUser2( {firstName, email, details: {title} }) {
    console.log(`User : ${firstName} , User's email: ${email} , User's Title ${title}`);
  };

  displayUser2(user); //parametre olarak bunu yazdık ama fonksiyondaki parametrelerde bu objenin içindekiler döner

  //Object  Birleştirme


  const user2 = {
    name: "",
    username:"",
    phonenumber:"",
    email:"",
    password:"",
  };

  const newuser = {
    username: "denokando4",
    password:"1235",
    email: "denizkandemir137@gmail.com",
  };
  
  console.log(Object.assign(user2,newuser));

  //Artık, user2 deki boş olan bilgiler, newuserdaki aynı isimle dolu 
  //olan bilgiler ile dolduruldu. user2 objesi değişmiş oldu

  console.log(Object.assign({},user2, newuser));

  //Bu şekilde kullanırsan, yeni bir nesne oluşturulur, newuser değişmez

  const newnewUser = {...user2};

//Burdaki 3 nokta, objenin tüm özelliklerini veriyorum anlamına gelir.
//3 nokta kullanmazsan, user objesinin spesifik bir değerini bildirmen gerekir. user.name gibi


console.log(newnewUser);

const createdUser = {...user2,...newuser};
//Bu şekilde de 2 objeyi, tek bir objeye atayarak birleştirebilirsin


const createdUser2 = {...user2,...newuser, isVerified: true, age:25,};
//Birleştirme yaparken fazladan objenin içine değişken de ekleyebilirsin
console.log(createdUser);
