document.getElementById('title').innerText = "Welcome Back"

//Query selector target individual element/node using css selector

document.querySelector('p').innerText = "Query Selector"
document.querySelector('.content').innerHTML = "Query selector using a class"

//select multiple elements by class name

document.getElementsByClassName('odd')[0].style.color = "red"

//By tag name

document.getElementsByTagName('li')[3].style.backgroundColor = "pink"

//querySelectorAll

document.querySelectorAll('#myList li:not(.odd)')[0].style.fontWeight = "bold"

//Challenge: Target all list items and remove bullets and padding

let allItems = document.getElementsByTagName('li')
for (let i=0;i<allItems.length;i++){
    allItems[i].style.listStyle = 'none'
    allItems[i].style.padding = '10px'
}

//challenge: select alternative bands and give them a green background with white italicized text

let altBands = document.getElementsByClassName('alternative')
for(let a=0; a<altBands.length ;a++){
    altBands[a].style.backgroundColor='green'
    altBands[a].style.color='white'
    altBands[a].style.fontStyle='italic'
}

//challenge: make candlebox text a link to the website
/* 1.target right element
    2. create a variable with the elements text in it
    3. wrap link around text
    4.put back into list item */

    let cElement = document.querySelector('.rock:lastChild')
    let cText = cElement.innerText
    console.log(cText)
    cText = '< href="https://www.candleboxrocks.com">'+ cText + '</a>'
    cElement.innerHTML = cText
    let allLists = document.getElementsByTagName('ul')
    let gList = document.querySelector(allLists[allLists.length-1])
    //challenge: add item to last list
    function addItem(){
        let newItem = prompt("New Item: ")
        let newLi = document.createElement('li')
        let newLiText = document.createTextNode(newItem)
        newLi.appendChild(newLiText)
        newLi.style.padding = "10px"
        newLi.style.listStyle = "none"
        //target list
        console.log(gList)
        gList.appendChild(newLi)
    }

    function deleteItem(){
        let lastItem = gList.lastElementChild
        gList.removeChild(lastItem)
    }