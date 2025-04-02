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