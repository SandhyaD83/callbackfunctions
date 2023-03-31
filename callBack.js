// 1.

const animals = ['cat', 'dog', 'deer'];

animals.forEach(function (animal, id) {
    console.log(`${id + 1}. ${animal}`);
});

//2.
function divide(a, b) {
    return a % b;
}
function multiply(a, b) {
    return a * b;
}
function compute(a, b, op) {
    return op(a, b)
}
let result1 = compute(24, 3, divide)
let result2 = compute(40, 2, multiply)
console.log(result1)
console.log(result2)

//3.
//Asynchronous function
console.log('Code before the asynchronous function call');

setTimeout(function () {
    console.log('Delayed for 2 seconds')
}, 2000);

console.log('Code after the asynchronous function call');

//4.
// Synchronous function
function getFruits() {
    return ['Banana', 'Apple', 'Grapes'];
}
// Get fruits
let fruits = getFruits();
// The fruits array is ready to work with because getFruits
// is synchronous and returned the array of fruits we wanted
fruits.forEach(function (fruit) {
    console.log(fruit);
});
// // asynchronous function
// function getFriendsAsync() {
//     // Using setTimeout to make getFriendsAsync
//     // behave like a long-running database operation
//     setTimeout(function () {
//         return ['Fred', 'Barney'];
//     }, 0);
// }

// // Will friends have an array after this line of code runs?
// let friends1 = getFriendsAsync();

// // The following will cause an error because
// // friends is not an array yet
// friends1.forEach(function (friend) {
//     console.log(friend);
// })
//5.
// Refactor to accept a callback function
// to be called when the data is ready
function getFruitsAsync(cb) {
    setTimeout(function () {
        // pass the results to the provided callback
        cb(['Apple', 'Banana', 'Grapes']);
    }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFruitsAsync(function (fruit) {
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
});


// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
console.log(squares)
// arrow function
squares = [1, 2, 3].map(x => x * x);
console.log(squares)

const getGrade = score => {
    if (score === 100) return 'A+';
    score = Math.floor(score / 10);
    return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
};
console.log(getGrade(100))
