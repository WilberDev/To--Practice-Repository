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
