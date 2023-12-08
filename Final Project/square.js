function calculate(){
    let width = document.getElementById('width').valueAsNumber
    let height = document.getElementById('height').valueAsNumber
    let area = (width * height)

    document.getElementById('hiddenP').innerHTML = "Result: " + area + " square feet"
    function squareSizing(w,h){
        w = w*10
        h = h*10
        let sElement = document.getElementById('square')

        sElement.style.width = `${w}px`
        sElement.style.height = `${h}px`
        sElement.style.backgroundColor = `blue`
        sElement.style.border = `black 1px solid`
        
    }
    squareSizing(width,height)
}
