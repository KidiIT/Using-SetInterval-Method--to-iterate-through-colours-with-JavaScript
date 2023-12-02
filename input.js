let mainDisplay = document.getElementById("main")
let displayMyColor =["red","blue","pink","yellow","purple","green","indiego","orange","lemon","skyblue"]
let element =0
setInterval(() => {
    mainDisplay.style.color = `${displayMyColor[element]}`

    element++
    if(element >= displayMyColor.length){ 
        element=0

    }



}, 2000)