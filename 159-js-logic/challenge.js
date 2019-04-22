// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//  make a function that organizes these into individual array that is ordered. For example answer
//  (ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it 
//  so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2],
//   ["2", "3"]]
function cleanRoom(arr) {
    let seen = []
    // arr.forEach(item => {
        
    // })
}
// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
function addends(arr, target) {
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
    return []
}
console.log(addends([1,2,3], 4))
console.log(addends([2, 4, 6, 8], 12))

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
function convertColor(color) {
    if (color.match('rgb')) {
        rgbMatch = color.replace(/ /g, '').split(/[\(\),]/)
        let red = parseInt(rgbMatch[1], 10).toString(16).padStart(2, '0')
        let gre = parseInt(rgbMatch[2], 10).toString(16).padStart(2, '0')
        let blu = parseInt(rgbMatch[3], 10).toString(16).padStart(2, '0')
        return `#${red}${gre}${blu}`
    }
    if (color.match('#')) {
        let red = Number.parseInt(color.slice(1,3), 16)
        let gre = Number.parseInt(color.slice(3,5), 16)
        let blu = Number.parseInt(color.slice(5,7), 16)
        return `rgb(${red}, ${gre}, ${blu})`
    }
}
console.log(convertColor('rgb (  4   , 170,99)'))
console.log(convertColor('#ffffff'))