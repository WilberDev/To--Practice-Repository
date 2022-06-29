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
  return unique;*/
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

//We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

let map3 = new Map();

map3.set("name", "John");

let keys = Array.from(map3.keys());

keys.push("more")
console.log(keys)