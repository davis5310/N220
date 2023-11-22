let stringText = document.getElementById('string')
let zipText = document.getElementById('zip')
let ccText = document.getElementById('ccard')
let phoneText = document.getElementById('phone')


//string
function validateString(){
    let vs1=/ralph/i
    let vs2 =/(^)cat/
    let vs3 =/dog^/
    let stringVal = stringText.value
    document.getElementById('stringAns').innerHTML = vs2.test(stringVal)
}

stringText.addEventListener('blur', validateString)

//zipcode
function validateZip(){
let zipVal = zipText.value
let vz1 = /^([0-9]{5})([- ]?)([0-9]{4})?$/


document.getElementById('zipAns').innerHTML=vz1.test(zipVal)
}

zipText.addEventListener('blur', validateZip) 

//credit card
function validateCCard(){
let ccVal = ccText.value
let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/

doucment.getElementById('ccAns').innerHTML=vc1.test(ccVal)
}

ccText.addEventListener('blur', validateCCard)

//phone number
function validatePhone(){
let phoneVal = phoneText.value
let pc1 = /^([(]?\d{3})([-) .]?)(\d{3})([- .]?)(\d{4})$/
document.getElementById('phoneAns').innerHTML=pc1.text(phoneVal)
}
phoneText.addEventListener('blur', validatePhone)