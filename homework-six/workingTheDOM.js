//first
document.getElementById('title').innerText = "DOM Manipulation"
//second
document.getElementById('container').style.backgroundColor = "lightblue"
//third
let newItem = prompt("New Item: ")
let list = document.getElementsByTagName('ul')
let item = document.createElement('li')
let newLiText = document.createTextNode(newItem)
item.appendChild(newLiText)
list[0].appendChild(item)

let listItems = document.getElementsByTagName('li')
//fourth
document.getElementsByTagName('li')[0].style.color="crimson"
//fifth
document.getElementsByTagName('li')[2].style.backgroundColor = "pink"
//sixth
document.getElementsByTagName('li')[4].style.backgroundColor = "yellow"
//seventh
document.getElementsByTagName('li')[6].style.backgroundColor = "lightgray"
document.getElementsByTagName('li')[6].style.color = "royalblue"
//eigth
let nameText = prompt("Enter Your Name: ")
let nameItem = document.createElement('li')
let newNameText = document.createTextNode(nameText)
nameItem.appendChild(newNameText)
list[0].appendChild(nameItem)

//ninth
list[0].removeChild(listItems[3]) 
//tenth
let btnText = document.getElementsByTagName('button')[0]
btnText.style.fontStyle = "italic"
btnText.style.backgroundColor = "rebeccapurple"
btnText.style.color = "white"
btnText.style.border = "5px solid white"