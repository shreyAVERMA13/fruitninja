var sword,swordImage,fruit1,fruit2,fruit3,fruit4
var fruitGroup

function preload(){
  
 swordImage=loadImage("sword.png")
  
 fruit1=loadImage("fruit1.png")    
  fruit2=loadImage("fruit2.png") 
  fruit3=loadImage("fruit3.png") 
  fruit4=loadImage("fruit4.png") 
}

function setup(){
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImage);
  sword.scale=0.7
  
  fruitGroup = createGroup();
}
function draw(){

  drawSprites();
  
  fruits();
}

function fruits(){
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20)
    fruit.scale=0.2
    r=math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1);
    } else if (r == 2){
      fruit.addImage(fruit2);
    } else if (r == 3){
      fruit.addImage(fruit3);
    }else {
      fruit.addImage(fruit4)
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.VelocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit)
    
  }
}