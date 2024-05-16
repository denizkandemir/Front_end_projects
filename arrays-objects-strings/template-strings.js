//Template Strings 
//İçine variable alabilen stringlerdir

function generateSentence(array, sentence) {
    let baseString = `The ${array.length} ${sentence} are `
                     //array.length 2 i verrir, sentence kısmı sadece highest mountains i alır
                   
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    //if, sadece cümlenin sonuna tekrar virgül eklenmemsi için.
    //cümlenin kalanı döngüde dönen dizinin elemanlarının eklenmesi ile gelir
    return baseString
}

const sentence = generateSentence(["Mount Everest", "K2"],"highest mountains",);
console.log(sentence);


//////////////////////////////////////////////////////////////////////////////////////////////

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
    //boş bunlar git resim bul koy
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    //Bu şekilde for un içinde HTML elemanları atayabilirsin
    container.innerHTML = imgsDOM
    //For un dışında olması gererken yere innerHTML vermemizin nedeni, bir döngü
    // her döndüğünde innerHTML in değişmesi çok vakit kaybettiriyor
}

renderImages()