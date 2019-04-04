var database = [
    {
        username: 'helen',
        password: 'abc123'
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

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed)
    }
    else {
        alert('incorrect credentials')
    }
}