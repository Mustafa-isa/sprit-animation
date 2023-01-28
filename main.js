let canvas =document.getElementById("canvas")
let areaOf = canvas.getContext("2d")
let widthOf =canvas.width
let heightOf =canvas.height
console.log(heightOf)
console.log(widthOf)
let playerGround =new Image()
playerGround.src ="./sprit image.png"

function some(){
    areaOf.clearRect(0,0,widthOf,heightOf)
    areaOf.fillRect(0,0,0,0)
    
}
some()


