//canvasSize(600,600)
//background(51)
//ship color =blue
//bullet color = yellow = (255,204,0)
//bullet coordinates = (x+)





function setup(){
    createCanvas(600,600)
    background(51)
}

let x = 400
let y = 500
function draw(){
    background(51)
    fill("blue")
    square(x,y,55)

    if(keyIsDown(LEFT_ARROW)){
        x -= 5
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 5
    }    
    
}



class Bullets{
    constructor(x,y,speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    create circle()
}

