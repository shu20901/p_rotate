//var array_text = ["P", "U", "B", "L", "I", "C", "S", "H", "O", "W"];
var array_text = ["P", "U", "B", "L", "I", "C", "*"];
//var array_text = ["I","I", "I","I","I", "I", "I","I", "I","I"];
function setup() {
	createCanvas(400, 400);
	background(100);
}

function draw() {
      clear()
      
      for (var y=50; y<400; y=y+50){
        
        var n=0

        for (var x=50; x<400; x=x+50) {

          push()
          let angle = Math.atan2(mouseY-y, mouseX-x);
          translate(x,y);
          rotate(angle)
          textAlign(CENTER, CENTER);
          textSize(32);
          text(array_text[n],0,0); 
          pop()

        n=n+1
      }

      }
      

}