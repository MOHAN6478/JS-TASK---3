// Assignment Operators


let a = 20;
let b = 10;

a += b;
console.log("Addition:", a); // 30

a = 20;
a -= b;
console.log("Subtraction:", a); // 10

a = 20;
a *= b;
console.log("Multiplication:", a); // 200

a = 20;
a /= b;
console.log("Division:", a); // 2

a = 20;
a **= b;
console.log("Exponentiation:", a); // 10240000000000

a = 20;
a %= b;
console.log("Modulus:", a); // 0

// Comparison Operators

// 2. Check whether 25 is greater than 15.

console.log(25 > 15); // output : true

// 3. Check 50 and "50" using == and ===.

console.log(50 == "50"); // true
console.log(50 === "50"); // false

// 4. Check whether 100 is not equal to 200.

console.log(100 != 200); // true
console.log(100 !== 200); // true

// 5. Check whether a person's age is greater than or equal to 18.

let age = 22;

console.log(age >= 18); // true

// Logical Operators 

// 6. Use AND operator.

console.log(20 > 10 && 30 < 50); // true

// 7. Use OR operator. 

console.log(10 > 20 || 50 > 30); // true

// 8. Use NOT operator.

console.log(!(100 > 50)); // false

// 9. Write one condition using three AND operators.

let age = 22;

console.log(age >= 18 && age <= 30 && age > 20); // true

// 10. Combine AND, OR, and NOT operators.

let age = 22;
let isStudent = true;

console.log((age >= 18 && isStudent) || !(age < 18)); // true

// Ternary Operator

// 11. Check whether a number is positive or negative.

let number = -10;

let result = number >= 0 ? "Positive" : "Negative";

console.log(result); // Negative

// 12. Check login status.

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome" : "Please Login";

console.log(message); // Welcome

// Part 5: String Concatenation and Template Strings

// 13. Combine first name and last name.

let firstName = "Mohan";
let lastName = "Raj";

let fullName = firstName + " " + lastName;

console.log(fullName); // Mohan Raj

// 14. Display name, age, and city using a template string.

let name = "Mohan Raj";
let age = 22;
let city = "Chennai";

console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`); // My name is Mohan Raj. I am 22 years old. I live in Chennai.

// Part 6: typeof Operator

// 15. Check the data type of "JavaScript" + 100.

console.log(typeof ("JavaScript" + 100)); // string

// 16. Check the data type of 100 + true.

console.log(typeof (100 + true)); // number

// Part 7: Number() Conversion  

// 17. Convert "250" into a number and add 50.

let value = "250";

let result = Number(value) + 50;

console.log(result); // 300

// 18. Convert different values using Number(). 

console.log(Number("123")); // 123
console.log(Number("abc")); // Nan
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0

// Part 8: Boolean() Conversion

// 19. Convert different values using Boolean().

console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

// Part 9: Practical Type Conversion

// 20. Convert price into a number and add 100.

let price = "500";

let finalPrice = Number(price) + 100;

console.log(finalPrice); // 600