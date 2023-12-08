var gNumb = 0

function playGame(){
    let CompDecision1 = Math.floor(Math.random() * 3)
    let CompDecision2 = Math.floor(Math.random()* 3)
    let p1Img = document.getElementById('playerOne')
    let p2Img = document.getElementById('playerTwo')
    
    p1= document.getElementById('p1Name').innerHTML = "Player One"
    p2 = document.getElementById('p2Name').innerHTML = "Player Two"
    p1Img.setAttribute("height", "100px")
    p1Img.setAttribute("width", "100px")
    p2Img.setAttribute("height", "100px")
    p2Img.setAttribute("height", "100px")

    if(CompDecision1 == 1){
        console.log("rock")
        p1Img.setAttribute("src", "https://mobileimages.lowes.com/productimages/d2404c8d-fa0b-45f0-b303-0f32594782ca/49467397.jpg?size=pdhism")
        p1Img.setAttribute("height", "100px")
        p1Img.setAttribute("width", "100px")
        p1="Rock"
        
    }
    else if(CompDecision1 == 2){
        console.log("scissors")
        p1Img.setAttribute("src", "https://t4.ftcdn.net/jpg/02/55/26/63/240_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg")
        p1 = "Scissors"
        p1Img.setAttribute("height", "100px")
        p1Img.setAttribute("width", "100px")
        
    }
    else if(CompDecision1 == 0){
        console.log("paper")
        p1Img.setAttribute("src", "https://www.paperpapers.com/news/wp-content/uploads/2018/06/paper-trail.jpg")
        p1 = "Paper"
        p1Img.setAttribute("height", "100px")
        p1Img.setAttribute("width", "100px")
    }


    if(CompDecision2 == 1){
        console.log("rock")
        p2Img.setAttribute("src", "https://mobileimages.lowes.com/productimages/d2404c8d-fa0b-45f0-b303-0f32594782ca/49467397.jpg?size=pdhism")
        p2 = "Rock"
    }
    else if(CompDecision2 == 2){
        console.log("scissors")
        p2Img.setAttribute("src", "https://t4.ftcdn.net/jpg/02/55/26/63/240_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg")
        p2 = "Scissors"
    }
    else if (CompDecision2 == 0){
        console.log("paper")
        p2Img.setAttribute("src", "https://www.paperpapers.com/news/wp-content/uploads/2018/06/paper-trail.jpg")
        p2 = "Paper"
    }


    if(CompDecision1 == 1 && CompDecision2 == 1){
        document.getElementById('hiddenP').innerHTML = "It's a tie.  Play again"
    }
    else if(CompDecision1 == 1 && CompDecision2 == 2){
        document.getElementById('hiddenP').innerHTML = "Player One wins.  Play again"
    }
    else if(CompDecision1 == 1 && CompDecision2 == 0){
        document.getElementById('hiddenP').innerHTML = "Player Two wins.  Play again"
    }
    else if(CompDecision1 == 2 && CompDecision2 == 2){
        document.getElementById('hiddenP').innerHTML = "It's a tie.  Play again"
    }
    else if(CompDecision1 == 2 && CompDecision2 == 0){
        document.getElementById('hiddenP').innerHTML = "Player One wins.  Play again"
    }
    else if(CompDecision1 == 2 && CompDecision2 == 1){
        document.getElementById('hiddenP').innerHTML = "Player Two wins.  Play again"
    }
    else if(CompDecision1 == 0 && CompDecision2 == 0){
        document.getElementById('hiddenP').innerHTML = "It's a tie.  Play again"
    }
    else if(CompDecision1 == 0 && CompDecision2 == 1){
        document.getElementById('hiddenP').innerHTML = "Player One wins.  Play again"
    }
    else if(CompDecision1 == 0 && CompDecision2 == 2){
        document.getElementById('hiddenP').innerHTML = "Player Two wins.  Play again"
    }
    //Game Number increase
    gNumb+=1

    //table
    var table = document.getElementById('table')
    var newRow = document.createElement('tr')
    var gameNumber = document.createElement('td')
    var result = document.createElement('td')

    gameNumber.textContent = gNumb
    if(document.getElementById('hiddenP').innerHTML.includes("Player One")){
        result.textContent = "Player One"
    }
    else if(document.getElementById('hiddenP').innerHTML.includes("Player Two")){
        result.textContent = "Player Two"
    }
    else{
        result.textContent = "Tie"
    }

    gameNumber.style.padding = "10px"
    result.style.padding = "10px"
    newRow.appendChild(gameNumber)
    newRow.appendChild(result)
    table.appendChild(newRow)
}
