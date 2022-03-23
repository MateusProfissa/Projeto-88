var canvas = new fabric.Canvas("myCanvas");

var bola_x = 0;
var bola_y = 0;

var buraco_x = 800;
var buraco_y = 400;

var bola = "";
var buraco = "";

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
        buraco = Img;
        buraco.scaleToWidth(50); 
        buraco.scaleToHeight(50);
        buraco.set({
            top : buraco_y,
            left : buraco_x
        });
        canvas.add(buraco);
    });
	newImage();
}

function newImage(){
	fabric.Image.fromURL("ball.png", function(Img) {
        bola = Img;
        bola.scaleToWidth(50); 
        bola.scaleToHeight(50);
        bola.set({
            top : bola_y,
            left : bola_x
        });
        canvas.add(bola);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (bola_x == buraco_x && bola_y == buraco_y) {
		canvas.remove(bola);
		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38'){
			up();
			console.log("up");
		}
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		if(keyPressed == '37'){
			left();
			console.log("left");
		}
		if(keyPressed == '39'){
			right();
			console.log("right");
		}
	}
	
	function up(){
		if (bola_y >= 5) {
			bola_y = bola_y - blockImageHeight;
        	console.log("Altura = " + blockImageHeight);
        	console.log("A tecla para esquerda está sendo pressionada, x = " + bola_x + ", y = " + bola_y);
        	canvas.remove(bola);
        	newImage();
		}
	}

	function down(){
		if (bola_y <= 450) {
			bola_y = bola_y + blockImageHeight;
        	console.log("Altura = " + blockImageHeight);
        	console.log("A tecla para esquerda está sendo pressionada, x = " + bola_x + ", y = " + bola_y);
        	canvas.remove(bola);
        	newImage();
		}
	}

	function left(){
		if(bola_x >5){
			bola_x = bola_x - blockImageWidth;
        	console.log("Largura = " + blockImageWidth);
        	console.log("A tecla para esquerda está sendo pressionada, x = " + bola_x + ", y = " + bola_y);
        	canvas.remove(bola);
        	newImage();
		}
	}

	function right(){
		if(bola_x <=1050){
			bola_x = bola_x + blockImageWidth;
        	console.log("Altura = " + blockImageWidth);
        	console.log("A tecla para esquerda está sendo pressionada, y = " + bola_x + ", y = " + bola_y);
        	canvas.remove(bola);
        	newImage();
		}
	}
	
}

