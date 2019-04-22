// Use browserify on this script so require works
var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8]
console.log('answer:', _.without(array, 3))
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