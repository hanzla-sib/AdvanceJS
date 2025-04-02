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


Reduce --> reducing an array to a single value
array.reduce((accumulator, currentvalue, index, array)=>{
//logic
},initailvalues)

const sum=numbers.reduce((acc,num)=> acc+num,0)
console.log("sum ",sum)



const maxValue = numbers.reduce(
  (max, num) => (num > max ? num : max),
  numbers[0]
);

console.log("max number ", maxValue);


this Keyword
this is a simple object

const restaurant={
    name:"hanzla",
    order:function(){
        console.log(this.name)
    }
}

restaurant.order()



const restaurant={
    name:"hanzla",
    order:function(){
        const helper=()=>{
            console.log(this.name)
        }
      helper()
    }
}

restaurant.order()

if no arrow fucntion then this is undefined, as when use arrow function it has no owned this, but simple funciton have their own this 



Constructor Functions
used to create and initialize objects

IIFE imediately invoked functions expressions
its a functon which executes imediately after being defined. it is enclosed within parenthesis and called instantaly
(function () {
  console.log("hanzla is good");
})();
its values are not accesible globaly and
we dont have to call the fucntion it seperately

var ans = (function () {
  var name = "hanzla";
  return {
    getter: function () {
      console.log(name);
    },
    setter: function (updatename) {
      name = updatename;
    },
  };
})();
ans.getter()


//prototyping  or Inheritence

const parent = {
  canTalk: true,
  canWalk: true,
  canSing: true,
};

const son = Object.create(parent);
son.canDance = true;


console.log("son ",son.canSing)

Pure vs impure fucntions
a pure fucntion is function that always gives the same output for the same input.
has no side effect does not change external varaibles, DOM,API,calls,etc

like func(a,b){
    console.log(a+b) //always gives same output on same input
}


impure function
may return diff outputs for the same input
has side effects modifies external varaibles, DOM,API,LOGS,etc

let total=10;
function addtoTotal(num){
    total+=num //modifies external varaible
    return total

}
console.log(addtoTotal(5)) // 15
console.log(addtoTotal(5)) //20


Clousers in JS
a clousure is when a function remembers the varaibles from its outer function even after the outer function has finished executing.


let and const are block scoped varaibles