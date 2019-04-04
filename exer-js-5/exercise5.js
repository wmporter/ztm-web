const checkDriverAge = () => {
    var age = Number(prompt('Enter your age'))
    if (age < 18) {
        console.log('You are too young')
    }
    else if (age === 18) {
        console.log('Congrats on your first year of driving')
    }
    else {
        console.log('Powering on')
    }
}