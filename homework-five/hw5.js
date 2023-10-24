var choice;
function button() {

    choice = prompt("You wake up in a cave, and find tools.  Do you leave and explore the land, or do you stay and explore the cave? land or cave")
    if(choice == "land"){
        leaveCave();
    }
    else if (choice == "cave"){
        exploreCave();
    }

}
function leaveCave() {
    choice = prompt("You leave the cave and find a river with animals along the bank.  Do you hunt and set up camp, or keep walking down the river? hunt or keep walking")
    if(choice == "hunt"){
        hunting();
    }
    else if (choice == "keep walking"){
        keepWalking();
    }
}
function hunting(){
    choice = prompt("You start to hunt the animals and capture a deer and a rabbit.  What do you cook first? deer or rabbit")
    if(choice == deer){
        deerCook();
    }
    else if(choice == rabbit){
        rabbitCook();
    }
}
function deerCook(){
    choice = alert("You cooked the deer and had a nice deer stew.")
}
function rabbitCook(){
    choice = alert("You started to skin the rabbit, but it started to talk and you passed out")
}
function keepWalking(){
    choice = prompt("You kept walking and you found a village.  Do you stay in the village or keep going?  Stay or continue")
    if(choice == "stay"){
        home();
    }
    else if(choice == "continue"){}
    continueOn();
}
function home(){
    choice = alert("You got set up in a house for now, but the chief wants you to join the hunters so you can help the village")
}
function continueOn(){
    choice = alert("You press onward and find another person.  You join forces and continue on.")
}
function exploreCave(){
    choice = prompt("You find another exit and it leads to a garden.  Do you set up camp and chop down trees or continue through the garden? continue or camp")
    if(choice == "camp"){
        setCamp();
    }
    else if(choice == "continue"){
        continueThrough();
    }
}
function setCamp(){
    choice = prompt("You set up camp and sleep for the night.  You wake up and have to make a choice.  Stay in the garden or contiue on?  Stay or continue")
    if(choice == "stay"){
        stayNight()
    }
    else if(choice == "continue"){
        continueGarden()
    }
}
    function stayNight(){
        choice = alert("You decided to make the garden your home.  You forged tools, and constructed a house.")
    }
    function continueGarden(){
        choice = alert("You continued through the garden and found an exit that lead to a waterfall.  You see a lovely scenery, wild berries, animals, and humans?")
    }
function contiueThrough(){
    choice = prompt("You press on through the garden and find a forest, but you hear voices.  Check it out or continue?")
    if(choice == "check it out"){
        checkOut()
    }
    else if(choice == "continue"){
        continueForest()
    }
}
function checkOut(){
    choice = alert("You checked out where the voices were coming from, and to your surprise, it's people.  They spoke english and helped you seek a house and land.")
}
function continueForest(){
    choice = alert("You decide to check out more of the forest, and you fall off a cliff.")
}



