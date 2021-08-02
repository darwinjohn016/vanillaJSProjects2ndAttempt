// Interview Challenges

console.log("INTERVIEW CHALLENGES");

// Palindrome

// For Loop
const palindrome = (string) =>
{
    let palindromeWord = ""; 
    for(let i=string.length-1; i>=0; i--)
    {
        palindromeWord+=string[i];
    }

    palindromeWord === string ? console.log("Palindrome") : console.log("Not A Palindrome");
}

palindrome("madam");

// String prototype built in methods

const palindrome1 = (string) =>
{
    let palindromeWord = string.split('').reverse().join('');
    palindromeWord === string ? console.log("Palindrome") : console.log("Not A Palindrome");
}

palindrome1("madam");

// Using Recursion


const palindrome2 = (() =>
{
    let palindromeWord = "";

    return (string,count= string.length-1) =>
    {    
        if(count < 0) return;
        palindromeWord+= string[count];
        if(palindromeWord.length === string.length) palindromeWord === string ? console.log("Palindrome") : console.log("Not A Palindrome");
        return palindrome2(string,--count);
    }
})()

palindrome2("hello");

// No Duplicates in an Array

// Using includes() and for loop

const noDuplicates = (array) =>
{   
    let newArray = [];

    for(let i=0; i<array.length;i++)
    {
        newArray.includes(array[i]) ? "" : newArray.push(array[i]);
    }

    console.log(newArray);
}

noDuplicates([1,2,2,3,3,4,4]);

// Using SET

const noDuplicates1 = (array) =>
{
    let newArray = Array.from(new Set(array));
    console.log(newArray);
}

noDuplicates1([1,2,2,3,3,4,4,5,5])

// Using Recursion

const noDuplicates2 = (() =>
{
    let newArray = [];

    return (array,count = 0)=>
    {
        if(count > array.length-1)
        {
          console.log(newArray);
          return;  
        } 
        newArray.includes(array[count]) ? "" : newArray.push(array[count]);

        return noDuplicates2(array,++count)
    }   
})()

noDuplicates2([1,2,2,3,3,4,4,5,5])

// Minimum and Maximum Value in Array

// Using For Loop

const minMaxNum = (array) =>
{
    let highest = array[0];
    let lowest = array[0];
    for(let i=0; i<array.length; i++)
    {
        if(array[i] > highest) highest = array[i];
        else if(array[i] < lowest) lowest = array[i];
    }
    console.log(highest,lowest);
}

minMaxNum([1,2,3,4,5,25,-5]);

// Using Math.min() and Math.max()

const minMaxNum1 = (array) =>
{
    let highest = Math.max(...array);
    let lowest = Math.min(...array);

    console.log(highest,lowest);
}

minMaxNum1([1,2,34,4,5,25,-5]);

// Get The Two Lowest Values in An Array

// Using For Loop

const twoMinNum = (array) =>
{
    let lowest = array[0];
    let lower = array[0];

    for(let i=0; i<array.length;i++)
    {
        if(array[i] < lowest) lowest = array[i];
    }

    let filteredArray = array.filter(a => a!==lowest);

    for(let i=0; i<array.length;i++)
    {
        if(filteredArray[i] < lower) lower = filteredArray[i];
    }

    console.log(lowest,lower);
}

twoMinNum([16,18,1,24,32,5,10,100]);

// Using Math.min()

const twoMinNum1 = (array) =>
{
    let lowest = Math.min(...array);
    let filteredArray = array.filter(x => x!==lowest);
    let lower = Math.min(...filteredArray);

    console.log(lowest,lower);
}

twoMinNum1([16,18,2,24,32,7,10,100]);

// Getting The Two Maximum Values in an Array

// Using For Loop

const twoMaxNum = (array) =>
{   
    let highest = array[0];
    let higher = array[0];

    for(let i=0; i<array.length;i++)
    {
        if(array[i] > highest) highest = array[i];
    }

    let filteredArray = array.filter(a => a!==highest);

    for(let i=0; i<array.length;i++)
    {
        if(filteredArray[i] > higher) higher = filteredArray[i];
    }

    console.log(highest,higher);
}

twoMaxNum([16,18,2,24,32,7,10,100]);

// Using Math.max()

