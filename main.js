function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.map((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums, negativeNums];
}

//console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

//Implement a function which multiplies two numbers.
function multiply(num1, num2) {

    return num1 * num2;
}


/*The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

    However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

    Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
    * Input: [5,3,2,1,4], output = [5,3,2,4]
    * Input: [2,2,1,2,1], output = [2,2,2,1]*/

//1
function removeSmallest1(numbers) {
    let copynumbers = [...numbers]
    let indexOfMin = copynumbers.indexOf(Math.min(...copynumbers));
    copynumbers.splice(indexOfMin, 1);
    return copynumbers;
}

//console.log(removeSmallest1([11, 7, 3, 9, 5, 89, 3]))

//2
function removeSmallest2(numbers) {
    if (numbers.length === 0) return numbers;
    // let smallest = numbers.reduce((acc, el) =>acc<el?acc:el);
    let smallest = numbers.reduce((acc, el) => Math.min(acc, el));
   // console.log(smallest)
    numbers.splice(numbers.indexOf(smallest), 1);
    return numbers;
}

//console.log(removeSmallest2([11, 7, 3, 9, 5, 89, 3]))

/*
Your task is to create a function that does four basic mathematical operations.

    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2
    }
    if (operation === '-') {
        return value1 - value2
    }
    if (operation === '*') {
        return value1 * value2
    }
    if (operation === '/') {
        return value1 / value2
    }
}

//console.log(basicOp('+', 4, 7))


//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    let make = str.toUpperCase()
    return make
}

//console.log(makeUpperCase('hello'))

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
    return x.reduce((acc, el) => acc * el, 1)
}

//console.log(grow([1, 2, 3, 4]))
//2 способ
const grow2 = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i];
    }
    return res;
};
//console.log(grow2([1, 2, 3, 4]))
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {

    const result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0 || array[i] >= 0 || array[i] === 0) {
            result.push(array[i] * -1)
        } else {
            result
        }
    }
    return result;
}

//(2 способ)Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert2(array) {
    return array.map(el => el * -1)
}

//console.log(invert2([]))

/*You are given two interior angles (in degrees) of a triangle.
    Write a function to return the 3rd.
    Note: only positive integers will be tested.*/
function otherAngle(a, b) {
    let ug = 180 - (a + b)
    return ug;
}

//console.log(otherAngle(25, 35))

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
    To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
    Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
    Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
    Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/
function openOrSenior(data) {
    return data.map(([least, handicap]) => least >= 55 && handicap > 7 ? 'Senior' : "Open")
}

//console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


//2 способ
function openOrSenior1(data) {
    let result = [];
    data.forEach(function (member) {
        if (member[0] >= 55 && member[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })
    return result;
}

//3 способ
openOrSenior3 = data => data.map(e => (e[0] > 54 && e[1] > 7) ? "Senior" : "Open")

/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/
function hoopCount(n) {
    if (n >= 10) {
        return 'Great, now move on to tricks'
    } else {
        return "Keep at it until you get it"
    }
}

//console.log(hoopCount(5))

/*
Messi goals function
Messi is a soccer player with goals in three leagues:

    LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

    Note: the input will always be valid.

    For example:

    5, 10, 2  -->  17*/
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


/*
DESCRIPTION:
    In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

    At the end of the first year there will be:
    1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
    1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
    1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
    More generally given parameters:

    p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

    aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
    nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
    Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.*/
function nbYear(p0, percent, aug, p) {
    let final = [];
    let percent1 = percent / 100;
    for (p0; p0 < p; p0 += p0 * percent1 + aug) {

        let newValue = p0 + p0 * percent1 + aug
        final.push(newValue)
    }
    return final.length
}

//console.log(nbYear(1500, 5, 100, 5000))


//2 способ
function nbYear(p0, percent, aug, p) {

    let years = 0;
    for (years; p0 < p; years++) {
        p0 += Math.floor(p0 * (percent / 100) + aug);
    }
    return years;
}

//3 способ
function nbYear(p0, percent, aug, p) {

    let n = 0;
    while (p0 < p) {
        n++
        p0 = p0 + (p0 * percent / 100) + aug;
    }
    if (p0 >= p) {
        return n;
    }
    return n;

}

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
//     Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
 let finish=[]
   let a=2
    for (let i= 0;i<=n ;i++) {
        finish.push(a**i)
    }
    return finish
}
//console.log(powersOfTwo(2))

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let final=s.repeat(n)

    return  final;
}


/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3*/

function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

    However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false*/
var isSquare = function(n){
    if (n<0 | Math.sqrt(n)%1!==0){
        return false
    } else

        Math.sqrt(n)%1===0
    {return true}

}

/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(arrayOfSheep) {
    let countSheeps=0
    for (let i=0;i<arrayOfSheep.length;i++){
        if (arrayOfSheep[i]){
            countSheeps++
        }
    }
    return countSheeps
}
//2 способ
function countSheeps(arrayOfSheep) {

    return arrayOfSheep.filter((sheep)=>sheep===true).length
}



/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/
function duplicateCount(text){

    let newText=text.toLowerCase()
    let dublicate={}
    let counter=0
    for (let i=0;i<newText.length;i++){
        if(!dublicate[newText[i]]){
            dublicate[newText[i]]=1
        } else if(dublicate[newText[i]]<2){
            dublicate[newText[i]]+=1
            counter++
        }
    }
    return counter
}
/*
Implement a function which convert the given boolean value into its string representation.

    Note: Only valid inputs will be given.*/
function booleanToString(b){
    return b.toString()
}

