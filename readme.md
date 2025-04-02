# JavaScript Notes

## 🖥️ Window Object (Provided by the Browser)
The `window` object is a global object provided by the browser, acting as a container for various features not part of core JavaScript.

### 🔹 Important Properties & Methods
- `window.location` → Returns the URL (href) of the current window.
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
    // Performs operation on each element
});
```
📌 **Drawback** → It modifies the original array.

### 🔹 `map()`
```js
const newArray = array.map((element) => {
    return element * 2; // Example: multiplying each element by 2
});
```
📌 **Advantage** → Creates a **new array** without modifying the original one.

---

📌 **Keep Learning & Keep Coding! 🚀**



First class funcitons in JS
in JS these funtions are assigned to variables and passed as arguments
function displayResult(result) {
  console.log(result);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}


add(1,3,displayResult)


Higher order function
its a fucntion that takes another funciton as an argument or return a functions as a result (or both)

function Greet (name,callback){
console.log("Hi ",name)
callback()
}

function Bye(){
    console.log("bye ")
}

Greet("hanzla ",Bye)

or

function multiplyBy(factor){
    return function(num){
        return num*factor
    }
}

const double=multiplyBy(5);
console.log(double(3))


filter and reduce

filter --> Selective filtering
the fileter method crates a new array with elements that pass a given conditon
// Array.filter((element,index,array))
const even=numbers.filter(num=>num%2==0)