const twoMaxNum1 = (array) =>
{
    let highest = Math.max(...array);
    let filteredArray = array.filter(x => x!== highest);
    let higher = Math.max(...filteredArray);

    console.log(highest,higher);
}

twoMaxNum1([16,18,2,24,1024,7,10,120]);

// Check Number if Prime or Composite

const primeComposite = (num) =>
{
    if(num === 2) console.log("Prime Number");
    else if(num % 2 === 0) console.log("Composite");
    else 
    {
        let storage = 0;
        let integerNum = 0;
        for(let i=2; i<num; i++)
        {
            storage = num/i;
            Number.isInteger(storage) ? integerNum++ : ""; 
        }
        integerNum > 0 ? console.log("Composite") : console.log("Prime"); 
    } 
}

primeComposite(7);

// Using Recursion

const primeComposite1 = (() =>
{
	let integerNum = 0;
	return (num,count = 2)=>
	{
		if(count === num)
		{
			integerNum > 0 ? console.log("Composite") : console.log("Prime"); 
			return;
		}
		if(num === 2) console.log("Prime Number");
		Number.isInteger((num/count)) ? integerNum++ : "";

		return primeComposite1(num,++count);
	}
})()

primeComposite1(89);

// Fibonacci Sequence

// Using For Loop

const fibonacci = (num) =>
{
    let firstNum = 1;
    let secondNum = 1;
    let sum = 1;
    let array = [];

    for(let i=0; i<num; i++)
    {
        firstNum = secondNum;
        secondNum = sum;
        sum = firstNum + secondNum;
        
        array.push(firstNum,secondNum,sum);
    }    
    let noDuplicateArray = Array.from(new Set(array));
    noDuplicateArray.unshift(1);

    console.log(noDuplicateArray);
}

fibonacci(6);

// Using Recursion

const fibonacci1 = (() =>
{
	let array = [];
	let firstNum = 1;
	let secondNum = 1;
	let sum = 1;

	return (num)=>
	{
		if(num < 1)
		{
			let noDuplicateArray = Array.from(new Set(array));
			noDuplicateArray.unshift(1);
			console.log(noDuplicateArray);
			return;
		}

		firstNum = secondNum;
		secondNum = sum;
		sum = firstNum + secondNum;

		array.push(firstNum,secondNum,sum);

		return fibonacci1(--num);
	}
})()

fibonacci1(6);

// Factorial

// Using For Loop

const factorial = (num) =>
{
    let storage = 1;
    let array = [];

    for(let i=1; i<=num; i++)
    {
        storage *= i;
        array.push(storage);
    }

    console.log(array);
}

factorial(10);

// Using Recursion

const factorial1 = (() =>
{
	let storage = 1;
	let array= [];

	return (num)=>
	{
		if(num < 1)
		{
			console.log(array);
			return;
		}
		storage *= num;
		array.unshift(storage);

		return factorial(num--);
	}

})()

factorial1(10);

// Sorting an Element From Lowest to Highest Value in an Array

// Using Array.prototype.sort() built in method 

const sortMethod = (array) =>
{
    let sortedArray = array.sort((a,b) => a-b);
    console.log(sortedArray);
}

sortMethod([1,67,3,400,500,234,1024,8,25,65,42]);

// Using Bubble Sort

const bubbleSort = (array) =>
{
    for(let i=0; i<array.length; i++)
    {
        for(let j=i+1,temp; j<array.length; j++)
        {
            if(array[j] < array[i])
            {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            } 
        }
    }
    console.log(array);
}

bubbleSort([1,67,3,400,500,234,1024,8,25,65,42]);

// Using Quick Sort

const quickSort = (array) =>
{
    if(array.length < 2) return array;

    let pivot = Math.floor(array.length/2);
    let left = [];
    let right = [];


    for(let i=0; i<array.length;i++)
    {
        if(array[i] < array[pivot]) left.push(array[i]);
        else if(array[i] > array[pivot]) right.push(array[i]);
    }

    return [...quickSort(left),array[pivot],...quickSort(right)];

    
    // 11 10 target array
    // none L
    // 10 pivot
    // 11 R

    // 10 11 R

    // 11 4 2 6 8 5 1 10 3 target array
    // 8 pivot
    // 4 2 6 5 1 3 L
    // 11 10 R

    // 4 2 6 5 1 3 target array
    // 5 pivot
    // 4 2 1 3 L
    // 6 R

    // 4 2 1 3 target array
    // 1 pivot
    // none L
    // 4 2 3 R

    // 4 2 3 target array
    // 2 pivot
    // none L
    // 4 3 R

    // 4 3 target array
    // 3 pivot
    // none L
    // 4 R

    // Arrange everything now upwards in order of left,pivot,right
    
    // 3 4 
    // 2 3 4 
    // 1 2 3 4 
    // 1 2 3 4 5
    // 1 2 3 4 5 6
    // 1 2 3 4 5 6 8
    // 1 2 3 4 5 6 8 10 11

}

