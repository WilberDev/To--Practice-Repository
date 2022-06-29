/*alert('Im JavaScript');

let message = alert("Hello, I am an alert stored in a variable called message");

let admin;
let name;

name = "John";

admin = name;

alert(admin);

let ourPlanetName = "Earth", currentUserName;

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
 

let firstName = prompt('What`s your name?',['First name is enough']);

alert(`It's nice to meet you, ${firstName}.`)


let a = true;
alert(typeof a);
a = Number(a);

alert(typeof a);
alert(a);


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12 fixed is 3


if(1>=0){
    for (let x = 0; x < 10; x++) {
        
        alert("Hello" + x)
        
    }
}

// this a way to prove results using IF Else.

let question1 = prompt("What is the “official” name of JavaScript?", );


if (question1 == "ECMAScript") {
    alert("Right")
} else {
    alert("You don’t know? ECMAScript!")
}




let numero = prompt("Drop a number", 0);

if(numero > 0){
    alert(1)
} else if( numero < 0){
    alert(-1)
} else if(numero == 0){
    alert(0)
}


let result = (a + b < 4) ? 'Below' : 'Over';


login= "" 
let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' : '';



let hour = 12;
let isWeekend = false;

if ( isWeekend || hour < 10 || hour > 18) {
  alert( 'The office is closed.' ); // it is the weekend
}else{
    alert("Its Open")
}    


    let age = 12;
    
    // it checks if age is between 14 and 90
    if (age >= 14 && age <= 90) {
        alert('True, age is in the range')
    }
    
    // it checks if the range is not between 14 and 90
    if (age < 14 || age > 90){
        alert('You`re out of the range')
    }
    //Another way
    if (!(age >= 14 && age <= 90) ){
        alert('You`re out of the range')
    }


// this a a way to "authenticate" an Admin

let login;
let password;

login = prompt("UserName", );

if(login === "Admin"){
    password = prompt("Password" );
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === null || password === ""){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
} else if ( login === null || login === ""){
    alert("Canceled")
}else{
    alert("I dont know you!")
}


// the nullish operator (??) is used to choose the first defined(neither null nor undefined) value from a list, it works similarly as || but the last one choose the truthy vaule, it ignore "" or 0. 

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 0;
while (i++ <= 5){
    console.log(i)  
    alert( i );
    
} 


let n=2
for (; n < 10; n++) {

    if (n % 2 == 0)
  
    alert(n); // 2, then 4, 6, 8, 10
  }


//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
  

let i = 0;
while (i<3){
    alert( `number ${i++}!` );

}


// my way
let n;
do {
    n = +prompt("Give a number greater than 100", );
    
if( n== null || n == ""){
    break;
} else if(n <= 100){
    alert("Wrong number, try again!");
}
} while (n <= 100);


// course`s way :/
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);




let n= 100;

for (i = 2; i <= n; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

  //Write the code using if..else which would correspond to the following switch:
  switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );

// I did This.....

  let browser = "Chrome";
  if (browser == "Edge") {
      alert("You've got the edge");
  } else if (browser == "Chrome"
  || browser == "Opera"
  || browser == "Safari" 
  || browser == "FireFox" ) {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );   
  }


//Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

// I did This.....

  let a = +prompt('a?', '');

  switch (a) {
      case 0:
        alert( 0 );  
        break;

      case 1:
        alert( 1 );  
        break;

      case 2:
      case 3:
        alert("2,3");
        break;
  }



  let age = 19;

  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  

  function checkAge(age) {
    if (age > 18) {
      return alert("true");

    }
    // ...
    return confirm('Did parents allow you?');
  }


 

  //Rewrite it, to perform the same, but without if, in a single line.

  function checkAge(age) {
      return (age > 18) ? true : confirm("Did your parents allow you?");

    } 

  function checkAge(age) {
      return (age > 18) || confirm("Did parents allow you?")
  }
  checkAge(18);


  function getMin(n1,n2){
        if ( n1 > n2) {
            return alert(n2)
        } else {
            return alert(n1)
        }
  }

  //with question mark ? 

  function getMin(n1,n2) {
      return (n1 > n2) ? alert(n2) : alert(n1);
  }
  getMin(2,1)



let x= +prompt("type number", 2);
let n= +prompt("how many times?", 2);

function pow(x,n) {
    return alert(x ** n);
}

if ((2.3 >= 0.0) && (Math.floor(n) === n) && n !== Infinity) {
    pow(x,n);
} else {
    
}

//how we can copy a function into a variable

//function declaration
function name(params) {
    
}

//function expression 
let funcc = function(){

};


function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy it works without parenthesis
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  

  let confirmation = confirm("hola, who you are?" )

  if (confirmation) {
      alert(+confirmation)
  } else{
    alert(+confirmation)
  }


  //Rewrite function expressions with arrow functions

  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () =>alert("You agreed."),
    () => alert("You canceled the execution.")
  );


  function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    //              <--
    return result;
  }

  function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?",'');
let n = prompt("n?",'');

if (n<=0){
  alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else{
  alert( pow(x, n) );
}

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
  
    return true;
    
  }

  showPrimes(12)
  
//OBJECTS the basics....

  let user = {  // an object
    name: "wilber", //by key "name" and stores "Wilber"  
    lastName: "Camilo",
    age: 24,
    gender: "Male",
    isAdmin: false,  // the last property should have a coma. 
  }


let user = {};

user.name = "John";
user.surName = "Smith";
user.name = "Pete";
delete user.name;


//the easiest way to check if an object is empty or has any properties 
let objeto = {};

function isEmpty(obj) {
  for (const key in obj) {
    return false
  }
  return true
}



alert(isEmpty(objeto))



//sum all salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;

for (let key in salaries) {
  sum += salaries[key]
}

alert(sum);


// Multiply numeric property values by 2;
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumbers(obj) {
  for(let prop in obj){
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
    alert(obj[prop])
  }  
}

multiplyNumbers(menu)


//Objects can not be copied as primitive variable, you just can have more than one reference  to it.
//Cloning a Object

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let clMenu = {};
//Using a forin loop we can go into an object a clone it. 
for(let prop in menu){
  clMenu[prop] = menu[prop]
}

//lets try if it works
clMenu.width *= 2;

alert(`${menu.width} and the clone returns ${clMenu.width}`);


//there is an easier way to do it. it goes....

Object.assign(clMenu, menu)

//this way replaces for...in loop
let clone = Object.assign({}, menu)


alert(`${menu.width} and the clone returns ${clMenu.width}`);



//lets see how to clone a nested object.

let nested = {
  name: "Wilber",
  age:24,
  size:{
    with: 100,
    height: 500,
  }
}

let cloneNested = Object.assign({}, nested);

nested.size.height = 600;

//As we can see here a simple "Object.assign" method does not clone it, instead references it.
console.log(nested.size.height);
console.log(cloneNested.size.height);


let cloneNestedv2 = _.cloneDeep(nested);

var objects = [{ 'a': 1 }, { 'b': 2 }];
let arreglo = ["hola", "como", "estas?"];

//this method is used to create and reference objects using functions as methods.
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});




// using the "this" method we can access to a and b values
let calculator = {
  read(){
    this.a = +prompt("First digit", 0);
    this.b = +prompt("Second digit", 0);
  },
  sum(){
    return this.a + this.b;;
  },
  mul(){
    return this.a * this.b;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//make the code chainable, so it can be call with one ladder then .up().up().....down()

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

//then

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};


ladder
  .up()
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
  
  
  function Ab() {
    
  }
  
let a = new Ab();
let b = new Ab();

console.log(a == b);


//this is an object called user
let user = {
  name: "John",
  age: 30
};

//Here I just create a method named sayHi, which is a property of the object user.
user.sayHi = function(greetings) {
  console.log(greetings);
};

user.sayHi(
  `Hello my name is: ${user.name}, 
  I Am ${user.age} years old`
  ); // Hello my name is: John, I am 30 years old
  
  
  // We can also use a created function as a method. 
  
  function sayHi2() {
    console.log('Hello')
  }
  
  user.sayHi2 = sayHi2;
  user.sayHi2();
  
  
  
  //We are allowed to skip the word function to create methods inside objects. 
  
  // these objects do the same
  
  user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };

  
 

  function makeUser(name, age, city) {
    return {
      name,
      age,
      city
    };
}

let user = makeUser("Juan", 24, "Cotui");
let user1 = makeUser("jose", 26, "Santiago")

console.log( user.name ); // What's the result?us


let calculator = {
  read(){
    this.a = +prompt("a?", 1);
    this.b = +prompt("b?", 1);
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//with this way we are not allowed to access to this function again cause it created and called at a time, 
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

function user() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};



// create a new calculator using a constructor function.
//this in this case references the created object at run time. 
function Calculator() {
  this.read = function(){
    this.a = +prompt("First digit", 0);
    this.b = +prompt("Second digit", 0);
  }
  this.sum = function(){
    return this.a + this.b;;
  }
  this.mul = function(){
    return this.a * this.b;
  }
}

let cal = new Calculator();
cal.read();

alert( "Sum=" + cal.sum() );
alert( "Mul=" + cal.mul() );



function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function() {
    
    return this.value +=  +prompt("Give me a value");
  }
}

let accumulator = new Accumulator(1);

alert(accumulator.value);
accumulator.read();
alert(accumulator.value);
accumulator.read()
alert(accumulator.value);


let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);


  if(user.address){
    if(user.address.street){
      if (user.address.street.name) {
        
      }
    } else{
      alert(null + "segundo")
    }
  } else {
    alert(null + "primero")
  }

//this way allows us to create a nested object out of two constructors.
//The nested constructor can simply be outside of the primary one

function Makeusers(name, age, sex, streetName, sectorName, houseNumber) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.address = new Address(streetName, sectorName, houseNumber);
}
function Address(streetName, sectorName, houseNumber) {
  this.streetName = streetName;
  this.sectorName = sectorName;
  this.houseNumber = houseNumber;
}

let Juan14 = new Makeusers("Juan", 24, "Male", "La 123", "Complejo 14", "25");

//I was just playing a little with literal objects cloning them using the for...in method.
console.log("Cloning literal objects with for...in")
let student = {
  name: "Wilber",
  age: 24,
  birthdate: "09/03/1997",
}

console.log(student.name + student.age + student.birthdate)
let newStudent = {};

for (const key in student) {
  
  newStudent[key] = student[key]
  
}

console.log(newStudent.name + newStudent.age + newStudent.birthdate)
console.log(`student and newStudent are equal: ${student == newStudent}`);

//Lets use the "object.assign" method to clone/create a new object from a literal one.
console.log("Let`s use a method called Object.assign to clone/copy it");
let newStudent2 = {}

Object.assign(newStudent2, student);

console.log(newStudent2.name + newStudent2.age + newStudent2.birthdate)
console.log(`student and newStudent2 are equal: ${student == newStudent}`);


//Now I decided to create a constructor function which allows me to create new objects from it.

function studentCF(name, age, birthdate) {
  this.name = name;
  this.age = age;
  this.birthdate = birthdate;
}

console.log("Now I am creating an object from a contructor...");

let newStudent3 = new studentCF("wilber", 24, "09/03/1997")

console.log(newStudent3.name + newStudent3.age + newStudent3.birthdate);

console.log(`studentCF and newStudent3 are equal: ${studentCF == newStudent3}`);
console.log(`In fact studentCF and newStudent3 are not even similar: 
studentCF is a ${typeof studentCF} and newStudent3 is normal ${typeof newStudent3}`);

let result = newStudent2 + newStudent3
console.log(newStudent2);


let n = {
  numero: 120,
}

let n2 ={
  numero: 10,
  numero: 11
}

let arreglo = ["hola", "Holo", "hele"]
//Let's merge them to see how it works.....
let Nmerged = Object.assign({},[ n, n2]);


let sum = Number(n) // simplier way is let sum = +n
let greater = n.numero > n2.numero;
console.log(sum);
console.log(greater);

let numb = Boolean(123) // This will return a primitive true boolean
let num = new Boolean(123); //This one will return an wrapped object with a true property


let srt = "Hello";
let billion = 1000000000;
let _billion = 1_000_000_000;

//A way to simplify 1billion ins js is
let ebillion = 1.23e6 // equal to 1000000000


//We can use them to avoid writing the milliseconds zeroes
let mcs = 1e-6;



// for Js is hard to covert decimals (0.1, 020, 0.4) in to binary as it is for fractions 1/3
// A way to fix this is using .toFixed(2)

let suma = 0.1 + 0.2;
console.log(suma); //0.30000000000000004 
//lets use .toFixed()
console.log(suma.toFixed(2));


//Ways to test isFinite and isNaN
let _finite = "10" //finite string number;
let _NaN = "srt"; // NaN(not a number) string

console.log(isFinite(_finite)); //true
console.log(isNaN(_NaN)); //true

//lets switch
console.log(isNaN(_finite)); //false is a number
console.log(isFinite(_NaN)); //false is a string
let a = +prompt("a?", )
let b = +prompt("?",)

let sum = a + b;

alert(sum.toFixed(2));


//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

function readNumber() {
  let n;
  do {
    n = prompt("Insert a number", 0);
  } while (!isFinite(n));
  if (n == null || n == " ") {
    return null;
  }
  return +n;
}

alert(`Read: ${readNumber()}`);


//Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function random(min,max) {
  return Math.random() * (max - min) + min;
}

alert(random(10, 100))

//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
function randomInteger(min,max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1) );
}

alert(randomInteger(10, 100))


//lets play around with double, single quotes and backticks.

let srt = "hello word \n how's it going?" // first two works the same 
let srt1 = 'hello word \n how\'s it going?'
let srt2 = `hello word
 how's it going?` // with this one you can easily make new lines. 
 
 console.log(srt)
 console.log(srt1)
 console.log(srt2)
 console.log((srt == srt1) == srt2)

 let strlenth = "50015";

 console.log(+strlenth + strlenth.length)

 //you're also able to access to a string position 
console.log(srt[srt.length - 2])
console.log(srt[3]) //modern way, in case of empty it returns undefined 
console.log(srt.charAt(6)) // if empty it returns an blank string 

// lets iterate a string
let iterate = 'Hello I\'m will';

for (const char of iterate) {
  console.log(char)
}


let hola = "hola"

hola =  hola[0].toUpperCase() + hola.slice(1) 

console.log(hola)



let str = `It looks for the substr in str, starting from the given position pos, 
and returns the position where the match was found or -1 if nothing can be found.`

//console.log(str.indexOf("pos", ))


//Lets look for every occurrences
let pos = -1
let target = "s"
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}


//lets turn it into a function 
let array = [];
function indexOf(str, target) {
  let pos = -1
  
  while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
    array.push(pos)//this method allow me to create an array containing each result.
  }
}

indexOf(str, target);


console.log("S".codePointAt(0));

//Write a function ucFirst(str) that returns the string str with the uppercased
//first character, for instance:

function ucFirst(str) {
  if (str == null || str == 0) {
    return null;
  } else {
    str = str.trim();
    return str[0].toUpperCase() + str.slice(1);
  }
}

//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

//Create a function truncate(str, maxlength) that checks the length of the str and,
//if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
//to make its length equal to maxlength.

let str = `It looks for the substr in str, starting from the given position pos, 
and returns the position where the match was found or -1 if nothing can be found.`;

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + "...";
    return console.log(str);
  } else {
    return console.log(str);
  }
}

truncate(str, 20);
truncate("What I'd like to tell on this topic is:", 20); // "What I'd like to te…"
truncate("Hi everyone!", 20); // "Hi everyone!"
truncate();

//Create a function extractCurrencyValue(str) that would extract the 
//numeric value from such string and return it.

let str = "$100"

function extractCurrencyValue(str) {
 
  return str = +str.slice(1);

}
console.log(extractCurrencyValue(str))


let array = ["$100","$100","$100","$100","$100","$100","$100",]
const map = array.map( x => x.slice(1))
let i = 0;
for(let a = 0; a < map.length; a++){
  
  i += +map[a]
  
}
console.log(i)

*/
/*

//Arrays
let utensils = ["Cloth", "Pen","Car", "Bike", "laptop"]

//arrays can store any type of elements
let arr = ['watch', 
{name: "wil"}, 
false, 
function(){ console.log('Hi!');}, 
() => console.log("=> function "),
["A nested array"],
]


/*Arrays can work as stack(LIFO)pop/push 
and queues(FIFO)unshift/shift and be both at the same time (dequeue).*/

