let grades = [78,86,92,77];
var ansText = document.getElementById('answers');

ansText.innerHTML = "Array: " + grades;
ansText.innerHTML+="<br>Second Value: " + grades[1];
grades[1] = 83;
ansText.innerHTML += "<br>Array: " + grades;
ansText.innerHTML += "<br>Array Length: " + grades.length;
let lastGrade = grades.length - 1; //3
let changeLastGrade = ++grades[lastGrade];
ansText.innerHTML += "<br>New Grade: " + changeLastGrade; 
ansText.innerHTML += "<br>Array: " + grades;
let gradeTotal =  grades[0] + grades[1] + grades[2] + grades[3];
let average = gradeTotal / grades.length;
ansText.innerHTML += "<br>Average Grade: " + average; 
ansText.innerHTML += "<br>Above 80: " + (average >= 80);

let tops = ["tshirt", "blouse", "tank", "button-up", "sweater", "hoodie"];
let bottoms = ["slacks", "jeans","shorts","skirts"];
let outfits = [tops,bottoms];

document.write(outfits[0][4], outfits[1][1]);
//add value at end
tops.push("hoodie");
var eaText = document.getElementById("extraAnswers");
eaText.innerHTML = "Array after push: " + tops;
//remove last value
tops.pop();
eaText.innerHTML += "<br>Array after pop: " + tops;
//remove first value
tops.shift();
eaText.innerHTML += "<br>Array after shift:" + tops;
//Add value at begininning
tops.unshift("tshirt")
eaText.innerHTML += "<br>Array after unshift: " + tops;
//add/remove anything in array
tops.splice(1,1)
eaText.innerHTML += "<br>Array after removing blouse: " + tops;
//add blouse and hoodie after button-up
tops.splice(3,0,"blouse","hoodie");
eaText.innerHTML += "<br>Array after adding values: " + tops;

const friend = {
    fName: "William",
    lName: " Shakespeare",
    age: 23,
    hometown: "Stratford",
    fullName: function(){
        return this.fName + "" + this.lName;
    }
}
document.getElementById('fullName').innerHTML = friend.fullName() + " was born in " + friend.hometown;

const car = {
    year: 2020,
    make: "Dodge",
    model: "Charger",
    automatic: false,
    mpg: 19,
    efficiency: function(){
        return (this.mpg>40);
    }
}

document.getElementById('car').innerHTML = "I own a " + car.year +" " + car.make + " " + car.model;
document.getElementById('gasEff').innerHTML = car.make + " " + car.model + " Efficiency: " +  car.efficiency();
//let list = ['Year', 'Make', 'Model', 'Automatic','MPG','Efficiency']
