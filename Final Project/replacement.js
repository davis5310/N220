let stringText1 = document.getElementById('h1');
let stringText2 = document.getElementById('h2');
let stringText3 = document.getElementById('h3');
let ulElement = document.querySelector('li')
    ulElement.style.listStyleType = "disc"

function swap() {
    if (stringText1.innerHTML.includes("h") || stringText1.innerHTML.includes("H")) {
        stringText1.innerHTML = "Jollylights.html"
        stringText1.textContent = "Jollylights.html"
    }
    if (stringText2.innerHTML.includes("h") || stringText2.innerHTML.includes("H")) {
        stringText2.innerHTML = "ChristmasJollyVillage.html"
        stringText2.textContent = "ChristmasJollyVillage.html"
    }
    if (stringText3.innerHTML.includes("h") || stringText3.innerHTML.includes("H")) {
        stringText3.innerHTML = "jollyJollyWreath.html"
        stringText3.textContent = "jollyJollyWreath.html"
    } 
}
