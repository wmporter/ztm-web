var css = document.querySelector('h3')
var color1 = document.getElementById('color1')
var color2 = document.getElementById('color2')
var rando = document.getElementById('rando')
var body = document.querySelector('body')

function updateGradient() {
    let cssString = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'
    body.style.background = cssString
    css.textContent = cssString + ';'
}

function setRandomBackground() {
    const hex = '0123456789abcdef';
    let c1 = '#', c2 = '#';
    for(let i = 0; i < 6; i++) {
        c1 += hex[Math.floor(16 * Math.random())]
    }
    for(let j = 0; j < 6; j++) {
        c2 += hex[Math.floor(16 * Math.random())]
    }
    color1.value = c1;
    color2.value = c2;
    updateGradient()
}

color1.addEventListener('input', updateGradient)
color2.addEventListener('input', updateGradient)
rando.addEventListener('click', setRandomBackground)
