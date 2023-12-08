let dropD = document.getElementById('dropD');
let hiddenP = document.getElementById('newPara');

function calculate() {
    let first = parseFloat(document.getElementById('first').value);
    let second = parseFloat(document.getElementById('second').value);

    let yourChoice = dropD.options[dropD.selectedIndex].value;
    let result;

    switch (yourChoice) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "x":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        default:
            result = "Error";
            break;
    }

    hiddenP.innerHTML = `${first} ${yourChoice} ${second} = ${result}`;
}

