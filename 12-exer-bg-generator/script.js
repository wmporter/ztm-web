var css = document.querySelector('h3')
var color1 = document.getElementById('color1')
var color2 = document.getElementById('color2')
var body = document.querySelector('body')

function updateGradient() {
    let cssString = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'
    body.style.background = cssString
    css.textContent = cssString + ';'
}
color1.addEventListener('input', updateGradient)
color2.addEventListener('input', updateGradient)