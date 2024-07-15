// Write a function named "minutesToSeconds" that takes a number of minutes and returns the equivalent number of seconds.
function minuteToSecond(minutes) {
  return minutes * 60;
}
console.log("The 5 minute is " + minuteToSecond(5) + " in seconds");
// Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.
function isEven(num) {
  if (num % 2 == 0) {
    return "true";
  }
  return "false";
}
console.log(isEven(8));
console.log(isEven(15));

// Write a function named max that takes two numbers as arguments and returns the larger of the two.
function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(8, 10));
console.log(max(4, 3));

// Write a function named ismax that takes three numbers as arguments and returns the larger of the three.
function isMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}
console.log(isMax(2, 4, 5));
console.log(isMax(4, 8, 3));
console.log(isMax(9, 7, 3));

// Write a function named factorial that takes a number as an argument and returns its factorial.
const factorial = (n) => {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(8)); 

// Write a function named reverseString that takes a string as an argument and returns the string reversed
function reverseString(str) {
  let reversedString = " ";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString("Hello"));
console.log(reverseString("javascript"));

//Write a function named sumArray that takes an array of numbers and returns the sum of all the numbers.

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));

// Write a function named containsSubstring that takes two strings as arguments and returns true if the second string is found within the first string, and false otherwise.
function containsSubstring(str, substr) {
  return str.includes(substr);
}
console.log(containsSubstring("Hello World", "Hello"));
console.log(containsSubstring("Hello World"));

function isPalindrome(str){
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
        }
        if(reversed == str)
            return "true";
         
         else
            return "false";
         
}

console.log(isPalindrome("kanak"));
console.log(isPalindrome("sejal"));

// Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(str){
    let count = 0;

    for(let i =0;i<str.length;i++){
        let char = str[i];

        if(char=='a'||char=='e'||char=='i'||char =='o'||char=='u'||char=='A'||char=='E'||char=='O'||char=='I'||char=='U')

    {
count++;
}
    }
return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("sejal Shrivastava"));



