// import apiKey from './util.js'
// import apiKey, {book, localUrl, utilName} from './util.js'
import * as util from "./util.js";

// console.log(util.book);
// console.log(util.localUrl);
// console.log(util.utilName);
// console.log(util.default);
// console.log(apiKey);

const userMessage = "Custom message";
let messageYouCanChange = "First value";
messageYouCanChange = "Second value";

console.log("Hello World");
console.log(userMessage);
console.log(messageYouCanChange);

console.log(10 + 5);

const isTrue = 10 > 5;
if (isTrue) {
  console.log(10 > 5);
}

console.log(add(5, 2));
greet("Adrian", "Hello");
util.greatings();

function add(a, b) {
  return a + b;
}

function greet(userName, message) {
  console.log(`${message},${userName}`);
}

console.log(util.user.userName + "is " + util.user.age + " old.");
util.user.greet();

const sleeping = "sleeping";
const hobbies = ["eating", "programming", "a song of ice and fire", "clr"];
hobbies.push(sleeping);

const index = hobbies.findIndex((item) => item === sleeping);
if (index) {
  console.log("There is no sport in hobbies");
}

const indexOfSleeping = hobbies.findIndex((item) => item === "sport");
if (indexOfSleeping) {
  console.log(
    "There is " + sleeping + " in hobbies in " + indexOfSleeping + " index"
  );
}

console.log(hobbies);

const newHobbies = hobbies.map((item) => item + "!");
for (let hobby of newHobbies) {
  console.log(hobby);
}

const newHobbies2 = hobbies.map((item) => ({
  text: item,
}));

console.log(newHobbies2);

const [fistName, lastName] = ["Max", "Schwarzmuller"];

console.log(fistName);
console.log(lastName);

const user = {
  name: "Max",
  age: 34,
};

const { name: userName, age } = user;

console.log(userName);
console.log(age);

const mergedHobbies = [...hobbies, ...newHobbies];
const nestedArray = [hobbies, newHobbies];

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(mergedHobbies);
console.log(nestedArray);
console.log(extendedUser);

// const password = prompt('Your password')
const password = 'example';

if (password) {
  if (password === "Hello") {
    console.log("Hello is ok");
  } else if (password === "Hi") {
    console.log("Hi is ok");
  } else {
    console.log("No Hello?");
  }
}

for (const hobby of hobbies) {
  console.log(hobby);
}

const list = document.querySelector("ul");

function handleTimeout() {
    console.log('Timed out!');
}
const handleTimeout2 = () => {
    console.log('Timed out!');
}


const timeout = 1000;
const subscription1 = setTimeout(handleTimeout, timeout);
const subscription2 = setTimeout(handleTimeout2, timeout);
