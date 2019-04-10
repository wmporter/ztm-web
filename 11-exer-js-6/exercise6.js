var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift()
array.sort()
array.push('Kiwi')
array.shift()
array.sort().reverse()
console.log(array)

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
var oranges = array2[1][1][0];
console.log(oranges)