let canvas =document.getElementById("canvas")
let areaOf = canvas.getContext("2d")
let widthOf =canvas.width
let heightOf =canvas.height
console.log(heightOf)
console.log(widthOf)
let playerGround =new Image()
playerGround.src ="./shadow dog sprite sheet.png"
let spritWidth =575
let spritHeight =523
let x =6
let y =1
let gameFrame =0
let stagrrer =30


function someSprit(){
    areaOf.clearRect(0,0,widthOf,heightOf)
   areaOf.drawImage(playerGround,x*spritWidth ,y*spritHeight ,spritWidth ,spritHeight,0,0,widthOf,heightOf)
   if(gameFrame % stagrrer == 0){
    if(x < 4) x++

   }else x=0
   gameFrame++
    requestAnimationFrame(someSprit)
}
window.addEventListener("load",someSprit)


