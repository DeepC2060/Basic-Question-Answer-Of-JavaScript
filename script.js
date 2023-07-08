// Value and DataTypes

// Q.1- create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.

// Ans. following are the data types of javascript:
/* 
1.String:("Hi I am DeepChand from Azamgarh.") 

2.Number:(Integer:1
          Floating value:168.2
          Infinity:Number.Positive_Infinity,Number.Negative_Infinity
          Not a Number: NaN)

3.Bigint:(1123n)

4.Boolean:(true,false)

5.Undefined:(undefined)

6.Null:(null)

7.Symbol:(Symbol('Deep'))

8.Object:(
    Array:[1,2,3,4,"deep chand"]
    Object:{ 
        name:"Deep Chand"
        age:24
        gmail:sdfghj@gmail.com}
)
*/


//Q.2- Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.

/*
 Ans.- [

    "Realme Gt Master Adition",
    "Laptop"
    "Exersize Equeipment"
    "Pen Box"
    "Shoes"
    "T-Shirt"
    "Mic"
    "Camera Stand"
    "Mobile Stand"
    "Blutooth"
 ]
 
 */


//  Q.3- Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.

// Ans.-
/**
 { 
    1:"Deep Chand"
    2:"Suraj Gautam"
    3:"Sharvesh Maurya"
    4:"Prashant Rajbhar"
    5:"Anurag Singh"
 }


 */

// Variables and typeof


//  Q.1- Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.

// Ans. 
// 1.String
let var1 = "Hi I am Deep And I am Happy to Join the pw skills"
console.log(typeof var1);

// 2.Numbers :-

// i.Integer:
let var2 = 9;
console.log(typeof var2);

// ii.Floating value:
let var3 = 37.78;
console.log(typeof var3);

// iii.Infinity
let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);

// iv.Not a Number
let var5 = NaN;
console.log(typeof var4);

// 3.Bigint
let var6 = 23424;
console.log(typeof var6);

// 4.Boolean
let var7 = true;
console.log(typeof var7); 

// 5.Undefined
let var8  = undefined;
console.log(typeof var8)

// 6.Null
let var9 = null;
console.log(var9);

// 7.Symbol:
let var10 = Symbol("deep");
console.log(typeof var10);

// 8.Object
//  i.Array;
let var11 = [1,2,3,4,5,]
console.log(typeof var11);

// ii.Object 
let var12 = { name: "deepchand", 
            course:"Full stack web development"
        }
console.log(typeof var12);



// Q2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

// Ans:- Valid Variables

let name = "deepchand"
console.log(name);

let iAmDeep = true;
console.log(iAmDeep);

// Invalid Variables
/* 
let 1name = "deepchand";
console.log(1name); //output- error

let var = 1234
console.log(var); //output- error
*/


// Q1. Write a program that prints the multiplication table in the textbook format of any number specified.

// Ans.

let num = 8;

console.log(`${num} * 1 = ${num * 1}`);
console.log(`${num} * 2 = ${num * 2}`);
console.log(`${num} * 3 = ${num * 3}`);
console.log(`${num} * 4 = ${num * 4}`);
console.log(`${num} * 5 = ${num * 5}`);
console.log(`${num} * 6 = ${num * 6}`);
console.log(`${num} * 7 = ${num * 7}`);
console.log(`${num} * 8 = ${num * 8}`);
console.log(`${num} * 9 = ${num * 9}`);
console.log(`${num} * 10 = ${num * 10}`);

// Q2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.
// Ans.
let num1 = 10;
let num2 = 6;

// Addition(+):- adds two values together.
console.log(`The addition of num1 and num2 is ${num1 + num2}`);
// Substraction(-):-Substraction one value from another
console.log(`The substraction of num1 and num2 is ${num1 - num2}`);
// Multiplication(*):- Multiplies two value together.
console.log(`The multipliction of num1 and num2 is ${num1 * num2}`);

// Division(/):-Divides one value by another
console.log(`The division of num1 and num2 is ${num1 / num2}`);
// Modulus(%):- Return the number of a division operation
console.log(`The result of modulo operation of num1 and num2 is ${num1 % num2}`);
// Exponentiation(**): raises to the power of.
console.log( `The exponention of num1 and num2 is ${num1 + num2}`);


//Q3. Write a program to find out the perimeter of a rectangle. Print the results to the console.
// Ans.
let length = 20;
let width = 30;
let perimeterOfRectangle = 2 * (length + width);
console.log(`The perimeter of rectangle with length: ${length} and width: ${width} is ${perimeterOfRectangle}`);


// Q. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.
// Ans.
// Equal 
let num01 = 12;
let num02 = 12;
console.log(num01 == num02); 

