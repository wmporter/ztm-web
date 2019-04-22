var database = [
    {
        username: 'helen',
        password: 'abc123'
    },
    {
        username: 'helen5',
        password: 'abcd1234'
    },
    {
        username: 'jack',
        password: 'mypass'
    }
]

var newsFeed = [
    {
        username: 'bobby',
        timeline: 'so tired'
    },
    {
        username: 'george',
        timeline: 'javascript is cool'
    }
]

var userName = prompt('enter username')
var password = prompt('enter password')
signIn(userName, password)

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true
        }
    }
    return false
}
function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed)
    }
    else {
        alert('incorrect credentials')
    }
}