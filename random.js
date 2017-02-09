var namespace = "http://www.w3.org/2000/svg"


function createFirstScene() {
    
    makeRect(10, 35, "12%", "100%", "#00000", 1)
    makeRect(37, 55, "10%", "100%", "#00000", 1)
    makeRect(59, 40, "10%", "100%", "#00000", 1)
    
    makeImage("http://img.pngget.com/clip2/p441nmxd5la.png", 28, 32, 137, 50, 1)
    
    makeRect(115, 35, "12%", "100%", "#00000", 1)
    makeRect(145, 55, "10%", "100%", "#00000", 1)
    makeRect(170, 40, "10%", "100%", "#00000", 1)
    
    makeRect(0, 80, "100%", "50%", "#00000", 1)
    
    makePolygon("145,56 155,48 165,56", "black", 1)
    
    makeText("Welcome To Paris!", 74, 10, 8, "Caveat Brush", "#A8C0C2", 1)
}

function createSecondScene() {
    
    makeRect(6, 60, "8%", "100%", "#00000", 1)
    makeRect(24, 40, "10%", "100%", "#00000", 1)
    makeRect(48, 46, "8%", "100%", "#00000", 1)
    makeRect(68, 50, "7%", "100%", "#00000", 1)
    
    makeImage("https://d30y9cdsu7xlg0.cloudfront.net/png/84812-200.png", 65, 20, 65, 65, 1)
    
    makeRect(115, 40, "10%", "100%", "#00000", 1)
    makeRect(145, 60, "8%", "100%", "#00000", 1)
    makeRect(170, 45, "8%", "100%", "#00000", 1)
    
    makeRect(0, 80, "100%", "50%", "#00000", 1)
    
    makeCircle(14, 60, "4%", "#00000", 1)
    makePolygon("13,81 14,30 15,81", "black", 1)
    
    makeText("Welcome To New York!", 74, 10, 8, "Caveat Brush", "#A8C0C2", 1)
}

function createThirdScene() {
    makeRect(6, 63, "8%", "100%", "#00000", 1)
    makeRect(24, 43, "10%", "100%", "#00000", 1)
    makeRect(48, 49, "8%", "100%", "#00000", 1)
    
    
    makePolygon("68,81 90,60 112,81", "black", 1)
    
    makeRect(115, 43, "10%", "100%", "#00000", 1)
    makeRect(145, 63, "8%", "100%", "#00000", 1)
    makeRect(170, 48, "8%", "100%", "#00000", 1)
    
    makeRect(0, 80, "100%", "50%", "#00000", 1)
    
    makeCircle(178, 48, "5%", "#00000", 1)
    
    makeText("Welcome To Egypt!", 74, 10, 8, "Caveat Brush", "#A8C0C2", 1)
}

function createSunset() {
    makeImage("http://il3.picdn.net/shutterstock/videos/13402676/thumb/1.jpg", -20, -10, "120%", "120%", 1)
}

function createNight() {
    makeImage("http://il2.picdn.net/shutterstock/videos/743689/thumb/1.jpg?i10c=img.resize(height:160)", -20, -10, "120%", "120%", 1)
    
}

function createCloudy() {
    makeImage("https://ih1.redbubble.net/image.4738783.0472/flat,1000x1000,075,f.jpg", -40, -50, "140%", "140%", 1)
    
}

function createMan(){
makeImage("http://www.gifs.net/Animation11/Transportation/Helicopters/big_helicopter.gif", 25, 16, "10%", "10%", 1)
}

function createRandomScene() {
    
    var random1 = Math.random();
    var random2 = Math.random();
    var random3 = Math.random();
    
    
    if(random1 < 0.33){
        if(random2 < 0.33){
        createNight()
        createFirstScene()
        }else if (random2 < 0.76){
        createSunset()
        createFirstScene()        
        }else{
        createCloudy()
        createFirstScene()
        }
        if(random3 > 0.7){
        createMan()}
    }
    else if(random1 < 0.67){
        if(random2 < 0.33){
        createNight()
        createSecondScene()
        }else if (random2 < 0.76){
        createSunset()
        createSecondScene()        
        }else{
        createCloudy()
        createSecondScene()
        }
        if(random3 > 0.7){
        createMan() }
    }
    else{
     if(random2 < 0.33){
        createNight()
        createThirdScene()
        }else if (random2 < 0.76){
        createSunset()
        createThirdScene()        
        }else{
        createCloudy()
        createThirdScene()
        }
        if(random3 > 0.7){
        createMan() }
    }
}

 


function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}