let num3 = 12;
let num4 = 10;
console.log(num3 == num4);

// Not Equal 
let num5 = 12;
let num6 = 12;
console.log(num5 != num6);

let num7 = 12;
let num8 = 10;
console.log(num7 != num8);

// Strictly Equal
let num9 = 12;
let num10 = 12;
console.log(num9 === num10);

let num11 = 12; 
let num12 = "12"; 
console.log(num11 === num12);

// Strictly Not Equal 
let num13 = 12;
let num14 = 12;
console.log(num13 !== num14);

let num15 = 12;
let num16 = "12";
console.log(num15 !== num16);

// Greater than
let num17 = 13;
let num18 = 12;
console.log(num17 > num18);

let num19 = 11;
let num20 = 12;
console.log(num19 > num20);

// Greater than or equal to
let num21 = 11;
let num22 = 12;
console.log(num21 >= num22);

let num23 = 13;
let num24 = 12;
console.log(num23 >= num24);

// lesser than

let num25 = 12;
let num26 = 13;
console.log(num25 < num26);

let num27 = 15;
let num28 = 13;
console.log(num27 < num28);


// lesser than or equal to

let num29 = 13;
let num30 = 13;
console.log(num29 <= num30);


let num31 = 15;
let num32 = 13;
console.log(num31 <= num32);

// what are Conditions, if,if-else,if-else-if,

// Q1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.

// Ans.

let trafficLight = "orange";

if ( trafficLight == "red") {
    console.log("vehicles Must Stop.");
} else if ( trafficLight == "orange") {
    console.log("vehicles Must Wait.the signal is changing to red or green.");
} else if ( trafficLight == "green" ){
    console.log("Vehicles may proceed with caution.");
} else {
    console.log("Invalid traffic Light");
}

// Q.Write a program to print the largest of 2 numbers.

let num67 = 80;
let num76 = 68;
if (num67 > num76){
    console.log("num67 is greater than num76");
} else {
    console.log("num76 is greater than num67");
}

// Q.3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

// Ans.
let num88 = 8;
if (num88 % 8 == 0 && num88 %3 ==0) {
    console.log("FixxBuzz");
} else if (num88 % 3 == 0) {
console.log("Fizz");
} else if (num88 % 5 == 0) {
    console.log("Buzz");
} else {
    console.log("invalid input");
}



// Switch Case

// Q. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.

const day = "Tuesday";
let daysUntilWeekend;
switch (day) {
    case "Monday":
        console.log(`There are 5 day(s) until the weekend.`);
    break;
    case "Tuesday":
        console.log(`There are 4 day(s) until the weekend.`);
    break;
    case "Wednesday":
        console.log(`There are 3 day(s) until the weekend.`);
    break;
    case "Thursday":
        console.log(`There are 2 day(s) until the weekend.`);
    break;
    case "Friday":
        console.log(`There are 1 day(s) until the weekend.`);
    break;
    case "saturday":
    case "Sunday":
        console.log(`There are 0 day(s) until the weekend.`);
    break;
    default:
        daysUntilWeekend = "Invalid day";
    break;

}

// 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.

// Ans.-
const monthNumber = 5;

switch (monthNumber){
    case 1:
        console.log("january");
    break;
    case 2:
        console.log("february");
    break;
    case 3:
        console.log("march");
    break;
    case 4:
        console.log("april");
    break;
    case 5:
        console.log("amy");
    break;
    case 6:
        console.log("june");
    break;
    case 7:
        console.log("july");
    break;
    case 8:
        console.log("august");
    break;
    case 9:
        console.log("september");
    break;
    case 10:
        console.log("october");
    break;
    case 11:
        console.log("november");
    break;
    case 12:
        console.log("december");
    break;
    default:
        console.log("Invalid Month number");
}



// Ternary Conditions

// 1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.
// Ans.-
let number = 0;
number == 0
? console.log("The Number is Zero")
:number > 0
? console.log("The Number is Greater than Zero")
: console.log("The Number is Lesser than Zero");

// 2. Create a program that takes in two numbers and prints the larger one.

// Ans.
let num09 = 10;
let num08 = 10;
num09 == num08
?console.log("both the number are equal.")
: num09 > num08 
? console.log(`The larger Number among the two number is $(num09).`)
: console.log(`The larger Number among the two number is $(num09).`);


// Loops

// Q.1. Write a program that generates the multiplication table in the textbook format for a given number.
// Ans-
let number1 = 9;
for(let i = 1; i <= 10; i++) {
    console.log(`${number1} * ${i} = ${number1 * i}`);
}

// Q.. Write a program that prints all the positive even numbers till the number specified.
// Ans.
let number2 = 10;
for(let i = 1; i <= number2; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}