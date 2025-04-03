# JavaScript Notes

## 🖥️ Window Object (Provided by the Browser)
The `window` object is a global object provided by the browser, acting as a container for various features not part of core JavaScript.

### 🔹 Important Properties & Methods
- `window.location.href` → Returns the URL (href) of the current window.
- `window.innerHeight` → Gets the current window height.

### 🔹 `var` vs. `let` & `const`
- `var` is a property of `window`.
- `let` and `const` are **not** properties of `window`.

---

## ✅ Truthy & Falsy Values

### 🔹 **Falsy Values:**
These evaluate to `false` in a boolean context:
- `false`
- `0` (zero)
- `""` (empty string)
- `undefined`
- `NaN`
- `null`
- `document.all`

### 🔹 **Truthy Values:**
Everything else is **truthy**.

---

## 🔄 Array Methods

### 🔹 `forEach()`
```js
array.forEach((element, index, array) => {
    console.log(element, index);
});
```
📌 **Drawback** → It does not modify the original array, but it does not return a new array either.

### 🔹 `map()`
```js
const newArray = array.map((element) => element * 2); // Example: multiplying each element by 2
console.log(newArray);
```
📌 **Advantage** → Creates a **new array** without modifying the original one.

---

## 🎯 First-Class Functions in JavaScript

### 🔹 Functions Assigned to Variables & Passed as Arguments
```js
function displayResult(result) {
  console.log(result);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(1, 3, displayResult);
```

---

## 🎯 Higher-Order Functions

### 🔹 A function that takes another function as an argument or returns a function
```js
function Greet(name, callback) {
  console.log("Hi", name);
  callback();
}

function Bye() {
  console.log("Bye");
}

Greet("Hanzla", Bye);
```

```js
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(5);
console.log(double(3));
```

---

## 🔄 `filter()` & `reduce()`

### 🔹 `filter()` → Selective Filtering
```js
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0);
console.log(even);
```

### 🔹 `reduce()` → Reducing an Array to a Single Value
```js
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);
```

```js
const maxValue = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log("Max number:", maxValue);
```

---

## 🔥 `this` Keyword

### 🔹 Using `this` Inside an Object
```js
const restaurant = {
  name: "Hanzla",
  order: function () {
    console.log(this.name);
  }
};

restaurant.order();
```

### 🔹 Using Arrow Functions to Preserve `this`
```js
const restaurant2 = {
  name: "Hanzla",
  order: function () {
    const helper = () => {
      console.log(this.name);
    };
    helper();
  }
};

restaurant2.order();
```

---

## 🏗️ Constructor Functions
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Hanzla", 25);
console.log(person1.name);
```

---

## 🚀 IIFE (Immediately Invoked Function Expressions)
```js
(function () {
  console.log("Hanzla is good");
})();
```

```js
var ans = (function () {
  var name = "Hanzla";
  return {
    getter: function () {
      console.log(name);
    },
    setter: function (updateName) {
      name = updateName;
    }
  };
})();

ans.getter();
```

---

## 🌐 Prototyping & Inheritance
```js
const parent = {
  canTalk: true,
  canWalk: true,
  canSing: true,
};

const son = Object.create(parent);
son.canDance = true;
console.log("Son can sing:", son.canSing);
```

---

## 🎯 Pure vs. Impure Functions

### 🔹 Pure Function
```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

### 🔹 Impure Function
```js
let total = 10;
function addToTotal(num) {
  total += num;
  return total;
}
console.log(addToTotal(5)); // 15
console.log(addToTotal(5)); // 20
```

---

## 🔗 Closures in JavaScript
```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}

const newFunction = outerFunction("Outside");
newFunction("Inside");
```

---

## 🌟 `let` & `const` Are Block-Scoped Variables
```js
if (true) {
  let a = 10;
  const b = 20;
  console.log(a, b);
}
// console.log(a, b); // ReferenceError
```

---

# JavaScript Notes: Parallel Data Fetching with Promise.all & Async/Await

---

## 🔄 Parallel Data Fetching with **Promise.all**

This example uses **Promise.all** to fetch data in parallel from an array of URLs. If any fetch fails, the entire Promise.all will reject.

```js
// Array of API endpoints (or any URLs)
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3'
];

// Map each URL to a fetch promise
const fetchPromises = urls.map(url =>
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network error: ${response.status} for ${url}`);
      }
      return response.json();
    })
);

// Using Promise.all to run all fetch requests in parallel
Promise.all(fetchPromises)
  .then(results => {
    console.log('All data fetched successfully:', results);
  })
  .catch(error => {
    console.error('One or more requests failed:', error);
  });

📌 **Keep Learning & Keep Coding! 🚀**
