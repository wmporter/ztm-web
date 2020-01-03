alert = console.log;
window = global;
// For all of these, what is the value of a when the function gets called with the alert()
// #1
// Answer: 3
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
alert('calling q1()')
q1()

//#2
// Answer: 5
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
alert('calling q2() and q22()')
q2()
q22()

//#3
// Answer: hello
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
alert('calling q3() and q32()')
q3()
q32()

//#4
// Answer: test
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
alert('calling q4()')
q4()

//#5
// Answer: 5, 5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);