//1. Ways to print in javascript
console.log("Hello world", 4 + 6, "another log");
// alert("me");
// document.write("This is document.write")
//2. Console API
console.warn("THis is a warning")
console.error("This is an error")
console.clear()
console.assert(4 == 6)

//3. JavaScript Variables
// Containers to store data values
var number1 = 34;
var number2 = 56;
console.log(number1 + number2)

/*
multi 
line 
comment
*/

// 4. Data types in javascript
var num1 = 455;
var num2 = 4.5;
var str1 = "This is a string";
var str2 = "This is also a string";

// objects
var marks = {
    ravi: 34,
    tabinda: 35,
    nazu: 99.9
}

console.log(marks)

// Booleans
var a = 10
var b = 20
console.log(a, b)

// Undefined
// var und = undefined;
var und;
console.log(und)

// null
var n;
console.log(n);

// At a very high level there are 2 types of datatypes in jS
// primitive data type: undefined, null, number, string , boolean , symbol
// Reference data type: arrays and objects


// Arrays
var arr = [1, 2, "bablu", 4, 5];
console.log(arr);
console.log(arr[0]);


// operators in javascript

// Arithmetic operators
var c = 10;
var d = 20;
console.log("The value of  a + b is ", a + b);
console.log("The value of  a - b is ", a - b);
console.log("The value of  a / b is ", a / b);
console.log("The value of  a * b is ", a * b);

// Assignment operators
var t = c;
t += 2;
t *= 2;
console.log(t);

// comparison operators
var x = 34;
var y = 56;
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x < y)
console.log(x > y)

// logical operators
console.log(true && false)
console.log(true || false)
console.log(!true)

console.clear()

// Functions
// DRY Principle -- DO NOT REPEAT YOURSELF
function avg(a, b) {
    return (a + b) / 2
}

c = avg(4, 6);
c1 = avg(14, 16);
console.log(c, c1);


// Conditionals in javascript
var age = 34;
// Single if
if (age > 8) {
    console.log("You are not a kid")
}

// if else

if (age > 8) {
    console.log("You are not a kid")
}
else {
    console.log("You are a kid")
}

// if else ladder
if (age > 32) {
    console.log("You are not a kid")
}
else if (age > 26) {
    console.log("You are a kid")
}
else {
    console.log("not bacha")
}
console.log("end of ladder")
// Loops in javascript

var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(function (element) {
    console.log(element);
})

// while let scope only within block
let j = 0;
// const a = 2;
// a=a+1 gives error cannot be changed

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

j = 6;
do {
    console.log(arr[j]);
    j++;

} while (j < arr.length)

// Break and continue

var arr1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
for (var i = 0; i < arr1.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr1[i])
}

// ARray methods
let myArr = ["Fan", "Camera", 34, null];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("tabinda");
console.log(myArr);

myArr.shift();
console.log(myArr)

const newLen = myArr.unshift("Nazida");
console.log(newLen);
console.log(myArr.toString());
console.log(myArr.sort());



// String methods in javascript

let muLovelyString = "Tabinda is a girl girl"
console.log(muLovelyString.length)
console.log(muLovelyString.indexOf("Tabinda"))
console.log(muLovelyString.lastIndexOf("girl"))
console.log(muLovelyString.slice(0, 3))

d = muLovelyString.replace("Tabinda", "Nazida");
console.log(d)

// Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());

// DOM manupilatation


let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass)


elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')

console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

console.log(document.title)
console.log(document.URL)
console.log(document.scripts)
console.log(document.links)
console.log(document.images)
console.log(document.domain)

// Selecting using Query
// selects only one element inside the container
sel = document.querySelector('.container')
console.log(sel)
// slects all the element inside a container
sel = document.querySelectorAll('.container')
console.log(sel)

function clicked() {
    console.log('The button was clicked')
}
window.onload = function () {
    console.log('The document was loaded')

}

// firstContainer.addEventListener('mouseover', function () {

//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out of Container");
// })

// firstContainer.addEventListener('mouseup', function () {
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function () {
//     console.log("Mouse down when clicked on Container");
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})

// Arrow Functions
function summ(a, b){
    return a+b;
}

// same using arrow
summ = (a,b)=>{
    return a+b;
}

summ(30,20)

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval--- schedule things
clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
localStorage.setItem('name', 'tabinda') 
// localStorage 
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

// Json 
obj = {name: "Tabinda", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse(`{"name":"Tabinda","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)






