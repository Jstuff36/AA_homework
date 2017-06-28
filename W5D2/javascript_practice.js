function madLib(verb, adj, noun) {
  console.log(`We shall ${verb} the ${adj} ${noun}`);
}

madLib("climb", "largest", "giraffe");

function substring(searchString, subString) {
  var sentSplit = searchString.split(" ");
  if (sentSplit.includes(subString)) {
    return true;
  }
  return false;
}

console.log(substring("Jump for joy", "joys"));

function fizzBuzzz(arr) {
  const fizzbuzzArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      continue;
    }
    else if (arr[i] % 3 === 0 || arr[i] % 5 === 0 ) {
      fizzbuzzArr.push(arr[i]);
    }
  }
  return fizzbuzzArr;
}

console.log(fizzBuzzz([3,5,8,10,12,15]));

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 3; i < num; i++) {
    if (num % i === 0 ) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(8));

function sumOfPrimes(n) {
  let number = 0;
  let numPrimes = 0;
  let sum = 0;
  while (numPrimes < n) {
    if (isPrime(number)) {
      sum += number;
      numPrimes += 1;
    }
    number += 1;
  }
  return sum;
}

console.log(sumOfPrimes(9));

function titleize(arr, printCallback) {
  let titleized = arr.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  printCallback(titleized);
}

titleize(["Mary", "Brian", "Leo"],
  function (thingArr) {
    thingArr.forEach(thing => console.log(thing));
});

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes phrRRRRR!`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  var trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach(elephant => Elephant.paradeHelper(elephant));
