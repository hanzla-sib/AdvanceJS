// console.log("window ",window)

// var a=1

//for each

var numbers = [1, 2, 5, 10, 11, 23];
//for each
// numbers.forEach((element,index,arr)=>{
// arr[index]=element+1
// })
// console.log(numbers)

//map
// const mulThree=numbers.map((num)=>num*3)

// console.log(mulThree)

function displayResult(result) {
  console.log(result);
}

function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}


add(1,3,displayResult)