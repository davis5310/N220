//let vs var
let x = 10
if(x=10){
    let x=20
    document.getElementById('s1'),innerHTML = "<p>X where x = 20:" + x + "</p>"
}

document.getElementById('s1'),innerHTML = "<p>X default:" + x + "</p>"

var y = 10
if(y==10){
    var y = 20
    document.getElementById('s1').innerHTML = "<p>Y where y = 20:" + y + "</p>"
}

document.getElementById('s1').innerHTML = "<p>Y default:" + y + "</p>"

//default parameters
function multiply(a,b=2){
    return a*b
}

let m1 = multiply(5)
let m2 = multiply(5,8)

document.getElementById('s2').innerHTML="<p>Default Parameters: "+ m1 +"</br>Two Parameters:" + m2 + "</p>"

//multiline text

let t1 = "Hello, World!"
let t2 = 'Hello, World!' 
let t3 = `Hello, World!
- love HTML
- love CSS
- love Javascript`

document.getElementById('s8').innerHTML = t1 + t2 + t3

//template Literals
let firstName = "Gary"
let lastName = "Smith"

document.getElementById('s3').innerHTML += "<p>"+ firstName+ " " + lastName + "</p>"

document.getElementById('s3').innerHTML +=`<p>${firstName} ${lastName}</p>`

//Arrow Function Expressions
function fullName(f,l){
    return `${f} ${l}`
}

//Arrow Function with one line in code block
fullName2 = (f,l)=> `${f} ${l}`

//Arrow function with multi line code block
fullName3=(f,l)=>{
    console.log(f,l)
    return `${f} ${l}`
}
 
document.getElementById('s4').innerHTML = `<p>${fullName(firstName, lastName)}</p>`

document.getElementById('s4').innerHTML += `<p>One line Arrow Function ${fullName2(firstName, lastName)}</p>`

document.getElementById('s4').innerHTML += `<p>Multi line Arrow Function ${fullName3(firstName, lastName)}</p>`

//JavaScript Classes
class book{
    constructor(title,author,pubDate){
        this.title = title
        this.author = author
        this.pubDate = pubDate
    }
    
}

const jsBook = new book("JavaScript and You","Code Master", 2020)

document.getElementById('s5').innerHTML = `<p>Title: ${jsBook.title}</br>Author: ${jsBook.author}</br>Date Published: ${jsBook.pubDate}</p>`

//Array Destruction
const course = ['N220','Intro to Javascript']
let [courseNum, courseTitle]=course

document.getElementById('s7_array').innerHTML = `<p>${courseNum}: ${courseTitle}</p>`

let [title, surName] = ['Mr', 'John']
document.getElementById('s7_array').innerHTML+=`<p>${title} ${surName}</p>`