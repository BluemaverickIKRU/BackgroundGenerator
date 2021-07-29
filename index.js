var css = document.querySelector('h4');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomBut = document.querySelector('.random');

function changeBackground() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";" 
}

function getRndInteger() {
    var min = 000000000;
    var max = 999999999;
    var range1 = Math.floor(Math.random() * (max - min + 1) ) + min;
    var range2 = Math.floor(Math.random() * (max - min + 1) ) + min;
    var res1 = range1 + '';
    var res2 = range2 + '';
    body.style.background = 'linear-gradient(to right, ' + 'rgb('+res1[0]+res1[1]+res1[2]+","+res1[3]+res1[4]+res1[5]+","+res1[6]+res1[7]+res1[8]+")" + ",rgb("+res2[0]+res2[1]+res2[2]+","+res2[3]+res2[4]+res2[5]+","+res2[6]+res2[7]+res2[8]+"))";
    css.textContent = body.style.background + ";" 
  }

color1.addEventListener('input',changeBackground);
color2.addEventListener('input',changeBackground);
randomBut.addEventListener('click',getRndInteger);