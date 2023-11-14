//html event handler

function oldSchool(){
//print comment under html event handler bullet point
document.getElementById('htmlEH').innerText="This is bad practice.  Don't use this one"
}

//traditional DOM handler
function tradText(){
    document.getElementById('traditional').innerText="You can only attach one function to this event handler"
}

document.getElementsByTagName('input')[1].onclick=tradText

//level 2 event listener
function alertMe(){
    //run alert that reads Use This!
    alert('Use This!')
}

function level2Text(){
    //text under level 2 bullet
    document.getElementById('level2').innerText="You can attach one or more funcitons to this event handler."
}

let level2Button = document.getElementsByTagName('input')[2]

level2Button.addEventListener('click',function() {
alertMe()
level2Text() 
},false);

//UI event
let pageURL=document.URL
let lastModified=document.lastModified

function displayInfo(){
    document.getElementById('pageURL').innerText="Page URL: " + pageURL
    document.getElementById('myLastUpdate').innerText="Last update: " + lastModified
}

window.addEventListener('load', displayInfo)

//keyboard event
let myText=doucment.getElementsByTagName('input')[3]
let keyCount=0
function countKeys(){
    keyCount ++

    document.getElementById('pressNumber').innerText="You have pressed a key " + keyCount + " times"
}
myText.addEventListener('keyPress', countKeys)

//mouse event
let mouseText = doucment.getElementById('danger')
function changeText(){
mouseText.innerHTML="<b>You have changed the text</b>"
}
mouseText.addEventListener('dblClick', changeText)

//focus event
let focusText = document.getElementsByClassName('blurText')[0]
function changeToUpper(){
    focusText.style.textTransform="uppercase"
}
focusText.addEventListener('blur', changeToUpper)

//form events
let dropD = document.getElementById('js')
let ddText = document.getElementById('selectText')
function selectedChoice(){
    let yourChoice = dropD.options[dropD.selectedIndex].value
    let printChoice
    switch(yourChoice){
        case "javascript":
            printChoice="Javascript is the base for all of these"
            break;
        case "jQuery":
            printChoice="You will learn jQuery in another course"
            break;
        case "Angular":
            printChoice="Angular is a very popular Javascript framework"
            break;
        case "React":
            printChoice="You will learn react in advanced web course"
            break;
        default:
            printChoice="Please make another selection"
            break;
    }
}
    ddText.innerText = printChoice
    dropD.addEventListener('change', selectedChoice)

    //Add/delete list
    let addBtn = document.getElementsByTagName('button')[0]
    let itemList = document.getElementById('myList')

    function addItem(){
        let newItem = prompt("Add Item:")
        let newLi = document.createElement('li')
        let newLiText = document.createTextNode(newItem)
        newLi.appendChild(newLiText)
        itemList.appendChild(newLi)
    }
    addBtn.addEventListener('click', addItem)

    //Target of event
    function getTarget(e){
        if(!e){
            e = window.event
        }
        return e.target || e.srcElement
    }
    //Remove target from list
    function removeItem(e){
        let target = getTarget(e)
        let tParent = target.parentNode
        tParent.removeChild(target)

    }
    itemList.addEventListener('click',removeItem)
    