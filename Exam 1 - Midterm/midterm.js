let start = 100
let wtext = document.getElementById('wText')
let nw = document.getElementById('nw')
let myNumb = 87
function rollDie(){
    let bw = document.getElementById('bw').innerHTML = "Current Winnings: " + start
    let die = Math.floor(Math.random()*6)+1
    switch(die){
        case 1:
            wtext.innerHTML = "You rolled a 1!  Double your earnings"
            start = start*2;
            break;
        case 2:
            wtext.innerHTML = "You rolled a 2!  Nothing happens, just roll again"
            rollDie()
            break;
        case 3:
            wtext.innerHTML = "You rolled a 3!  That sucks, you lost everything."
            start = start - start;
            break;
        case 4:
            wtext.innerHTML = "You rolled a 4!  Nice going, it's your lucky day, you get 400 points"
            start = start + 400;
            break;
        case 5:
            wtext.innerHTML = "You rolled a 5!  Way to go, nothing happens."
            break;
        case 6:
            let setNumb = 50
            let rNumb = Math.floor(prompt("Pick a number 1 to 100")); 
        if(rNumb<setNumb){
            wtext.innerHTML = "You rolled a 6!  You chose rather low, but take it."
            start = start += rNumb
        }
        else if(rNumb == myNumb){
            wtext.innerHTML = "You rolled a 6!  You chose the JACKPOT!"
            start = rNumb*start
        }
        else{
            wtext.innerHTML = "You rolled a 6!  Chose high, so that sucks!"
            start = start-10
        }
            break;
    }
    nw.innerHTML = "Net Winnings: " + start
}