console.log(quickSort([11,4,2,6,8,5,1,10,3]));

// Using Merge Sort

const mergeSort = (array) =>
{
    if(array.length < 2) return array;

    let start = 0;
    let end = array.length;
    let middle = Math.floor(array.length/2);

    let left = array.slice(start,middle);
    let right = array.slice(middle,end);

    let sortedL = mergeSort(left);
    let sortedR = mergeSort(right);

    // 11 4 2 6 8 5 1 10 3

    // 11 4 2 6  L
    // 8 5 1 10 3 R

    // 11 4 L
    // 2 6 R

    // 11 L
    // 4 R

    // 4 11 L

    // 2 L
    // 6 R

    // 2 6 R

    // 4 11 L
    // 2 6 R

    // 2 4 6 11 L

    // 8 5 L
    // 1 10 3 R

    // 8 L
    // 5 R

    // 1 L
    // 10 3 R

    // 10 L
    // 3 R

    // 5 8 L
    // 1 3 10 R

    // 1 3 5 8 10 R

    // 2 4 6 11 L

    // 1 3 5 8 10 R

    // 1 2 3 4 5 6 8 10 11 

    return mergeArrays(mergeSort(left),mergeSort(right));
}

const mergeArrays = (left,right) =>
{
    let newArray = [];
    
    while(left.length && right.length)
    {
        left[0] < right [0] ? newArray.push(left.shift()) : newArray.push(right.shift());
    }
    while(left.length)
    {
        newArray.push(left.shift())
    }
    while(right.length)
    {
        newArray.push(right.shift())
    }

    return newArray;

}

console.log(mergeSort([11,4,2,6,8,5,1,10,3]));

// Finding Value Using Binary Search

// Using For Loop

const binarySearch = (array,value) =>
{
    let sortedArray = array.sort((a,b) => a+b);
    let middle = Math.floor(array.length/2);
    let start = 0;
    let end = array.length-1;

    for(let i=0; i<middle; i++)
    {
        if(sortedArray[start] === value || sortedArray[end] === value) 
        {
            console.log("Element Found");
            break;
        }
        if(i === middle-1) console.log("Element Not Found"); 
        if(sortedArray[start] < sortedArray[middle]) start++;
        else if(sortedArray[end] > sortedArray[middle]) end--;
    }
}

binarySearch([2,3,1,5,6,812,41,231,31561,131,567,89,1024],1024)

// Using Recursion

const binarySearch1 = (array,value,start=0,end=array.length-1) =>
{
    let sortedArray = array.sort((a,b) => a+b);
    let middle = Math.floor(array.length/2);

    if(start >= middle && end <= middle)
    {
        console.log("Element Not Found");
        return;
    } 

    if(sortedArray[start] === value || sortedArray[end] === value)
    {
        console.log("Element Found");
        return;
    }

    return binarySearch1(sortedArray,value,++start,--end);
}

binarySearch1([2,3,1,5,6,812,41,231,31561,131,567,89,1024],1024)

// Edabit Challenges

console.log("");
console.log("EDABIT CHALLENGES");

// Product of Two Highest Values in An Array

const productOfTwoHighVal = (array) =>
{
    let highestValue = Math.max(...array);
    let filterArray = array.filter(a => a!== highestValue);
    let higherValue = Math.max(...filterArray);
    let product = highestValue * higherValue;
    console.log(product);
} 

productOfTwoHighVal([-1,-2,-3,-3]);

// Concantenates 7 to the end of every element in an array

const appendSeven = (array) =>
{
    let newArray = [];
    for(let i=0; i<array.length; i++)
    {
        let element = array[i] + "7";
        if(array[i].includes("7")) element = array[i];
        newArray.push(element);
    }
    console.log(newArray);
}

