function newPrice(){
let price = document.getElementById("price").value
let discount = document.getElementById("discount").value
let tax = .08

let save = price - (price*.20).toFixed(2)
let jolly = price - (price*.15).toFixed(2)
let holly = price - (price*.10).toFixed(2)

let saved1 = (price - save).toFixed(2)
let saved2 = (price - jolly).toFixed(2)
let saved3 = (price - holly).toFixed(2)

    if(discount == "SAVE20"){
        document.getElementById('newPara').innerHTML = "New Price: " + ((save * tax)+save).toFixed(2) + "</br> You saved: " + saved1
    }
    if(discount == "JOLLYDAYS"){
        document.getElementById('newPara').innerHTML = "New Price: " + ((jolly * tax)+jolly).toFixed(2) + "</br> You saved: " + saved2
    }

    if(discount == "HOLIDAY10"){
        document.getElementById('newPara').innerHTML = "New Price: " + ((holly * tax)+holly).toFixed(2) + "</br> You saved: " + saved3
    }
}