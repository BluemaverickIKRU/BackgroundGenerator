var input1 = document.querySelector('.inp1');
var input2 = document.querySelector('.inp2');
var h3 = document.querySelector('h3');
var body = document.querySelector('.back');
var randomBtn = document.querySelector('.random');

function randomNumber() {
    return String(parseInt(Math.random() * 256));
}


function randomColor() {
    body.style.background = 'linear-gradient(to right, rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + '), rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + '))';
    h3.textContent = 'linear-gradient(to right, rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + '), rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + '))' + ';';
    
}

function changeBackground() {
    body.style.background = 'linear-gradient(to right,'+ input1.value + ',' + input2.value,');'
    h3.textContent = 'linear-gradient(to right,'+ input1.value + ',' + input2.value,');'
}

input1.addEventListener('input',changeBackground);
input2.addEventListener('input',changeBackground);
randomBtn.addEventListener('click',randomColor);