appendSeven(["A","B","C","D"]);

// Sum of Two Lowest Positive Numbers

const sumOfTwoPosNum = (array) =>
{
    let positiveArray = array.filter(a => Math.sign(a) === 1);
    let lowestValue = Math.min(...positiveArray);
    let filterArray = positiveArray.filter(a => a!== lowestValue);
    let lowerValue = Math.min(...filterArray);
    let sum = lowestValue + lowerValue;
    console.log(sum);
} 

sumOfTwoPosNum([-1,-2,3,5,7]);

// Two Parameters Order and Cost, Return Order Greater Than Cost

const orderAndCost = (order,cost) =>
{
    for (let [key,value] of Object.entries(order))
    {
        if(value < cost) delete order[key];
        
    } 

    console.log(order);
}

orderAndCost({
    a : 3000,
    b : 4000,
    c : 700
},1000)

// Multiplication Table

const multiplicationTable = (()=>
{
    let count = 1;
    let smallArr = [];
    let bigArr = [];

    return (num) =>
    {
        do 
        {
            for(let i=1; i<=num; i++)
            {
                smallArr.push(i*count);
            }
            bigArr.push(smallArr);
            smallArr = [];
            count ++;
        }
        while(count <= num);
        console.log(bigArr);
    }
    
})()

multiplicationTable(5);

// Check if Valid Hex Code

