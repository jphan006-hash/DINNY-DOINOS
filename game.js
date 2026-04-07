const player1 = { 
  x:200, y:250, // moved to center
  speed:2, 
  item:null, 
  score:0, 
  type:"TRex" 
};

const player2 = { 
  x:500, y:250, // spaced apart
  speed:3.5, 
  item:null, 
  score:0, 
  type:"Gator" 
};

function drawPlayer(p){
  if(p.type==="TRex"){
    ctx.fillStyle="green"; // darker, easier to see
    ctx.fillRect(p.x,p.y,40,40);

    // face
    ctx.fillStyle="black";
    ctx.fillRect(p.x+25,p.y+10,5,5);

  } else {
    ctx.fillStyle="cyan";
    ctx.fillRect(p.x,p.y,45,20);

    // eyes
    ctx.fillStyle="black";
    ctx.fillRect(p.x+30,p.y+5,5,5);
  }

  if(p.item){
    ctx.fillStyle="yellow";
    ctx.fillText(p.item,p.x,p.y-5);
  }
}


p.x = Math.max(0, Math.min(760, p.x));
p.y = Math.max(0, Math.min(460, p.y));
