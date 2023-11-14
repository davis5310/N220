//add icon to existing items
let codeList = document.querySelector('#codeBox ul')
let codeItems = codeList.querySelectorAll('li')
let codeListLength = codeItems.length
for(let i=0;i<codeItems.length;i++){
    let image = document.createElement('img')
    image.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
    image.className = 'listIcon'
    codeItems[i].appendChild(image)
}

//trash or gray out items
codeList.addEventListener('click', changeProp, false)
function changeProp(e){
    let target = getTarget(e)
    let tparent = target.parentNode
    if (tparent.tagName == 'LI'){
        tparent.remove()
    }
    else {
        if(target.className == 'selected'){
            target.className = ''
        }
        else{
            target.className = 'selected'
        }
    }
}
