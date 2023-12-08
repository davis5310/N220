const YEAR = new Date().getFullYear()

function genFinder(){
    var age = document.getElementById('age').valueAsNumber
    var birthYear = YEAR - age
    if(birthYear < 1946){
        document.getElementById('newPara').innerHTML = `Error`
    }
    else if(birthYear >=1946 && birthYear <= 1964){
        document.getElementById('newPara').innerHTML = `You were born in ${birthYear}.  You're a member of the Baby Boomer Generation`
    }
    else if(birthYear >=1965 && birthYear <= 1980){
        document.getElementById('newPara').innerHTML = `You were born in ${birthYear}.  You're a member of the Generation X`
    }
    else if(birthYear >=1981 && birthYear <= 1996){
        document.getElementById('newPara').innerHTML = `You were born in ${birthYear}.  You're a member of the Generation Y`
    }else if(birthYear >=1997 && birthYear <= 2012){
        document.getElementById('newPara').innerHTML = `You were born in ${birthYear}.  You're a member of the Generation Z`
    }
    else if(birthYear >=2013 && birthYear <= 2025){
        document.getElementById('newPara').innerHTML = `You were born in ${birthYear}.  You're a member of the Generation Alpha`
    }
    else{
        document.getElementById('newPara').innerHTML = `Sorry, your generation isn't listed`
    }
}
