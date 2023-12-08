function newName(){
    let first = document.getElementById('first').value
    let last = document.getElementById('last').value

    let fLetter = first.charAt(0).toLowerCase()
    let fLetterResult = first.substring(1)
    let pigFirst = `${fLetterResult}${fLetter}ay`
    pigFirst = pigFirst.charAt(0).toUpperCase() + pigFirst.slice(1)
    
    let lLetter = last.charAt(0).toLowerCase()
    let lLetterResult = last.substring(1)
    let pigLast = `${lLetterResult}${lLetter}ay`
    pigLast = pigLast.charAt(0).toUpperCase() + pigLast.slice(1)


    let results = document.getElementById('newPara').innerHTML = `You new name is: ${pigFirst} ${pigLast}`
}