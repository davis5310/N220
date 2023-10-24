//for loops
for(let i=0; i<5; i++){
    document.getElementById('for').innerHTML+= i+" ";
}

//while loops
let weeks = 5
while(weeks>1){
    document.getElementById('while').innerHTML+= "There are " + weeks + " weeks until Thanksgiving break.<br/>";
    weeks--;
}

//do while loops
let candy = -3
do{
    document.getElementById('doWhile').innerHTML+= "I have " + candy + " pieces of candy.<br/>"
    candy--
} while(candy>0);
//for in loops

//for of loops

//loop problems
//Problem 1
let months = ['January','February','March','April','May','June']
let monthList = ''

for(m=0; m<months.length;m++){
   monthList+= months[m] + " ";
}
document.getElementById('an1').innerHTML = monthList;

//Problem 2
let monthList2 = '<ol>'

for(m2=0; m2<months.length;m2++){
   monthList2+= "<li>" + months[m2] + "</li>";
}
monthList2 += '</ol>'
document.getElementById('an2').innerHTML = monthList2;

//Problem 3
let slices = 9
while(slices>=2){
    document.getElementById('an3').innerHTML+= "There are " + slices + " slices of pizza left. <br/>"
    slices--;
}

//Problem 4
let num = 15
do{
    document.getElementById('an4').innerHTML+="Number Count: " + num + "<br/>"
} while(num<20)

//Problem 5
let today = new Date()
let tDate = today.getDate()
for(let d=50; d>=5; d-=5){
    document.getElementById('an5').innerHTML+= d+ " "
    if(d==tDate){
        document.getElementById('an5').innerHTML+="<br/> That's today's date. <br/>"
        break;
    }
}

//Problem 7

let tickets = 10
let ticketText=" "
while(tickets>0){
    tickets--
    if(tickets==0){
        ticketText+="All tickets have been sold."
        break;
    }
    ticketText+="Another seat is gone. Only " + tickets + " tickets left. <br/>"
    if(tickets==5){
        ticketText+="Half the tickets are sold. Buy yours Now!<br/>"
    }   
}
document.getElementById('an7').innerHTML = ticketText;