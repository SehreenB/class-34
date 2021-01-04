const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, ball;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1500,795,3000,10);

    //building 1
    box1 = new Box(900, 700 ,70,70);
    box2 = new Box(830,700,70,70);
    box3 = new Box(760,700,70,70);

    box4 = new Box(900,620 ,70,70);
    box5 = new Box(830,620,70,70);
    box6 = new Box(760,620,70,70);

    box7 = new Box(900, 540 ,70,70);
    box8 = new Box(830,540,70,70);
    box9 = new Box(760,540,70,70);

    box10 = new Box(900, 480 ,70,70);
    box11= new Box(830,480,70,70);
    box12= new Box(760,480,70,70);

    box13= new Box(900, 410 ,70,70);
    box14 = new Box(830,410,70,70);
    box15= new Box(760,410,70,70);

    box16 = new Box(900,330,70,70);
    box17 = new Box(830,330,70,70);
    box18 = new Box(760,330,70,70);

    box19 = new Box(900,250,70,70);
    box20 = new Box(830,250,70,70);
    box21 = new Box(760,250,70,70);

    //building 2
    box22 = new Box(660,700,70,70);
    box23 = new Box(590,700,70,70);
    box24 = new Box(520,700,70,70);

    box25 = new Box(660,620,70,70);
    box26 = new Box(590,620,70,70);
    box27 = new Box(520,620,70,70);

    box28 = new Box(660,540,70,70);
    box29 = new Box(590,540,70,70);
    box30 = new Box(520,540,70,70);

    box31 = new Box(660,460,70,70);
    box32 = new Box(590,460,70,70);
    box33 = new Box(520,460,70,70);

    box34 = new Box(660,380,70,70);
    box35 = new Box(590,380,70,70);
    box36 = new Box(520,380,70,70);

    ball = new Ball(150,700,80,80);

    rope = new Rope(ball.body, {x:250,y:200});


    
}

function draw(){
   background("black");

    
    Engine.update(engine);
        
    ground.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();
    box26.display();
    box27.display();

    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();
    box36.display();

    ball.display();
    rope.display();

}

function mouseDragged(){
    
 Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

  rope.fly();  

}



