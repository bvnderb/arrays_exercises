let myArray = [
    {
        name: "apple",
        price: 1.99,
        quantity: 5,
        category: "fruit"
    },
    {
        name: "banana",
        price: 2.99,
        quantity: 10,
        category: "fruit"
    },
    {
        name: "carrot",
        price: 0.99,
        quantity: 20,
        category: "vegetable"
    },
    {
        name: "lettuce",
        price: 1.99,
        quantity: 10,
        category: "vegetable"
    },
    {
        name: "broccoli",
        price: 2.99,
        quantity: 5,
        category: "vegetable"
    },
    {
        name: "orange",
        price: 1.99,
        quantity: 10,
        category: "fruit"
    },
    {
        name: "grape",
        price: 2.99,
        quantity: 5,
        category: "fruit"
    }
];

// tasks
// create a function that takes an array of objects
// and checks if there is fruit in the Array
// if there is fruit, return true
// if there is no fruit, return false

// the classic way 
// function checkForFruit(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].category === "fruit"){
//             return true;
//         }
//     }
//     return false;
// }

