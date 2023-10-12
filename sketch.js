
let hue=[]
let sqr=[]
let pheight=80
let crange=340
function setup() {
  //console.log(mouseX,mouseY)
  createCanvas(600, 600);
  noStroke()
  background(255)
  colorMode(HSB)
  for(var i=0; i<width/1.5; i++){
    //console.log(i)
    hue[i] = map(i, 0, width/1.5, 0, crange);
    //console.log(hue)
    fill(hue[i],100,100);
    rect((0+i*1.5),0,1.5,pheight)
    
  }
}

function draw() {
  //background(220);
}
function mouseClicked(){
  if (mouseY<pheight){
    for (var j=0;j<hue.length;j++){
     let x= dist((0+j*1.5),0,mouseX,0)
     //console.log(x)
     if (x<1.5/2){
       //console.log(j)
       sqr.push(hue[j])
       //console.log(sqr)
       var rwidth=width/sqr.length
       var xpos=0
       for (var k=0;k<sqr.length;k++){
         //background(255)
         fill(sqr[k],100,100)
         rect(xpos,pheight,rwidth,height-pheight)
         xpos=xpos+rwidth
       }
     }
    }
  }  
}