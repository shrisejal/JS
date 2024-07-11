/** 
* Function Declaration
* @param {number} a - It will have a number
* @param {number} b - It will have b number
* @return {number} - It return the add of a and b
*/

console.log(add(5,4));

 function add (a, b){
    return a+b;
}
/** 
* Function Declaration
* @param {number} a - It will have a number
* @param {number} b - It will have b number
* @return {number} - It return the multiply of a and b
*/


console.log(multiply(8,9));
function multiply(a,b){
    return a*b;
}
/** 
   * function Declaration
   *  @param (string) fname - It will have a string value
   *  @reurn (string) - It will returns the string value pass in
    the greet parameter
*/

function myName(fname){
    return fname;
}
console.log(myName('sejal'));
/** 
** Function Expression
* @param {number} a - It will have a number
* @param {number} b - It will have a number
* @return {number} - It return the multiplication of a and b
*/
 
 let mutipication =function(a , b){
    return a*b;
 }
 console.log(mutipication(4,6));

 /** 
* Arrow function
* @param {number} x - It will have a number value 
* @console.log{number} - It will print the square of a given value
*/
 const square = x => x*x;
 console.log(square(6));

 const greeting = () => 'Hello, World!'; // no parameter
 console.log(greeting()); // Output: Hello, World!

/** 
  * Multiline Arrow function
  *This function calculates the sum and product of two numbers.
  *It uses an arrow function to perform the calculations:
   - Computes the sum of 'a' and 'b'.
   - Computes the product of 'a' and 'b'.
  *Returns an object with properties 'sum' and 'product'.
*/

 const addAndMultiply = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product};
};
console.log(addAndMultiply(3, 4)); 

/**
   *Default parameter
   *Function: greet
   
   *Generates a greeting message with an optional 'name' parameter.
   *Defaults to 'sejal' if 'name' is not provided. Uses template literals.
   
   *Example Usage:
   - greet() returns 'Hello, sejal!'.
   - greet('sarita') returns 'Hello, sarita!'.
*/

function greet(name = 'sejal') {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet('sarita')); 
    
/** 
   *Default multiple parameter 
   *Function: createUser
   
   *Creates a user object with optional parameters for 'name', 'age', and 'city'.
   * Defaults to 'Nothing' for name, 0 for age, and 'unknown' for city if not provided.
   
   * Example Usage:
   - createUser() returns { name: 'Nothing', age: 0, city: 'unknown' }.
   - createUser('Alice', 20) returns { name: 'Alice', age: 20, city: 'unknown' }.
   - createUser('Roy', 30, 'Paris') returns { name: 'Roy', age: 30, city: 'Paris' }.
*/

function createUser(name ='Nothing' , age = 0,  city ='unknown'){
    return{
        name ,
        age ,
       city
     } ;
}
console.log(createUser());
console.log('Alice', 20);
console.log('Roy', 30 , 'Paris');



/** 
   *Destructing parameter

   *Function: getFullName
   
   *Extracts 'firstName' and 'lastName' from an object using destructuring.
   *Returns a full name string by combining 'firstName' and 'lastName'.
   
   *Example Usage:
   - With { firstName: 'Alice', lastName: 'Roy', age: 30 },
     getFullName({ firstName, lastName }) returns "Alice Roy".
*/
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const user = {
    firstName: 'Alice',
    lastName: 'Roy',
    age: 30
};

console.log(getFullName(user)); // Alice Roy 
    
/**
 * 
 * @param {string} separator - It will have only one string value 
 * @param  {...any} strings - It will accept indefinite number of values
 * @returns - First it will place hyphen(-) between 3 strings and store the string in result after that result the modifiedResult 
 will place hyphen(-) between each strings  
 */
function concatenateStrings(separator, ...strings) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {

        result += strings[i];
        if (i < strings.length - 1) {
            result += separator;
        }
    }
    return result;
}

console.log(concatenateStrings("-", "Hello", "World", "JavaScript")); // Output: "Hello-World-JavaScript"
console.log(concatenateStrings(" ", "This", "is", "a", "test")); // Output: "This is a test"

function concatenateStrings(separator, ...strings) {
    let result = "";
    let modifiedResult = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += separator;
        }
    }

    for (let j = 0; j < result.length; j++) {
        modifiedResult += result[j];
        if (j < result.length - 1) {
            modifiedResult += separator;
        }
    }
    return modifiedResult;
}
console.log(concatenateStrings("-", "Hello", "World", "JavaScript"));



/** 
* Documentation and comments
*function declaration 
* @param {number} a - It accept first number
* @param {number} b - It accept second number
* return {number}  The sum of a and b
*/


    

    