const validHexCode = (string)=>
{
    let count = 0;
    let hexCodeArr = ["#","A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
    let upperCaseString = string.toUpperCase().split('');
    
    for(let i=0; i<string.length;i++)
    {
        if(hexCodeArr.includes(upperCaseString[i])) count++;
        else
        {
            count=0;
            break;
        }
    }

    if(!string.includes("#") || string.indexOf("#") !== 0) console.log("No # At Beginning or Wrong Place of #");
    else if(string.length !== 7) console.log("Length must be exactly seven characters");
    else if(count > 0) console.log("Valid Hex Code");
    else if(count === 0) console.log("Not A Valid Hex Code");
}
validHexCode("#4a1aaf");

// A number has a breakpoint if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.

const validBreakpoint = (() =>
{
	let array = [];

	return (num) =>
	{
		let numToArray = num.toString().split('');
		for(let i=0; i<numToArray.length; i++)
		{
			array.push(parseInt(numToArray[i]));
		}

		let reduceArray = array.reduce((total,num) => total + num);

		array.includes(reduceArray/2) ? console.log("Breakpoint") : console.log("Not A Breakpoint");
	}

})()

validBreakpoint(112);

// Create a function that can convert from normal notation to tally-mark notation and vice versa. In tally-mark notation, a number can be decomposed as the sum of 5s + remainder.

// The function will look like this: switchNotation([current scores], desired notation)

// Ex.1 Normal: 3, 24, 4, 9
// Ex.1 Tally: 3, 55554, 4, 54

// Ex.2 Normal: 2, 12, 2, 4
// Ex.2 Tally: 2, 552, 2, 4

const switchNotation = (scores,notation) =>
{
    let newScore = [];
    for(let i=0; i<scores.length;i++)
    {
        if(notation === "Tally")
        {
            if(scores[i] < 5) newScore.push(scores[i]);
            else
            {
                let remainder = scores[i] % 5;
                let quotient = Math.floor(scores[i] / 5);
                let string = "";
                for(let j=0; j<quotient; j++)
                { 
                    string += 5;
                }
                if(remainder !== 0) string = string + remainder;
                newScore.push(parseInt(string));
            }
        }
        else if(notation === "Normal")
        {
            if(scores[i] < 5) newScore.push(scores[i]);
            else
            {
                let sum = scores[i].toString().split('').reduce((x,y) => parseInt(x) + parseInt(y));
                newScore.push(sum);
            }
        }
    }
    console.log(newScore);
}

switchNotation([1,2,24],"Tally");


class Polygon {
    constructor() 
    {
        this.name1 = "Polygon";
    }

    move()
    {  
        console.log(this.name1);
    }
}

 
class Square extends Polygon {
    constructor() {
        super();
    }
}

const square = new Square();
const polygon = new Polygon();


console.log(square);

function User(name) {
    this.name = name;
    this.isAdmin = false;
    return this;
}

const hey = 
{
    name : "Dars",
}

let user3 = User.bind(hey,"Darwin");
let user2 = User.call(hey,"Dars");

// user3();
// console.log(user2);

let user = new User("Jack");
let user1 = new User("John");

console.log(user === user1);

User.prototype.fullName = function()
{
    console.log(this.name);
}

console.log(user);
user.fullName();

console.log(user1);

function factory()
{
    return {
        name : "dars",
        age : 21,
    }
}

class String1
{
    constructor(string)
    {
        this.string = string;
    }

    toUpperCase1()
    {
        console.log(this.string.toUpperCase());
    }
}

let string1 = new String1("Hello");

console.log(string1);

string1.toUpperCase1();

function Car1(name)
{
    this.name = name;
}

const car1 = new Car1("Honda");


class Car {
    constructor(name) {
        this.name = name
    }

    drive()
    {
        console.log(`I am driving the ${this.name}`);
    }
}

// Since Car is a function it has a property called prototype that is an objects consisting of methods
// Car is a constructor method in the prototype
// a constructor is a function that creates/instantiate an object if the function is called with the new keyword
// the new keyword automatically runs the constructor method and the this keyword
// will point to an empty object, constructor assigns the properties and arguments to the this object and then returns it
// thats why when we run car variable it consist of an object value;
// drive is a method in the prototype which are shared by every object created and instantiated by the constructor with the new keyword stored in variables.


const car = new Car('Honda');
// this = {}

// this.name = "Honda";

// this = {name = "Honda"};

// car = {name = "Honda"};


const car2 = new Car("Mitsubishi");


// car = {name: "Honda"};
// car.constructor.prototype = {methods, methods of the class}
// car2 = {name: "Mitsubishi"};

car.drive();

class House{
    constructor(){
        this.name = "Dars";
    }

    static yolo()
    {
        return `Add + ${this.name}`;
    }

    get theName(){
        return `Yolo + ${this.name}`;
    }

    set theName(value){
        this.name = value;
    }
}

const house = new House();

console.log(House.yolo());

house.theName = "April";
console.log(house.theName);
house.name = "Darwin";
console.log(house.theName);

let stringers = "string";

let stringersz = String.prototype.toUpperCase();

console.log(stringersz);

class EmployeeWage{
    #tax;
    constructor(salary){
        this.salary = salary
        this.#tax = 0.15;
    }

    calculate(){
        this.finalSalary = this.salary - (this.salary * this.#tax);
        console.log(`This is your salary : ${this.finalSalary}`);
    }
}

const wage = new EmployeeWage(5000);
wage.calculate();

// Single Responsibility Principle - a class has only one reason to change or has one job
// Open and Closed Principle - open for extension closed for modification
// Liskov Principle - objects that are in a subclass should behave the same way the objects in the superclass does
// Interface Segregation Principle - classes should not rely on methods that they dont need instead give them the methods they only need
// Dependency Inversion Principle - abstraction must not depend on details. Details must depend on abstractions

// Single Responsibility

class Stopwatch{
    constructor(){
        this.interval = null;
    }
    start(){

    }
    pause(){

    }
    stop(){

    }
    // This save to local storage is not a job of the class Stopwatch
    saveToLocalStorage(){

    }
}

// Open and Closed

// Violating Open and Closed Principle

class AnimalSounds{
    constructor(animal)
    {
        this.animal = animal;
    }

    speak()
    {
        for(let i=0; i<this.animal.length;i++)
        {
            if(this.animal[i] === "Dog") console.log("Woof woof");
            else if(this.animal[i] === "Cat") console.log("Meow meow");
            else if(this.animal[i] === "Cow") console.log("Moo moo");
            // Everytime we add another animal into the arrayAnimals1
            // We need to modify this existing speak method
        }
    }
}

let arrayAnimals1 = ["Dog","Cat","Cow"];

const animalSounds = new AnimalSounds(arrayAnimals1);

console.log(animalSounds.speak());

// function addAnimals1(animal)
// {
//     arrayAnimals1.push(animal);
// }

// addAnimals1("Pig");

// Not Violating

class Dog {
    speak(){
        console.log("Woof woof")
    }
}

class Cat {
    speak(){
        console.log("Meow meow")
    }
}

class Cow {
    constructor(){
        this.bro = "Bro";
    }
    speak(){
        console.log("Moo moo")
    }
}

// If you want to add another animal you just have to another add another 
// class of the animal and you can prevent modifying your existing code.

let arrayAnimals2 = [new Dog(),new Cat()];

function addAnimals2(animal)
{
    let capitalizeString = animal.slice(0,1).toUpperCase() + animal.slice(1,animal.length).toLowerCase();
    let stringToConstructor = (Function('return new ' + capitalizeString))();
    console.log(stringToConstructor);
    arrayAnimals2.push(stringToConstructor);
}

addAnimals2("cow");

function animalSounds2(arrayAnimals2){
    arrayAnimals2.forEach(animals =>{
        animals.speak();
    })
}

animalSounds2(arrayAnimals2);

// Liskov Principle

// Violating

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    setWidth(width){
        this.width = width;
    }
    setHeight(height){
        this.height = height;
    }
    getArea(){
        console.log(this.width * this.height);
    }
}

class Square1 extends Rectangle{
    setWidth(width){
        this.width = width;
        this.height = width;
    }
    setHeight(height){
        this.height = height;
        this.width = height;
    }
}

const square1 = new Square1(5,5);
const rectangle1 = new Rectangle(7,2);

function increaseHeight(shape){
    shape.setHeight(shape.height + 1);
}

increaseHeight(rectangle1);
increaseHeight(square1);

// class Square violates the liskov principle with class Rectangle
// A square doesnt behave like the rectangle does
// The square increases both the width and height. 

square1.getArea(); // 36
rectangle1.getArea(); //21

// Another example

class FlyingBird{
    constructor(bird){
        this.bird = bird;
    }
    fly(){
        console.log("I can fly");
    }
}

class Chicken extends FlyingBird{
    fly(){
        // throw new Error("I can't fly");
    }
}

class Eagle extends FlyingBird{
    fly(){
        console.log("I can fly fast");
    }
}

const eagle = new Eagle();
const chicken = new Chicken();

function flyBirds(bird){
    bird.fly();
}

flyBirds(eagle);
flyBirds(chicken);

// Interface Segregation

// Violating

class Bird{
    constructor(bird){
        this.bird = bird;
    }
    swim(){

    }
    fly(){

    }
}

class Penguin extends Bird{
    swim(){
        // can swim
    }
    fly(){
        // cant fly
    }
}

class Eagle2 extends Bird{
    swim(){
        // cant swim
    }
    fly(){
        // can fly
    }
}

// Not Violating

class Bird1{
    constructor(bird){
        this.bird = bird;
    }
}

const flyBirdFly = function(){
    console.log("I can fly");
}

const swimBirdSwim = function(){
    console.log("I can swim yey");
}

class Eagle1 extends Bird1{
    
}

Eagle1.prototype.fly = flyBirdFly;

class Penguin1 extends Bird1{
    
}

Penguin1.prototype.swim = swimBirdSwim;

const penguin1 = new Penguin1();

penguin1.swim();





// Hoisting
// Passed by Value and Reference
// Callstack
// Callback
// Scope Global Function Inner Outer Block 
// Closures Lexically
// Functions Arguments and Return 
// Recursion
// Higher Order Function
// Pure Impure Function
// DOM Events, Traversal , Manipulation
// addeventlistener
// querySelector,children,firstElementChild/sibling,closest
// classList.add/remove/toggle element.style.color = "red" append prepend createElement textContent innerHTML innerText
// Event Bubbling Capturing
// Let vs Const vs Var
// Arrow Functions
// IIFE
// Object/Array Destructuring
// Primitive and Non Primitive Data Types - Heap Stack Number String Array Object Function Null Undefined BigInt Symbol Boolean
// Big O Notation Time Complexity Constant Linear Quadratic Logarithmic Linearithmic Exponential
// Bubble Sort, Merge Sort, Quick Sort and Binary Search
// Stacks FILO Queues FIFO Arrays Hashmap Linked-List Trees 

// OOP
// Factory and Constructor Functions
// new and this keyword 
// bind call apply
// Class
// Prototype
// Constructor
// Properties
// Method
// __proto__
// getters and setters
// static and private method/properties
// EIAP
// SOLID






