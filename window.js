// console.log("window ",window)

// var a=1

//for each

var numbers = [1, 2, 5, 44, 10, 11, 23];
//for each
// numbers.forEach((element,index,arr)=>{
// arr[index]=element+1
// })
// console.log(numbers)

//map
// const mulThree=numbers.map((num)=>num*3)

// console.log(mulThree)

// function displayResult(result) {
//   console.log(result);
// }

// function add(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// add(1,3,displayResult)

//Higher order function

// function Greet (name,callback){
// console.log("Hi ",name)
// callback()
// }

// function Bye(){
//     console.log("bye ")
// }

// Greet("hanzla ",Bye)

// or

// function multiplyBy(factor){
//     return function(num){
//         return num*factor
//     }
// }

// const double=multiplyBy(5);
// console.log(double(3))

// Filters
// Array.filter((element,index,array))

// const even=numbers.filter(num=>num%2==0)

// console.log("even nums ",even)

//Reduce
// const sum=numbers.reduce((acc,num)=>acc+num,0)
// console.log("sum ",sum)

//find max with reduce

// const maxValue = numbers.reduce(
//   (max, num) => (num > max ? num : max),
//   numbers[0]
// );

// console.log("max number ", maxValue);

//this keyword

// const restaurant={
//     name:"hanzla",
//     order:function(){
//         console.log(this.name)
//     }
// }

// restaurant.order()


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
