// Assign 58-67.1


// var parent = document.getElementById('mainContent')
// console.log(parent.childNodes)

// var render = document.getElementsByClassName("render");

// for (var a = 0; a < render.length; a++) {
//     console.log(render[a].innerHTML)
// }

// function InputValues() {
//     document.getElementById('first-name').value = 'Muhammad';
//     document.getElementById('last-name').value = 'Ahmed';
//     document.getElementById('email').value = 'this@this.com';

// }

// Assig 58-67.2

var a = document.getElementById('form-content').nodeType;
console.log(a)

var x = document.getElementById('lastName').nodeType;
var y = document.getElementById('lastName').childNodes
var z = document.getElementById('lastName').childNodes.nodeValue = 'Updated'
console.log(x)
console.log(y)
console.log(z)

var z = document.getElementById('main-content')
var a = z.firstChild
var b = z.lastChild
console.log(a)
console.log(b)

var n = document.getElementById('lastName');
var a = n.nextSibling
var b = n.previousSibling;
console.log(b)

var j = document.getElementById('email');
var a = j.nodeType
var b = j.parentNode
console.log(a)
console.log(b)