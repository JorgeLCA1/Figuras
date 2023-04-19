class Figura {
   constructor(x, y, alto, ancho, vx, vy) {
    this.posicion = createVector(x,y);
    this.alto = alto;
    this.ancho = ancho;
    this.fillred = random(50,255);
    this.fillgreen = random(50,255);
    this.fillblue = random(50,255);
    this.velocidad = createVector(vx,vy);
  }
  update()
  {
    this.posicion.add(this.velocidad);
    if (this.posicion.x > width || this.posicion.x < 0)
      this.velocidad.x *= -1;
    if (this.posicion.y > height || this.posicion.y < 0)
      this.velocidad.y *= -1;
  }
  
}

class Rectangulo extends Figura{
  constructor(x, y, alto, ancho, vx, vy) {
      super(x, y, alto, ancho, vx, vy);
  }
  
draw()
  {
fill(this.fillred,this.fillgreen,this.fillblue);
rect(this.posicion.x,this.posicion.y,this.alto,this.ancho);
  }
}

class Elipse extends Figura{
  constructor(x, y, alto, ancho, vx, vy) {
      super(x, y, alto, ancho, vx, vy);
  }
  
draw()
  {
fill(this.fillred,this.fillgreen,this.fillblue);
ellipse(this.posicion.x,this.posicion.y,this.alto,this.ancho);
  }
}

var figuras = [];
var dibujando = 'circulo';
var btnCirculo = null;
var btnRectangulo = null;


function mouseClicked() {
  // Se crea un objeto según la opción actual
if (mouseY > 25)
  {
  if (dibujando == 'circulo')
    figuras.push(new Elipse(mouseX,mouseY,20,20,3,1));
  else if (dibujando == 'rectangulo')
    figuras.push(new Rectangulo(mouseX,mouseY,20,20,2,1));
  }

  return false;
}

function setup() {
  createCanvas(400, 400);
  
  btnCirculo = createButton('Circulo');
  btnCirculo.position(0, 0);
  btnCirculo.mousePressed(changeCirculo);
  btnCirculo.style( 'background-color','#cccccc');
  
  btnRectangulo = createButton('Rectangulo');
  btnRectangulo.position(75, 0);
  btnRectangulo.mousePressed(changeRectangulo);
}

function changeCirculo()
   {
     btnCirculo.style( 'background-color','#cccccc');
     btnRectangulo.style( 'background-color','#f0f0f0');
     dibujando = 'circulo';
   }
function changeRectangulo()
   {
     btnRectangulo.style( 'background-color','#cccccc');
     btnCirculo.style( 'background-color','#f0f0f0');
     dibujando = 'rectangulo';
   }

 

function draw() {
  background(220);
  figuras.forEach((fig) => 
   {
    fig.draw();
    fig.update();
   });
}