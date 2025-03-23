// Challenge One
// Normal Function
let names = function (...name) {
    return `String [${name[0]}],[${name[1]}],[${name[2]}],[${name[3]}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// Anonymous Function
let namess = (...name) => `String [${name[0]}],[${name[1]}],[${name[2]}],[${name[3]}] => Done !`;

console.log(namess("Osama", "Mohamed", "Ali", "Ibrahim"));

// Challenge Two
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one+two+nums[0];

console.log(calc(10, 20, myNumbers[1]));
