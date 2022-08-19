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

console.log(removeSmallest1([11, 7, 3, 9, 5, 89, 3]))

//2
function removeSmallest2(numbers) {
    if (numbers.length === 0) return numbers;
    // let smallest = numbers.reduce((acc, el) =>acc<el?acc:el);
    let smallest = numbers.reduce((acc, el) => Math.min(acc, el));
    console.log(smallest)
    numbers.splice(numbers.indexOf(smallest), 1);
    return numbers;
}

console.log(removeSmallest2([11, 7, 3, 9, 5, 89, 3]))

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
console.log(basicOp('+', 4, 7))


//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    let make=str.toUpperCase()
    return make
}
console.log(makeUpperCase('hello'))

//
