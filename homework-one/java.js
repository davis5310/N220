//Dating
var ticketNum = 3;
var ticketCost = 14;
var ttCost = ticketNum * ticketCost;
document.getElementById('ticketNum').innerHTML = "Tickets:" + ticketNum;
document.getElementById('ticketCost').innerHTML = "Cost: $" + ticketCost;
document.getElementById('ttCost').innerHTML = "Total: $" + ttCost;

//Shopping
var shirt = 35;
var pants = 75;
var shoes = 60;
var total = shirt + pants + shoes;
var bank = 235.87
var after = bank - total;
var jacket = 70
var addJacket = after - jacket;
document.getElementById('bank').innerHTML = "Bank: $" + after;
document.getElementById('addJacket').innerHTML = "False";
//Pizza
var pizza = 8;
var student = 2.5
var stuFed = Math.floor(pizza *4 / student);
var leftover = pizza*4 - Math.floor(stuFed) * student;
document.getElementById('profPizza').innerHTML = "Students: " + stuFed + " Rector:" + leftover;

//Mega Bar
var adult = 12;
var child = 6;
var drinks = 1.5;
var Monty = adult * 2 + child + drinks*3;
document.getElementById('Monty').innerHTML = "$" + Monty;
//Tips
var week1 = 202.45;
var week2 = 134.97;
var week3 = 256.63;
var week4 = 178.22;
var average = (week1 + week2 + week3 + week4)/4;
document.getElementById('tips').innerHTML = "Weekly Tip Average: $" + average;
