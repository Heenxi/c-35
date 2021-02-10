var dbball;
var position,database;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
   
    dbball = createSprite(250,250,10,10);
    dbball.shapeColor = "green";
    var dbballpos=database.ref('ball/position');
   dbballpos.on("value",readpos,showmsg);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set(
        {
            'x':position.x+x,
            'y':position.y+y
        })
}
function readpos(data){
    position=data.val();
    dbball.x=position.x;
    dbball.y=position.y;
}
function showmsg(){
    console.log("im working with database");
}