/*
//comparing two arrays

let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [1,2,3,4,5,6,7,8,9]

console.log(arr1 == arr2) // false as objects would.

//I'll try a loop

for (let index = 0; index < arr1.length; index++) {
  console.log (arr1[index] == arr2[index]) ;
  
}
console.log("Using 'for...of'  works also...")
for (const iterator of arr1) {
  console.log (arr1[iterator] == arr2[iterator]) ;
}

/*Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. 
Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.*/
/*
let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.ceil((styles.length / 2) - 1)] = "Classics";
console.log(styles);
//styles.shift();
console.log(styles);
//styles.unshift("Rap","Reggae");
console.log(styles);


/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.*/

/*
function sumInput() {
  let inputArr = [];
  while (true) {
    let input = prompt("Inserta un numero: ");
    if (input == null || input == "" || !isFinite(input)) break;
    inputArr.push(+input);
  }
  let sum = 0;
  for (let n of inputArr) {
    sum += n;
  }
  return sum.toFixed(); // I used toFixed() method to round decimal numbers.
}
alert("El total sumado es: " + sumInput());
*/

//The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

//The task is: find the contiguous subarray of arr with the maximal sum of items.

//Write the function getMaxSubSum(arr) that will return that sum.
/*
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    alert("partialSum " + partialSum)
    partialSum += item; // add it to partialSum
    alert("partialSum " + partialSum)// = -1 0 
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    alert("maxSum " + maxSum) // = 0
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
/*alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0*/
/*

//Arrays methods

//arr.splice()
//arr.slice()
//arr.concat()


let arr1 = []; 
let arr2 = [];
let arr3 = [];

//lets add some items to the arrays

arr1.push("Bootstrap", "Angular", "React", "Vue");
arr2.push("SCSS", "TypeScript","JavaScript")
arr3.push("NodeJS", "SQL")

//splice in used

arr1.splice(0,0, "Ionic"); // start from 0, delete 0 and insert "ionic" on 0 position.
let copyarr2 = arr2.slice(0,1);// make a copy from 0 to 1 on copyarr2 variable. 


//concat 

let contactarr123 =  arr1.concat(arr2,arr3, "string", ["Array"], 24, {name: "Object",});

//if we add this special property to the object it will add its elements insteadv "[Symbol.isConcatSpreadable]: true"
let obj = {}
console.log(contactarr123[11])

//I used a forEach with a function that returns the sum of all numeric values. 

const array1 = ["sdesd", "12", "12", "13", "hey", 23, 50, String, 35, "des", 0.1, 0.2, Number];
let Sum = 0;

array1.forEach(function(item, index, array) {
  if (isFinite(array[index])) {
    Sum +=  +item;
  }  
});
console.log(Sum.toFixed(2));
console.log(array1.includes(String, 0));
console.log(array1.indexOf(String, 0));
console.log(array1.indexOf("hey", 0));


//this function is usted to return ordered numeric values
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

console.log(compare(1,2))

//to sort from min to max
arr.sort( (a, b) => a - b );

//for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
countries.sort( (a, b) => a.localeCompare(b))




//thats an easy way to create an array from a coma separated string

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');
for (let name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

//split an string into an array of letters
let str = "test";

console.log( str.split('') ); // t,e,s,t

//But how can I do the opposite? Create a string from an array!

let intostr = arr.join(", ");

console.log(intostr);

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23


//Interesting way to see if two arrays are equal 
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true


//Write the function camelize(str) that changes dash-separated words
//like “my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.


//This function allow to convert any string into a Camel style one. 
function camelize(str) {
  let toArr = str.split("-");
  let result = toArr.map((item, array) => {
    if (item != array[0] && item != "") {
      //console.log("hola " + item[0].toUpperCase() + item.slice(1))
      return item[0].toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  });
  let toStr = result.join("");
  console.log(toStr);
}

camelize("background-color");
camelize("list-style-image-");
camelize("-webkit-transition-");

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.
let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b){
  return arr.filter(item => item >= a && item <= b)
}

console.log(filterRange(arr1, 1, 5)) //5 3 1
console.log(arr1)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  return arr
  .forEach((item, index) => item >= a && item <= b ? item : arr.splice(index, 1));

}
filterRangeInPlace(arr, 1, 5)
console.log(arr)


//Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a  );

console.log(arr)

//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){ 
  return arr
  .slice(0) //copy from 0 to the end
  .sort() //sort as string the whole array
}

let sorted = copySorted(arr)

console.log(sorted); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

//Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator() {
  //this is an object that stores methods(methods == functions).
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  //this object stores one function that receives one argument
  this.calculate = function (str) {
    let toArr = str.split(" "),
    a = +toArr[0];
    op = toArr[1];
    b = +toArr[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  //This a function that creates new methods
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("10 - 4"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("hypo",(a,b) => Math.sqrt((a * a) + (b * b)) )

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

//Playing to copy all objects the new array instead of referencing them.
//let names = users.map((item) => item = Object.assign({}, item) )
let names = users.map((item) => item.name) //item == each index's element 

console.log( users ); 
console.log(names);// John, Pete, Mary


//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let Will = {name: "Will", surname: "Camilo", id: 4}
let users = [ john, pete, mary ];

//Just to play with, I created a function that add new objects to the array
function addUsers(user) {
  return users.push(user)
}
addUsers(Will)

//let usersMapped = users.map(item => item.name + " " + item.surname)
let usersMapped = users.map(user => user = ({
  fullName : `${user.name} ${user.surname}`, 
  id: user.id 
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[03].id ) // 1
console.log( usersMapped[03].fullName ) // John Smith
console.log( usersMapped )

//Write the function sortByAge(users) 
//that gets an array of objects with the age property and sorts them by age.

function sortByAge(users) {
   users.sort((a, b) =>  a.age - b.age)
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete



//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//Multiple runs of shuffle may lead to different orders of elements. For instance:

//return Math.round(min - 0.5 + Math.random() * (max - min + 1) );

let arr = [1, 2, 3];

function shuffle(array) {
  //the right way of do it, besides that it does have a performance problem
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  //array.sort( (a, b) => a * Math.random() - b) //fix it later
}

shuffle(arr);
// arr = [3, 2, 1]
console.log(arr)
shuffle(arr);
// arr = [2, 1, 3]
console.log(arr)
shuffle(arr);
// arr = [3, 1, 2]
console.log(arr)


//Write the function getAverageAge(users)
//that gets an array of objects with property age and returns the average age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
  let result = 0; 
  //much more simply way to do it
  return result = users.reduce ((prev, user) => prev + user.age, 0) / users.length   
  //for(let i = 0; i < users.length; i++){
    //result += users[i].age
 // }
  //return result / users.length
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


//Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  let result = [];
  arr.map((item) => {
    !result.includes(item) ? result.push(item) : item; // if result does not have item insert it. 
  });
  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(strings)); // Hare, Krishna, :-O
*/

//Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//Create a function groupById(arr) that creates an object from it, with id as the key,
// and array items as values

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/*
//Array-like and iterables

// There is a method that creates an that creates an array from an iterable or array-like
let arrayLike = {
  0: "Im",
  1: "an",
  2: "Object",
  3: "looking",
  4: "as",
  5: "array",
  length: 6,
};

// Allows to create an array from an "array-like" object
let makeArr = Array.from(arrayLike);

for (const iterator of makeArr) {
  console.log(iterator);
}

let range = {
  from: 1,
  to: 10,
};

//Lets make this object work as an array
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

//lets see if it works
for (const num of range) {
  console.log(`Im an iterable object: ${num}`);
}

/*
//Let's try with another
let arrayLikeIterable = {
  0: "Im",
  1: "an",
  2: "Object",
  3: "looking",
  4: "as",
  5: "array",
};

arrayLikeIterable[Symbol.iterator] = function () {
  return {
    current: Number(this[0]),
    last: Number(this[5]),
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (const items of arrayLikeIterable) {
  console.log(`This is an arrayLike but not iterable tuned to do so: ${items}`);
}
//didn'n work

//Strings are also iterables

let _string = "I am an string";

for (const letters of _string) {
  console.log(letters);
}

//Lets see how it works explicitly works

let iterator = _string[Symbol.iterator]();

console.log("Now with 'symbol.iterator'");
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
//Differences between iterables and arrayLike 

//The first one uses Symbol.iterable to iterate
//and the second has indexes as properties and length property assigned


//Map and set

let map = new Map();
map.set("1", "str1");
map.set(2, "num2");
map.set(true, "bool1");

map.get("1");
map.has("2");
map.delete("3");
map.size;
//map.clear();

//Maps unlike conventional objects allows to add any kind of key;
//numbers, boolean, strings....

//objects as keys

let Wilber = { name: "Wilber" };

let assistanceCount = new Map();

assistanceCount.set(Wilber, 2);

//Maps are basically objects and arrays combined with superpowers

//you can chaing different calls

map.set(5, "Hola").set("6", "will").set("d7d", "we");

//We have couple of option to iterate over an object
map.entries(); //like iterating over an array
map.keys(); //iterates over each key
map.values(); //Over each value

let groceryMap = new Map([
  ["Apples", 10],
  ["Milk", 5],
  ["Watermelon", 1],
  ["Chicken", 1],
  ["Rice", "5 pounds"],
  ["Cucumber", 5],
  ["Cabbage", 1 / 2],
  ["Beans", "5 pounds"],
]);

//Let's try each of them

for (const entries of groceryMap.entries()) {
  console.log(entries);
  console.log(Array.isArray(entries)); //Each entry is an array
}

for (const values of groceryMap.values()) {
  console.log(values);
}

for (const keys of groceryMap.keys()) {
  console.log(keys);
}

//It has its own forEach method built-in

groceryMap.forEach((value, key, map) => {
  console.log(`${key} ${value}`);
});

//You can even create a map from an array using Object.entries(obj)

let obj = {
  id: 02,
  name: "Wilber",
  age: 24,
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get("name"));

//we can even reverse it; Object.fromEntries()

let mapofaccounts = new Map([
  ["Wilber", 2000000],
  ["Juan", 5480],
  ["Elaine", 58000],
  ["Wilson", 20000],
  ["Camilo", 53000],
  [true, 25000],
  [obj, "Object"], //[object object]
]);

MapofaccountstoObject = Object.fromEntries(mapofaccounts);

//Let's see
console.log(MapofaccountstoObject);

//Set; is an array-like object that stores values once

//Set methods
let set1 = new Set();
set1.add();
//Receives values
set1.delete(); //Removes and returns true if the value was there.
set1.has();
set1.clear();
set1.size;

let arry = [10, 15, 20, 25, 30, 35, 40, 40, 45]; // 9 indexes

let set = new Set(arry); //

console.log(set); //It'll return only 8,there's two 40

//Challenges

//Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  let unique = new Set(arr); //easiest way to take unique values
  return unique;

  /* let unique = [];

  unique;
  arr.reduce((previos, current) => {
    if (unique.includes(current) == false) {
      unique.push(current);
    }
  });
  return unique;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O
let a = { a: "A" };
let b = { b: "B" };

console.log(a == b);


//Fibonacci sequence

//0+1= 1 1+1= 2 1+2= 3.....
//[0,1,1,2,3,5,8,13,21,34,55]

function fibonacci(s) {
  let fibArr = [0, 1];

  for (let num = 1; num < s; num++) {
    fibArr.push(fibArr[num] + fibArr[num - 1]);
  }
  return fibArr;
}

console.log(fibonacci(15));*/