/*
DESCRIPTION:
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/
function persistence(num) {
    const str=num.toString()
    if(str.length===1){
        return 0
    }
    const next=str.split('').reduce((acc,el)=>
    {return acc*el

    },1)
    return 1 + persistence(next)
}
//console.log(persistence(39))

//2способ
function persistence(num) {
    let splitNumArr=num.toString().split('')
    let count=0
    while(splitNumArr.length>1){
        let newList=splitNumArr.reduce((acc,curr)=>{
            return acc*curr
        })
        splitNumArr=newList.toString().split('')
        count++
    }
    return count
}

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.*/
function feast(beast, dish) {
    let firstBeast=beast.toLowerCase().split('').shift()
    let firstDish=dish.toLowerCase().split('').shift()
    let secondBeast=beast.toLowerCase().split('').pop()
    let secondDish=dish.toLowerCase().split('').pop()
    return (firstBeast===firstDish && secondBeast===secondDish )?true:false
}

/*
*/
function count (string) {
    const count={}
    string.split('').map(el=>count[el]?count[el]++:count[el]=1)
    return count;
}
//2 способ
function count (string) {
    return string.split('').reduce(function(counts,char){
        counts[char] = (counts[char]||0) + 1;
        return counts;
    },{});
}
//3
function count (string) {
    return string.split("").reduce(function(obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}
//4
function count (string) {
    string = string.split("");
    var chars = {};
    for(var i = 0; i < string.length; i++) {
        if(chars[string[i]] == undefined) chars[string[i]] = 0;
        chars[string[i]]++;
    }
    return chars;
}

/*Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.*/

function findAverage(array) {
    if (array.length){
        const arr=array.reduce((el,acc)=>acc+el)
        return arr/array.length
           }
        return 0;
}

/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/
function getAge(inputString){
    return Number(inputString[0])
}

function getAge1(inputString){
    return parseInt(inputString)
}



/*You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/
function positiveSum(arr) {
    let sum=0
    for(let i=0;i<arr.length;i++){
        if (arr[i]>0)
            sum+=arr[i]
    }
    return sum
}
//2 способ
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

//3 способ
function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}
//4 способ
function positiveSum( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
}

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

    Examples
    makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

function makeNegative(num) {
    return -Math.abs(num)
}

//2 способ
function makeNegative(num) {
    return num < 0 ? num : -num;
}

//3 способ
function makeNegative(num) {
    if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function evenOrOdd(number) {
    return (number%2===0)?'Even':'Odd'

}


/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/
function solution(str){
    return str.split('').reverse().join('')
}



/*
Very simple, given an integer or a floating-point number, find its opposite.

    Examples:

1: -1
14: -14
-34: 34*/
function opposite(number) {
    return -number
}

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. ' +
'You're given one parameter, the original string. You don't have to worry with strings with less than two characters*/
function removeChar(str){
    const newStr = str.split('')
    newStr.shift()
    newStr.pop()
    return newStr.join('')

};

//2 способ
const removeChar1 = str => {
    let newStr = ''
    for(let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
    return newStr
}
//3 способ
const removeChar2 = str => {
    return str.slice(1, str.length - 1)
}
//Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
// For example:
//
// time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

function litres(time) {

    return Math.floor(time/2);
}

// DESCRIPTION:
//     Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
//     Task
// Given a year, return the century it is in.
//
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
function century(year) {
    let centuryCount = 0;
    while (year > 0){
        year = year - 100;
        centuryCount = centuryCount + 1;
    }
    return centuryCount;
}
//2 способ
const century2 = year => Math.ceil(year/100)
//3 способ
function century3(year) {
    var century = 0;

    for(var i = 0; i < year; i++) {
        if(i % 100 == 0) {
            century++;
        }
    }
    return century;
}
//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
function digitize(n) {
    arr= String(n).split('').reverse().map(Number)
    return arr
}

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name){
/*let array=name.split(' ')
  let oneLetter=array.map(el=>el[0])
    let res=oneLetter.join('.')
    return res*/
let result=name.split(' ').map(el=>el[0]).join('.')
    return result.toUpperCase()
}
//console.log(abbrevName("veta Kovalevich"))

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
//
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible b

function isDivisible(n, x, y) {
    return (n%x===0 && n%y===0 )? true:false
}
//console.log(isDivisible(6,2,7))


//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

//console.log(greet("Sveta"))
//---------------------------------------------------
//Given an array of integers, return a new array with each value doubled.
  //  For example:
   // [1, 2, 3] --> [2, 4, 6]
function maps(x){
    return x.map(el=>el*2)
}

//console.log(maps([1, 2, 3]))
/*
Make a simple function called greet that returns the most-famous "hello world!".

    Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative
"hello world" you can think of? What is a "hello world" solution you would want to show your friends?*/
// Write a function "greet" that returns "hello world!"
function greet(){
    return "hello world!"
}

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
    If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
    Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

function lovefunc(flower1, flower2){
    // moment of truth
    if ((flower1%2===0 && flower2%2===1) || (flower2%2===0 && flower1%2===1) ){
        return true
    }else {
        return false
    }
}

//console.log(lovefunc(586,777))


//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//
// Hint for R users:
//
// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output
//
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
function solution(a, b){
    // your code here
    if (a.length>b.length){
        //let c = b+a+b
        return b.concat(a,b)
    }
    return a.concat(b,a)
        }
//console.log(solution("1", "22"))

//One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.
//
// Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.
//
// A candidate will have a minimum salary, so it will look like this:
//
// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:
//
// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.
//
// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However,
// let's also include 10% wiggle room (deducted from the candidate's minimum salary)
// in case the candidate is a rockstar who enjoys programming on Codewars in their spare time.
// The company offering the job may be able to work something out.

