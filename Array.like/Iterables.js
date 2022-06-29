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

// Allows to create an array from an "array-like" object, like the one above.
let makeArr = Array.from(arrayLike); //takes a second argument like a function

//This function helps with surrogates
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join("");
}

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
