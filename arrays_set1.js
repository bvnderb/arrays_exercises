// Exercise Set 1: Basic Array Transformations

const students = [
    { name: "Alice", age: 22, grade: "A", major: "Computer Science" },
    { name: "Bob", age: 20, grade: "B", major: "Mathematics" },
    { name: "Charlie", age: 23, grade: "A", major: "Physics" },
    { name: "Diana", age: 21, grade: "B", major: "Computer Science" },
    { name: "Eve", age: 19, grade: "C", major: "Biology" }
];

// Tasks:
// 1. Create an array of just student names
// 2. Filter students with grade "A"
// 3. Calculate the average age of all students
// 4. Create a new array with students' names in uppercase
// 5. Find the youngest student in the roster

let studentNames = students.map(student => student.name);
console.log(studentNames);
// result: [ 'Alice', 'Bob', 'Charlie', 'Diana', 'Eve' ]

let grades = students.filter(student => student.grade === 'A');
console.log(grades);
// result: 
// [
//   { name: 'Alice', age: 22, grade: 'A', major: 'Computer Science' },
//   { name: 'Charlie', age: 23, grade: 'A', major: 'Physics' }
// ]

let totalAge = students.reduce ((sum, student) => sum + student.age, 0 ); // calculate the total age first
console.log(totalAge);
let avgAge = totalAge / students.length; // easier to make the calculations seperate
console.log(avgAge);
// result: 21

let upperCase = students.map(student => student.name.toUpperCase());
console.log(upperCase);
// result: [ 'ALICE', 'BOB', 'CHARLIE', 'DIANA', 'EVE' ]

let youngestStudent = students.reduce((min, student) => {
return student.age < min.age ? student : min;
}, students[0]);
console.log(youngestStudent);
// result: { name: 'Eve', age: 19, grade: 'C', major: 'Biology' }

