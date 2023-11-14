const course = {
    course: "N220",
    cTitle: "Introduction to Media Applicaiton Development",
    seats: 20,
    enrolled: 18,
    avaliability: function(){
        return this.seats > this.enrolled;
    }
}

console.log(course.course + " Open: " + course.avaliability());

course.enrolled = course.enrolled + 2;
console.log(course.enrolled)
console.log(course.course + " Open: " + course.avaliability());

let pageDetails = "Height: " + window.innerHeight + "<br/>Width: " + window.innerWidth;

document.getElementById("hwDetails").innerHTML = pageDetails;

function IUPUIWebsite(){
    open("http://www.iupui.edu")
}
function printPage(){
    print()
}

document.getElementById("wpDetails").innerHTML = window.location + "<br/>" + document.URL;
//use window.location get and set

document.getElementById('domain').innerHTML = "Domain: " + document.domain; //tbd

document.getElementById('update').innerHTML = "Last Modified: " + document.lastModified

function getGreeting(){
    let greeting = document.getElementById('greeting').value;
    
    console.log("greeting", greeting.trim())
    greeting.trim()
    console.log(greeting)

    let gMsg = "Your message is " + greeting.length + " characters long";

    let middleC = greeting.length/2

    gMsg+="The middle character is " + greeting.charAT(middleC);

    document.getElementById('messageInfo').innerHTML = gMsg;
}

let newText = "I hope this works";
newText = newText.toUpperCase()

document.getElementById('coolText').innerHTML = newText.toUpperCase()
newText = newText.replace("HOPE", "think")
document.getElementById('coolText').innerHTML = newText

let classList = document.getElementById("classes").innerHTML;

console.log(classList);

let classListArray = classList.split(",")

console.log(classListArray)

document.getElementById('class').innerHTML = classListArray[2];

var newNumber= 3.7638;
document.getElementById("fixed").innerHTML = newNumber.toFixed(1)
document.getElementById("fixed").innerHTML = newNumber.toPrecision();

var myPI = Math.PI
console.log(myPI)

document.getElementById("round").innerHTML = Math.round(myPI)
document.getElementById('ceil').innerHTML = Math.ceil(myPI)
document.getElementById('floor').innerHTML = (Math.floor(myPI))

var rNum = Math.random()*10
document.getElementById('random').innerHTML = Math.floor(rNum) + 1;

//Date Object
const today = new Date()
document.write("Today: " + today)
document.write("<br>Day: " + today.getDay())
document.write("<br>Date: " + today.getDate())
document.write("<br>Month: " + today.getMonth())
document.write("<br>Year: " + today.getFullYear())
document.write("<br>Today's Date : " + today.toDateString())
