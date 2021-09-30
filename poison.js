class Poison {
    constructor(x,y){
   this.body= createSprite(x,y)
  this.image=loadImage("poison.png")
  this.body.addImage(this.image)
  this.body.lifeTime=50
  this.body.scale=0.2
    } 
}