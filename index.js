/*
// String
// numbers
// intergers
// boolean
// objects
// array

// How are you this morning
//


let greetings = "How are you today"
const greetings_default = "Hi, how are you today!"

console.log(greetings)

let x = 500
let y = 900

const total = x + y

console.log("The total is " + total)
//boolean
let class1 = true
let class2 = true

if (class1 == false){
    console.log("class1 is free")
}else{
    console.log("class is not false")
}

// object
SUV1 = {
    name:"Tesla",
    color:"Orange",
    model: "v4g",
    price: "3,000,000,",
    weight: "500kg",
}

SUV2 = {
    name:"Toyota",
    color:"White",
    model: "v2g",
    price: 100000000,
    weight:"200kg"
}
console.log(SUV2)
console.log(SUV2.price)

// array


//string

let gender = "boy"

console.log("I am a " + gender)

//number
let r = 600
let p = 900

const answer = r * p
console.log("The answer is "  + answer)

//boolean
let fruit = true
let cereal = false

if (fruit == cereal){
    console.log("It is fruity")
}else{
    console.log("It is Cereal!")
}

// object
Girl = {
    name:"Ada",
    complexion:"fair",
    age: "22",
    height: "5.7",
    weight: "40kg"
}

Boy = {
    name:"Adeoye",
    complrxion:"dark",
    age: "25",
    height: "6.3",
    weight:"50kg"
}
console.log(Girl)
console.log(Boy.weight)

//array
const bucket = ["Orange", "cucumber", "apple",]

SUV1 = {
    name:"Tesla",
    color:"Orange",
    model: "v4g",
    price: "3,000,000,",
    weight: "500kg",
}

SUV2 = {
    name:"Toyota",
    color:"White",
    model: "v2g",
    price: 100000000,
    weight:"200kg",
}

// object
const Bags = [
    {
        name:"Gucci",
        color:"Wine",
        size:"13kg",
        price:1500000
    }
    ,{
        name: "Chanel",
        color: "peach",
        size: "15kg",
        price: 2000000
    }
        
]


//Strings method
const Denominations = "eigth hundred thousand pounds"
const Denominations2 = "NINE HUNDRED THOUSAND POUNDS"

console.log(Denominations.length)
console.log(Denominations.length)
console.log(Denominations.toUpperCase());
console.log(Denominations.toLowerCase());

console.log(Denominations.indexOf('e'))
console.log(Denominations.indexOf('n'))
console.log(Denominations.lastIndexOf('d'))
console.log(Denominations.substring(0, 17))

console.log(Denominations.slice(-7))
console.log(Denominations.replace("eight", "Ten"))


//DOM MANIPULATION
*/

// change content, modifies structure
// change styling
// Add or remove elements
//respond to event (click etc)
//Access Elemt

const paragraph = document.getElementById('myparagraph');
const button = document.getElementById('mybutton')

/*button.addEventListener ('click', function(){

    paragraph.textContent = "This is the new javascript content"

}) */

//SELECTOR

const D = document.getElementById('myDiv')
const P = document.querySelector('.myP')

const createSomething = document.createElement('p')
createSomething.textContent = "i am born to rule"
//D.appendChild(createSomething);

paragraph.classList.add ('.highlights'),
paragraph.classList.remove ('.highlights')

// Arithmetic operators *+-/
// Comparison Operators ===
// Logical operators && || !
// urinary operators (decreement -- Increement ++)
// Assignment Operators(aasign ==, add and assign +=)
//Tinary Operators (condition ? value1 : value2)
//control flow(1 Conditional Statement if...else statement 2. Loops-)


let num = 400.3455748394
console.log(num.toFixed(2))
console.log(Number.isInteger(num))
console.log(Math.floor(num))
console.log(Math.max(100, 300, 700))

//GLOBAL VARIABLE
let x = 500
let y = 600

let z = x > y

y > xa ? y : x

// arrithmetic Operators
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Comparison Operators
console.log(x > y)
console.log(x === y)

//Logical Operators
console.log(x && y)
console.log(x || y)

//Assignment Operators
console.log(x += y)

//Unary Operators
console.log(++x)
console.log(--y)

//Tinary Operators
let result = (x > y) ? "x is bigger than y" : "y is bigger than y"
console.log(result)


let a =500
let b = 600

//IF ELSE
if (a > b){
    console.log("a is greater")
}else {
    console.log("y is greater")
}

// If ELSE, ELSE
let Ade = 100

if (Adeage < 100){
    console.log("You're stillqualifies for the pension")
}else if (Adeage >= 18 && Ade < 65){
    console.log("sorry! come back you are older")
}else if (Adeage > 65){
    console.log("you are qualified")
}else{
    console.log("please specify your age")
}

//LOOP for
for (let healthrecords = 100; healthrecords < 100; healthrecords++){
    console.log(healthrecords);
}

//array
const Billionaires= ["Funmi", "yahya", "Wealth", "Micheal", "Abimbola"]

//FUNCTIONS
//takes input (parameter or arguments)
// give output
//helps to divide your code into modules
//makes your code clean
//it's reuseable

const class_score = [1,2,3,4,5,6,7]
const class_names = ["Jumoke", "Adeola", "Ibrahim", "Chukwuka"]

const Students = [

    { }
]

//NAMED FUNCTIONS
function greet(name1 name2){
    console.log(`Welcome back ${name1} and ${name2}`)

}

greet("Abimbola", "Ahmed")
//array of methods
//.push() - remove element from
const oldclassname = ["Jumoke", "Adeola", "Ibrahim", "Chukwuka"]
const newclassname = oldclassname.push("Funmi")

oldclassname.push("Funmi")
oldclassname. 0

let oldclassname = ["Jumoke", "Adeola", "Ibrahim", "Chukwuka"]
oldclassname.pop()
console.log(oldclassname)

oldclassname.splice(1, 1, "John", "Moses",)

let numbers = [1,2,3,]