var passForm = document.forms[0]
var passBtn = passForm.getElementsByTagName('img')[0]
passBtn.addEventListener('click', showPassword)
function showPassword(){
    document.getElementById('pass').setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png")
    var imgSrc = passBtn.getAttribute('src')
    var hidePassImg = imgSrc.indexOf('hide')
    var showPassImg = imgSrc.indexOf('show')
    console.log(imgSrc)
    console.log(hidePassImg)
    console.log(showPassImg)
    if(hidePassImg > 0){
        passBtn.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png')
        document.getElementById('pass').setAttribute('type', 'text')
    }
    else{
        passBtn.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png')
        document.getElementById('pass').setAttribute('type', 'password')
    }
}