//Write a function aclean(arr) that returns an array cleaned from anagrams.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function anaGramsclean(arr) {
  let result = [];
  let map = new Map();
  for (let o = 0; o < arr.length; o++) {
    result.push(arr[o].toLowerCase().split("").sort().join(""));
    map.set(result[o], arr[o]);
  }
  return Array.from(map.values());
}

console.log(anaGramsclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

//We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
let map3 = new Map();

map3.set("name", "John");

let keys = Array.from(map3.keys());

keys.push("more");
keys.push("more");
console.log(keys);

//WeakMap and WeakSet
//

let will = { name: "Wilber" };

let WkMap = new WeakMap();

WkMap.set(will, "..."); //Keys Must be objects NOT primitives

will = undefined;

console.log(WkMap); //It will be empty as his reference is lost

//trying to add a primitive key
//WkMap.set("Will", "!!!!!"); //returns invalid value used as weak map key

//Fun fact WeakMaps are not iterable nor a way to get all the keys.

//Its useful at moments when we need work with thirdparty/temporary objects

let visitsWeakMap = new WeakMap();

let Jhon = { name: "Jhon" };
let ana = { name: "Ana" };

function countVisits(user) {
  let count = visitsWeakMap.get(user) || 0;
  visitsWeakMap.set(user, count + 1);
}

countVisits(Jhon);
countVisits(ana);
//countVisits(Jhon);
//Jhon = null;

//Challenges

//Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

//Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

//P.S. When a message is removed from messages, it should disappear from your structure as well.

//P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

//Object.keys, values, entries

//Challenges

//Sum the properties

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(object) {
  let Accumulator = 0;
  for (const value of Object.values(object)) {
    Accumulator += value;
  }
  return Accumulator;
}

console.log(sumSalaries(salaries)); // 650

//Count properties

let user = {
  name: "Jhon",
  age: 30,
};

//This will return the length of the object
function count(object) {
  return Object.keys(object).length;
}
console.log(count(user));

//Destructuring arrays and objects
//This techniques allows you to unpack or create variables out of properties

let Arre = ["Jhon", "Smith"];

[firtName, LastName] = Arre; //Destructuring

console.log(firtName + LastName);

//If you add blank spaces those will be skipped as the unassigned ones.
let [firstName, , title] = ["Will", "Cesar", "Consul", "of the Roman Republic"];

console.log(title);

//It does works on other iterables besides array, like (Set,Map, string, etc).

let [A, B, C] = "ABC"; //["A","B","C",]

let [one, two, three] = new Set([1, 2, 3]); //[1,2,3]

//Object destructuring

let Wilber = {
  Name: "Wilber",
  Surname: "Smith",
  Age: 24,
  Address: "Otario, Bulgari", //I know! :D
};

let { Name, Surname, Age, Address } = Wilber;

console.log(Name, Surname, Age, Address);

//Nested destructuring

let NestedObj = {
  Brand: "Honda",
  Model: ["Accord", 2017, "EXL"],
  Color: "White",
};

//Lets destructure it

let {
  Brand,
  Model: [Model, Year, Version],
  Color,
} = NestedObj;

console.log(Brand);
console.log(Model);
console.log(Year);
console.log(Version);
console.log(Color);

//Challenges

//We have an object:

let user1 = {
  name1: "John",
  years1: 30,
};
/*Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)

Here’s an example of the values after your assignment:*/

let { name1, years1: age1, isAdmin = false } = user1;

console.log(name1); // John
console.log(age1); // 30
console.log(isAdmin); // false

//Maximal salary

//There is a salaries object:

let salariess = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
//Create the function topSalary(salaries) that returns the name of the top-paid person.

//If salaries is empty, it should return null.
//If there are multiple top-paid persons, return any of them.

function topSalary(salaries) {
  let Maxname;
  let MaxSalary = 0;
  for (const [name, salary] of Object.entries(salaries)) {
    if (MaxSalary < salary) {
      MaxSalary = salary;
      Maxname = name;
    }
  }
  return Maxname;
}

console.log(topSalary(salariess));
